# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: OOP or object-oriented programming is a programming language model that is organized around the use of objects and classes. Objects are the basic building blocks of ruby code. Everything in ruby is object centered i.e everything in ruby is an object ! OOP relies on the concepts of classes and objects. Classes are used to as a blueprint/outline for objects. Objects and classes are used in Ruby to structure a program into simple reusable pieces of code (classes) which are used to create unique and individual instances of code(objects). The major difference between OOP and Functional programming I believe is that functional programming is all about real world data manipulation whereas OOP deals with Objects which are more abstract in implementation. 

Researched answer: OOP is a programming method used in computer science that relies on the concept of classes and objects. 
a class is a abstract blueprint that creates more specific and concrete objects. Classes can represent broad categories like pets or animals that share attributes. Classes can also contain functions called methods that are available only to object associated with specific classes. Classes act as templates to create individual objects. These object represent specific examples of the abstract class, like dog for the class pets. Each object can have unique values to the properties that are defined in the class. OOP as a model takes complex things and makes them into reproducible ,reusable and simple structures. Because OOP objects are reusable they can be used across various programs.  Regarding the difference between OOP and Functional programming, Both Functional programming and object-oriented programming uses a different method for storing and manipulating the data. In functional programming, data cannot be stored in objects and it can only be transformed by creating functions. In object-oriented programming, data is stored in objects.  When you’re working across different boundaries, OOP is an excellent method to keep everything packaged up and secure from unwanted external usage. Where as, Functional programming works well when complexity is contained.
Resources : https://medium.com/@shaistha24/functional-programming-vs-object-oriented-programming-oop-which-is-better-82172e53a526 https://www.educative.io/blog/object-oriented-programming
https://medium.com/launch-school/the-basics-of-oop-ruby-26eaa97d2e98

1. What is the difference between a Float and an Integer in Ruby?

Your answer: Float and Integer are both different types of data types used within Ruby. Integers are whole numbers whereas float is a number that contains a decimal point. 

Researched answer:
Integers and floats are two different kinds of numerical data. An integer (more commonly called an int) is a number without a decimal point. A float is a floating-point number, which means it is a number that has a decimal place. Floats are used when more precision is needed.
Ruby will consider any number written without decimals as an integer (as in 189 ) and any number written with decimals as a float (as in 189.0 ).The main difference between float and decimal is that the latter gives a more accurate value, even though it is likely to take up more space in your programming. This is why decimals are ideal for complex financial applications. sources : https://processing.org/examples/integersfloats.html#:~:text=Integers%20and%20floats%20are%20two,that%20has%20a%20decimal%20place. https://rails.devcamp.com/trails/ruby-programming/campsites/working-with-numbers-in-ruby/guides/difference-between-integers-and-floats-in-a-ruby-program


1. Ruby has an implicit return. What does that mean?

Your answer: Implicit means implied though not plainly expressed. Ruby has an implicit return, this means that in every code block in ruby will return the value of the last line automatically, so it is uncommon to use the return keyword (unlike javascript functions) in favor of a more clean, concise and minimal code like a one-liner. 

Researched answer: An implicit return is a return that does not explicitly use the keyword "return". In Ruby, the last thing evaluated is returned, even if you don't use the keyword. Explicit returns can return early and break out of loops. sources: 
https://www.learnhowtoprogram.com/ruby-and-rails/basic-ruby/defining-methods-in-ruby, https://franzejr.github.io/best-ruby/idiomatic_ruby/implicit_return.html , https://dev.to/ting682/implicit-vs-explicit-returns-14j5



1. What is a block in Ruby?

Your answer: a block is an function that can be passed into methods. Blocks in ruby are enclosed in a do-end statement. Blocks can have arguments which are defined between two | PIPES| characters.

Researched answer: a block is a piece of code invoked by another piece of code. a block is a way of passing behavior rather just data to a method. A block  in ruby consist of chunks of code. A block is basically the same thing as a method but it does not belong to an object. a block is always invoked with function or can be passed to a method.  A block looks similar to a method in Ruby. Methods consist of a name, but with blocks you don’t need to write a name, and always pass to a method call. Blocks are a handy and powerful feature in Ruby, and you can use them anywhere. Ultimately, Blocks are anonymous pieces of code that accept input from arguments and return a value.
sources: https://www.codewithjason.com/understanding-ruby-blocks/
https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/#:~:text=Ruby%20blocks%20are%20little%20anonymous,they%20can%20have%20multiple%20arguments.https://www.tutorialspoint.com/ruby/ruby_blocks.htm
https://www.geeksforgeeks.org/ruby-blocks/


1. How do you extract a value in a Ruby hash?

Your answer: I have to be honest, once again I'm not too familiar with hashes within Ruby, I know we went over them in lecture but I'm blanking on the definition and implementation of hashes in Ruby. I will do further study and research and get back to you with an apporiapitate answer. 

Researched answer: A hash in ruby is a data structure used to store data in the form of unique key value pairs.Hash is like an Array, except the indexing is done with the help of arbitrary keys of any object type. You can access the value of a hash by key. The point of hashes is the ability to quickly look up an a item by it's unique key. If that key does not exist it will return with a value of nil.  In Ruby, the values in a hash can be accessed using bracket notation. After the hash name, type the key in square brackets in order to access the value.

sources : https://www.rubyguides.com/2020/05/ruby-hash-methods/#:~:text=What%20is%20a%20Ruby%20hash,the%20hash%20values%20with%20keys. https://www.codecademy.com/learn/learn-ruby/modules/learn-ruby-arrays-and-hashes-u/cheatsheet https://ruby-doc.org/core-2.5.1/Hash.html
## Looking Ahead: Terms for Next Week

1. Class Inheritance: Ruby is the ideal object-oriented language. In an object-oriented programming language, inheritance is one of the most important features. Inheritance allows the programmer to inherit the characteristics of one class into another class.  
Inheritance is when a class inherits behavior from another class. The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass.We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass. This lets us keep logic in one place. inheritance provides the concept of “reusability”, i.e. If a programmer wants to create a new class and there is a class that already includes some of the code that the programmer wants, then he or she can derive a new class from the existing class. By doing this, it increases the reuse of the fields and methods of the existing class without creating extra code
sources :https://www.geeksforgeeks.org/ruby-inheritance/
https://launchschool.com/books/oo_ruby/read/inheritance


2. RSpec: RSpec is a computer domain-specific language testing tool written in the programming language Ruby to test Ruby code. It is a behavior-driven development framework which is extensively used in production applications.sources:
1. https://semaphoreci.com/community/tutorials/getting-started-with-rspec

3. CRUD: Create, Read, Update, and Delete (CRUD) are the four basic functions that models should be able to do, at most.When we are building APIs, we want our models to provide four basic types of functionality. The model must be able to Create, Read, Update, and Delete resources.A model should have the ability to perform at most these four functions in order to be complete. The "C" in "CRUD" stands for create, which is when we Create a new model object and store it in the databases. The "R" in CRUD stands for Read, which is when we Read data from the database and show it to the user.The "U" the "CRUD" stands for the update, which is when we...
Collect the data (usually submitted by the user) and save the changes in the database.The "D" in "CRUD" stand for delete, which is when we Delete data from the database, and possibly other related data.
The CRUD paradigm is common in constructing web applications, because it provides a memorable framework for reminding developers of how to construct full, usable models. sources https://www.codecademy.com/article/what-is-crud

4. Test-driven development: Test Driven Development (TDD) is a software development practice that focuses on creating unit test cases before developing the actual code. It is an iterative approach that combines programming, the creation of unit tests, and refactoring.
 As the name suggests, the test process drives software development. Moreover, it’s a structuring practice that enables developers and testers to obtain optimized code that proves to be resilient in the long term. In TDD, developers start creating small test cases for every feature based on their initial understanding. The primary intention of this technique is to modify or write new code only if the tests fail. This prevents duplication of test scripts. TDD utilizes repetition of short development cycles. It combines building and testing. This process not only helps ensure correctness of the code -- but also helps to indirectly evolve the design and architecture of the project at hand.
sources: https://www.browserstack.com/guide/what-is-test-driven-development, https://testdriven.io/test-driven-development/#:~:text=Test%2DDriven%20Development%20(TDD),It%20combines%20building%20and%20testing.

5. HTTP: What is HTTP?
The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web, and is used to load webpages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message.

sources : https://developer.mozilla.org/en-US/docs/Web/HTTP
https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/