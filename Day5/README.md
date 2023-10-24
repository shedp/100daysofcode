# Intro to Java
- Codecademy course
- Part of my 100 Days of Code challenge, day 5-6 I have decided to try a new language

- Java programs have at least 1 class and 1 main() method
-Each class represents a real-word idea
- main() method runs the tasks

- IntelliJ IDEA is a popular IDE for Java

## Run a Java file
- Java is a complied programming language that is written in .java and compiled before executed by the Java Virtual Machine
- The Java compiler check the code wile it transforms it
- Compile the code
    `javac file.java`
- Execute once successful
    `java file`
- a successful compilation creates a .class file, a none non-successful will produce a lif of errors

## Data and Personal Privacy
### Data and Personal Privacy
- Programmers have a responsibility to create programs that protect stored data and to be aware of any privacy risks our own software contains.

### System Reliability
- System reliability is the probability that a technology will work the way it is intended
- you should strive to make an effort to maximize system reliability
- As a programmer, it is important to be aware of any intellectual property concerns and legal issues that could occur.
1) Trade secrets or private information about a business
2 Trademarks
3) Patents
4) Copyright

### Ethical and Social Impacts of Computing Systems
- Machine learning: problem with data bias and impact on marginalized communities
- Social media: widespread misinformation
- The decisions of AI

## Variable
- data types: String (" "), int, double, boolean, char (' ')
- Java has static typing - i.e it will not compile if a variable value is the incorrect data type
- when naming a variable keep to the convention:
1) camel case
2) first letter is lowercase
3) first character should be a letter
4) no underscores
    `dataType variableName = value;`
- For a variable that should never change, use the `final` keyword
    `final dataType variable = value`

## Manipulating Variables
- Operations: `+ - * / %`
- Compound Assignment Operators: `+= -= *= /+ %=`
- Comparisons: `== != > < >= <=`
- When comparing if Strings are equal or not:
    `variable1.equals(variable2)`
- String Concatenation: `"Hello "+"World!"`

## Casting and Converting
- Transforming a value from one primitive data type to another using type casting
- Changing the data type can change the amount the data can hold
- If there is less data after, then it's called narrow type casting, if the other way round, widening type casting
- To cast, we tell the compiler that we want a temp value that is a converted data type

### Numerical-Based Casting
- Convert double into int
    `int numInt = (int) numDouble`
- not that this does not round the number to an int but truncate it e.g 12.99 --> 12
- int have 4 bytes of storage. Integer.MAX_VALUE/Integer.MIN_VALUE tells you the max/min number
- If you create an expression with a value outside of this range, it would be an integer overflow, which could result in error or an incorrect value that’s within the allowed range.

- If casting to change int value to a double, implement the (double) casting operator in our code:
    `double numDouble = (double)numInt;`

### Converting Integer and String Values
- This doesn’t count as casting because a String is not a primitive type value
    `String numString = String.valueOf(numInt);`
- Convert string to int:
    `int numInt = Integer.parseInt(numString)`

## Classes and Objects
- Classes - in OOP, classes are specifications for data types
- define attribute and functionality of an entity
- Objects - instance of a class, an actual object with data

- Java has predefined classes such as `System`
- To create an object, you need a constructor method
- The constructor shares the same name as the class
- To create an instance, you need to call or invoke the constructor within main()
    `public class Car{
        String color;
        public Car(String carColor) {
            color = carColor;
        }
        public static void main(String[] args) {
            Car ferrari = new Car(); 
        }
    }`
- Car in this example is the data type.
- the output will show it's memory address
    `Car@76ed5528`
- initialise instance fields and pass values into the constructor method and it will ne assigned to the field
- There are 2 types of parameters: formal and actual
- Formal parameter specifies the type and name of data passed into a method
- Actual parameter
- Constructor overloading - a class can have multiple constructors as long as they have different parameter values
- Access the parameter field of an instance
    `instance.parameter`

## Methods
- define object behavior (what tasks it should perform)
- Methods are repeatable, reuseable, modular blocks of code
- Define methods with `public void methodName() {}`
- `public` - other clases can access this method
- `void` - no specific output from the method
- Call a method: `instance.methodName()`

### Scope
- We mark a domain with `{ }` - this is called the scopre of a method
- Variables initialised inside a scope cannot be used outside of it
- `return` values to save into new variable
- methods no longer `void`, instead, define the data type
- Returning an object works differently from returning promitive value
    - returns a reference to an object instead of a copy
- Returning an object will return it's memory location
- We can put the object elements into a string and return the string
