# How to Implement
1. Create the prototype interface and declare the _clone_ method in it. Or just add the method to all classes of an existing class hierarchy, if you have one.

1. A prototype class must define the alternative constructor that accepts an object of that class as an argument. The constructor must copy the values of all fields defined in the class from the passed object into the newly created instance. If you’re changing a subclass, you must call the parent constructor to let the superclass handle the cloning of its private fields.
    - If your programming language doesn’t support method overloading, you may define a special method for copying the object data. The constructor is a more convenient place to do this because it delivers the resulting object right after you call the _new_ operator.

1. The cloning method usually consists of just one line: running a _new_ operator with the prototypical version of the constructor. Note, that every class must explicitly override the cloning method and use its own class name along with the _new_ operator. Otherwise, the cloning method may produce an object of a parent class.

1. Optionally, create a centralized prototype registry to store a catalog of frequently used prototypes.
    - You can implement the registry as a new factory class or put it in the base prototype class with a static method for fetching the prototype. This method should search for a prototype based on search criteria that the client code passes to the method. The criteria might either be a simple string tag or a complex set of search parameters. After the appropriate prototype is found, the registry should clone it and return the copy to the client.
    - Finally, replace the direct calls to the subclasses’ constructors with calls to the factory method of the prototype registry.