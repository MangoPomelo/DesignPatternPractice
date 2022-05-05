# Design Pattern Practice
This project is a series of implementations based on the book _[Dive Into Design Patterns](https://refactoring.guru/store)_ published by [refactoring.guru](https://refactoring.guru/) 

## How to run this project
Download VSCode and docker, then follow the document _[Developing inside a Container](https://code.visualstudio.com/docs/remote/containers)_ to setup environment. Alternatively, you can manually install necessary dependencies by reading devcontainer.json


## Content

### Creational Design Patterns

1. Factory Method Pattern
    - Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
1. Abstract Factory Pattern
    - Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
1. Builder Pattern
    - Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.
1. Prototype Pattern
    - Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.
1. Singleton Pattern
    - Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

### Structural Design Patterns

1. Adapter Pattern
    - Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.
1. Bridge Pattern
    - Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.
1. Component Pattern
    - Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.
1. Decorator Pattern
    - Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
1. Factory Pattern
    - Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.
1. Flyweight Pattern
    - Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.
1. Proxy Pattern
    - Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

### Behavioral Design Patterns

1. Chain Of Responsibility Pattern
    - Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
1. Command Pattern
    - Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.
1. Iterator Pattern
    - Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).
1. Mediator Pattern
    - Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.
1. Memento Pattern
    - Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.
1. Observer Pattern
    - Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.
1. State Pattern
    - State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.
1. Strategy Pattern
    - Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.
1. Template Method Pattern
    - Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
1. Visitor Pattern
    - Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.