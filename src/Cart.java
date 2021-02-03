
import java.util.HashMap;

import java.util.Map;

public class Cart {
   private Customer customer;

   private Map<Item, Long> items=new HashMap();

    public Cart(Customer customer) {
        this.customer = customer;
    }

    public void addItemToCart(Item item, Long amount){
        items.put(item,amount);
        item.setStock(item.getStock()-amount);
    }

    public void removeItemFromCart(Item item, Long amount){
        items.remove(item);
        item.setStock(item.getStock()+amount);
    }

    public void printItemFromCart(){
        for (Item item: items.keySet()) {
            Long value = items.get(item);
            System.out.println(item +" sa cumparat "+ value);
        }
    }

    public void calcTotalCart(){
       Double price=0d;
        for (Item item: items.keySet()) {
            Long value = items.get(item);
           price+=item.getPrice()*value;
        }
        System.out.println("total cart price "+price);
    }


}
