export const getOrders = () => {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) =>
      res.products.map((product, index) => ({ ...product, id: index }))
    );
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) => res.products);
};
// getOrders().then((orders) => console.log(orders));

export const getCart = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users")
    .then((res) => res.json());
};
