import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcryptjs';

// ✅ Extend the document type with custom methods
export interface UserDocument extends Document {
  email: string;
  password: string;
  hashPassword(): Promise<void>;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// This was the issue where the methods were not being attached properly
//  Attach hashPassword method
UserSchema.methods.hashPassword = async function (): Promise<void> {
  this.password = await bcrypt.hash(this.password, 10);
};

UserSchema.methods.comparePassword = async function (
  candidatePassword: string,
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};
