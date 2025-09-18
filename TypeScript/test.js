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


var PersonClass =  (
    function () {
        function PersonClass(name) {
            this.name = name;
            console.log(name);
        }
    return PersonClass;
}());

console.log(PersonClass);

var obj = new PersonClass("harsh");


