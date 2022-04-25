# How to Implement
1. Identify the orthogonal dimensions in your classes. These independent concepts could be: abstraction/platform, domain/infrastructure, front-end/back-end, or interface/implementation.

1. See what operations the client needs and define them in the base abstraction class.

1. Determine the operations available on all platforms. Declare the ones that the abstraction needs in the general implementation interface.

1. For all platforms in your domain create concrete implementation classes, but make sure they all follow the implementation interface.

1. Inside the abstraction class, add a reference field for the implementation type. The abstraction delegates most of the work to the implementation object that’s referenced in that field.

1. If you have several variants of high-level logic, create refined abstractions for each variant by extending the base abstraction class.

1. The client code should pass an implementation object to the abstraction’s constructor to associate one with the other. After that, the client can forget about the implementation and work only with the abstraction object.