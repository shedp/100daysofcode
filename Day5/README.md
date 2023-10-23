# Intro to Java
- Codecademy course
- Part of my 100 Days of Code challenge, day 5 I have decided to try a new language

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
- Operations: + - * / %
- Compound Assignment Operators: `+= -= *= /+ %=`
- Comparisons: `== != > < >= <=`
- When comparing if Strings are equal or not:
    `variable1.equals(variable2)`
- String Concatenation: `"Hello "+"World!"`
-