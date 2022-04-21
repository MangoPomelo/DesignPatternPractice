# How to Implement
1. Map out a matrix of distinct product types versus variants of these products.

1. Declare abstract product interfaces for all product types. Then make all concrete product classes implement these interfaces.

1. Declare the abstract factory interface with a set of creation methods for all abstract products.

1. Implement a set of concrete factory classes, one for each product variant.

1. Create factory initialization code somewhere in the app. It should instantiate one of the concrete factory classes, depending on the application configuration or the current environment. Pass this factory object to all classes that construct products.

1. Scan through the code and find all direct calls to product constructors. Replace them with calls to the appropriate creation method on the factory object.