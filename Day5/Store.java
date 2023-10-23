public class Store {
    // constructor parameters
    String productType;

    // new method: constructor!
    public Store(String product) {
        productType = product;
        System.out.println("I am inside the constructor method.");
    }

    // main method is where we create instances!
    public static void main(String[] args) {
        System.out.println("Start of the main method.");

        // create the instance below
        Store lemonadeStand = new Store("Apple");
        // print the instance below
        System.out.println(lemonadeStand);
    }
}