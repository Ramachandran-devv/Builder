// Product
var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    UserProfile.prototype.toString = function () {
        return "Name: ".concat(this.name || 'N/A', ", Email: ").concat(this.email || 'N/A', ", Age: ").concat(this.age || 'N/A', ", Phone: ").concat(this.phone || 'N/A', ", Address: ").concat(this.address || 'N/A');
    };
    return UserProfile;
}());
// ConcreteBuilder
var StandardUserProfileBuilder = /** @class */ (function () {
    function StandardUserProfileBuilder() {
        this.userProfile = new UserProfile();
    }
    StandardUserProfileBuilder.prototype.setName = function (name) {
        this.userProfile.name = name;
        return this;
    };
    StandardUserProfileBuilder.prototype.setEmail = function (email) {
        this.userProfile.email = email;
        return this;
    };
    StandardUserProfileBuilder.prototype.setAge = function (age) {
        this.userProfile.age = age;
        return this;
    };
    StandardUserProfileBuilder.prototype.setPhone = function (phone) {
        this.userProfile.phone = phone;
        return this;
    };
    StandardUserProfileBuilder.prototype.setAddress = function (address) {
        this.userProfile.address = address;
        return this;
    };
    StandardUserProfileBuilder.prototype.build = function () {
        return this.userProfile;
    };
    return StandardUserProfileBuilder;
}());
// Client code
var builder = new StandardUserProfileBuilder();
var userProfile = builder.setName("John Doe")
    .setEmail("john.doe@example.com")
    .setAge(30)
    .setPhone("1234567890")
    .setAddress("1234 Elm Street")
    .build();
console.log(userProfile.toString());
//# sourceMappingURL=builder.js.map