public class Main {
    public static void main(String[] args) {
        Item mar = new Item("mar", 4, 10);
        Item par = new Item("para", 2, 10);
        Customer marius = new Customer("marius");
        Cart mariusCart = new Cart(marius);
        mariusCart.addItemToCart(mar, 2l);
        mariusCart.addItemToCart(par, 1l);
        mariusCart.printItemFromCart();
        mariusCart.calcTotalCart();
        mariusCart.removeItemFromCart(mar,2l);
        mariusCart.printItemFromCart();
        mariusCart.calcTotalCart();
        System.out.println(par.getName()+" "+par.getStock());
        System.out.println(mar.getName()+" "+mar.getStock());
    }
}
