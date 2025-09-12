import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  // let try register a user
  async register(createUserDto: CreateUserDto): Promise<void> {
    const { email, password } = createUserDto;
    const existingUser = await this.userModel.findOne({ email });

    if (existingUser) {
      throw new NotFoundException('User already exists');
    }

    // const newUser = new this.userModel(createUserDto);
    // await newUser.hashPassword();
    // await newUser.save();

    // Create a new user and hash the password manually
    const newUser = new this.userModel(createUserDto);

    // Log the newUser object to see if it's a full Mongoose instance with instance methods
    console.log(newUser);
    console.log('hashPassword method:', typeof newUser.hashPassword);

    // Call the hashPassword method (it should be available)
    await newUser.hashPassword();

    // Save the user to the database
    await newUser.save();
  }

  // lets try to find user by email
  async findByEmail(email: string): Promise<UserDocument | null> {
    if (!email) {
      return null;
    }
    return this.userModel.findOne({ email }).exec();
  }

  // lets try login a user

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const { email, password } = loginDto;
    const user = await this.findByEmail(email);
    if (!user) throw new Error('Invalid credentials');

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) throw new Error('Invalid credentials');

    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async deleteUser(id: string): Promise<void> {
    const result = await this.userModel.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      throw new NotFoundException('User not found');
    }

    //     async deleteUserById(id: string): Promise<void> {
    //   const result = await this.userModel.deleteOne({ _id: id });
    //   if (result.deletedCount === 0) {
    //     throw new NotFoundException('User not found');
    //   }
    // }
  }
}
