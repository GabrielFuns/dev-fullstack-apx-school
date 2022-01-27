import test from "ava";
import { User, Product } from "./index";
var user: User;
test("Testeo la clase User", (t) => {
  user = new User("Gabriel");
  t.is(user.name, "Gabriel");

  t.pass();
});

test("Testeo la clase Product y sus métodos", (t) => {
  const product = new Product("Producto1", 150);
  t.is(product.name, "Producto1");
  t.is(product.price, 150);

  user.addProduct(product);

  t.is(user.products.length, 1);
  t.is(user.products[0], product);
  t.pass();
});
