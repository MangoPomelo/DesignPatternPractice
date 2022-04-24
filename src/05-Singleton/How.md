# How to Implement
1. Add a private static field to the class for storing the singleton instance.

1. Declare a public static creation method for getting the singleton instance.

1. Implement “lazy initialization” inside the static method. It should create a new object on its first call and put it into the static field. The method should always return that instance on all subsequent calls.

1. Make the constructor of the class private. The static method of the class will still be able to call the constructor, but not the other objects.

1. Go over the client code and replace all direct calls to the singleton’s constructor with calls to its static creation method.