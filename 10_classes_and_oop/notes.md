# JavaScript and Classes

JavaScript is primarily a prototype-based language.

## OOP (Object-Oriented Programming)

### Object

An object is a collection of properties and methods. For example, the `toLowerCase` method can be applied to convert string characters to lowercase.

### Why Use OOP

Object-Oriented Programming is utilized to avoid spaghetti code and create modular components.

### Parts of OOP

1. **Object Literal:** 
   - Represents an object using a literal notation.

2. **Constructor Function:**
   - Allows the creation of multiple instances with object literals.
   - The `new` keyword is used to create new instances without affecting old values.
   - Overwriting values in the constructor function can lead to potential problems in the code.

3. **Prototypes:**
   - Prototype-based inheritance is a key concept in JavaScript.

4. **Classes:**
   - Introduced in ECMAScript 2015 (ES6) to provide a more structured and syntactical way to create objects.

5. **Instances (`new`, `this`):**
   - The `new` keyword creates a new object and calls the constructor function.
   - Constructor functions pack arguments inside them and inject them into the object.

## 4 Pillars of OOP

1. **Abstraction:**
   - Hiding complex implementation details and showing only the necessary features.

2. **Encapsulation:**
   - Wrapping data and methods into a single unit or class.

3. **Inheritance:**
   - Objects can inherit properties and methods from another object.

4. **Polymorphism:**
   - The ability to call the same method on different objects and have each of them respond in their own way.

