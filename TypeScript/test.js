var Role={"name":"ary"};
console.log(Role);
(function (Role) {
    console.log(Role);
    // Role["ADMIN"] = "admin";
    // Role["GUEST"] = "guest";
    // Role["USER"] = "user";
    console.log(Role);
})(Role || (Role = {}));
console.log(Role);
