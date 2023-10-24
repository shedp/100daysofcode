public class Store {
    // constructor parameters
    String productType;
    int inventoryCount;
    double inventoryPrice;

    // new method: constructor!
    public Store(String product, int count, double price) {
        productType = product;
        inventoryCount = count;
        inventoryPrice = price;
        System.out.println("I am inside the constructor method.");
    }

    // define method
    public void showProduct() {
        System.out.println("Prtoduct: "+productType);
        System.out.println("Price: "+inventoryPrice);
    }

    // define method
    public void greetCustomer(String customer) {
        System.out.println("Hello, "+customer);
    }

    // define method
    public void increasePrice(double priceIncrease) {
        price += priceIncrease;
    }

    // define method
    public double getPriceWithTax() {
    double totalPrice = price + price*0.08;
    return totalPrice;
  }

//   define method
public String toString(){
       return "This store sells "+productType+" at a price of "+price+".";
   }


    // main method is where we create instances!
    public static void main(String[] args) {
        System.out.println("Start of the main method.");

        // create the instance below
        Store lemonadeStand = new Store("lemonade", 12, 3.75);
        // print the instance below
        System.out.println(lemonadeStand);
        // call method
        lemonadeStand.greetCustomer("Rich");
        lemonadeStand.showProduct();
        lemonadeStand.increasePrice(1.5);
    }
}
