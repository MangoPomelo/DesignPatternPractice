# How to Implement
1. Make all products follow the same interface. This interface should declare methods that make sense in every product.

1. Add an empty factory method inside the creator class. The return type of the method should match the common product interface.

1. In the creator's code find all references to product constructors. One by one, replace them with calls to the factory method, while extracting the product creation code into the factory method.
    - You might need to add a temporary parameter to the factory method to control the type of returned product
    - At this point, the code of the factory method may Look pretty ugly. It may have a large _switch_ operator that picks which product class to instantiate. But don't worry, well fix it soon enough.

1. Now, create a set of creator subclasses for each type of product Listed in the factory method. Override the factory method in the subclasses and extract the appropriate bits of construction code from the base method.

1. If there are too many product types and it doesn't make sense to create subclasses for all of them, you can reuse the control parameter from the base class in subclasses.
    - For instance, imagine that you have the following hierarchy of classes: the base _Mail_ class with a couple of subclasses: _AirMail_ and _GroundMail_; the _Transport_ classes are _Plane_, _Truck_ and _Train_. While the _AirMail_ class only uses _Plane_ objects, _GroundMail_ may work with both _Truck_ and _Train_ objects. You can create a new subclass (say _Trainmail_) to handle both cases, but there's another option. The client code can pass an argument to the factory method of the _Groundmail_ class to control which product it wants to receive. 

1. If, after all of the extractions, the base factory method has become empty, you can make it abstract. If there's something left, you can make it a default behavior of the method. 