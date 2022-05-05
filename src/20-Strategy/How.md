# How to Implement
1. In the context class, identify an algorithm that’s prone to frequent changes. It may also be a massive conditional that selects and executes a variant of the same algorithm at runtime.

1. Declare the strategy interface common to all variants of the algorithm.

1. One by one, extract all algorithms into their own classes. They should all implement the strategy interface.

1. In the context class, add a field for storing a reference to a strategy object. Provide a setter for replacing values of that field. The context should work with the strategy object only via the strategy interface. The context may define an interface which lets the strategy access its data.

1. Clients of the context must associate it with a suitable strategy that matches the way they expect the context to perform its primary job.