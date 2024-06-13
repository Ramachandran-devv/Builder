// The Builder design pattern is a creational pattern that allows for the step-by-step creation of complex objects. 
// It separates the construction of an object from its representation so that the same construction process can create 
// different representations. 
// This pattern is particularly useful when an object needs to be created with many optional parameters


// class UserProfile : This defines the UserProfile class, which is the product that will be built.
// public name?: string; : These lines define optional public properties (name, email, age, phone, address)
//  for the UserProfile class. The ? indicates that these properties are optional.
// public toString(): string : This method returns a string representation of the UserProfile object, 
// displaying its properties. If a property is not set, it returns 'N/A'.
// Product
class UserProfile {
    public name?: string;
    public email?: string;
    public age?: number;
    public phone?: string;
    public address?: string;

    public toString(): string {
        return `Name: ${this.name || 'N/A'}, Email: ${this.email || 'N/A'}, Age: ${this.age || 'N/A'}, Phone: ${this.phone || 'N/A'}, Address: ${this.address || 'N/A'}`;
    }
}
// interface UserProfileBuilder { ... }: This defines the UserProfileBuilder interface, specifying the methods that any concrete builder must implement.
// setName(name: string): UserProfileBuilder; ...: These methods (setName, setEmail, setAge, setPhone, setAddress) return the UserProfileBuilder interface, 
// allowing for method chaining. Each method takes a parameter to set a corresponding property in the UserProfile.
// build(): UserProfile;: This method returns a UserProfile object.
// // Builder Interface
interface UserProfileBuilder {
    setName(name: string): UserProfileBuilder;
    setEmail(email: string): UserProfileBuilder;
    setAge(age: number): UserProfileBuilder;
    setPhone(phone: string): UserProfileBuilder;
    setAddress(address: string): UserProfileBuilder;
    build(): UserProfile;
}

// ConcreteBuilder
class StandardUserProfileBuilder implements UserProfileBuilder {
    private userProfile: UserProfile;

    constructor() {
        this.userProfile = new UserProfile();
    }

    public setName(name: string): UserProfileBuilder {
        this.userProfile.name = name;
        return this;
    }

    public setEmail(email: string): UserProfileBuilder {
        this.userProfile.email = email;
        return this;
    }

    public setAge(age: number): UserProfileBuilder {
        this.userProfile.age = age;
        return this;
    }

    public setPhone(phone: string): UserProfileBuilder {
        this.userProfile.phone = phone;
        return this;
    }

    public setAddress(address: string): UserProfileBuilder {
        this.userProfile.address = address;
        return this;
    }
    

    public build(): UserProfile {
        return this.userProfile;
    }
}

// Client code
const builder = new StandardUserProfileBuilder();
const userProfile = builder.setName("John Doe")
                           .setEmail("john.doe@example.com")
                           .setAge(30)
                           .setPhone("1234567890")
                           .setAddress("1234 Elm Street")
                           .build();

console.log(userProfile.toString());
