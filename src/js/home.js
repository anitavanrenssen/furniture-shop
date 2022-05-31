import { Product } from "../classes/Product.js";

const SHOPPING_CART_KEY = "shopping-cart-storage-key";
const WISHLIST_KEY = "wishlist-storage-key";

const { createApp } = Vue;

createApp({
  data() {
    return {
      productList: [
        new Product(
          "001",
          "Chairs",
          "../resources/chair-blue.jpg",
          "Bluey Chair",
          "A soft comfortable chair with a rich blue color and oak legs",
          "R 1,495.00",
          true
        ),
        new Product(
          "002",
          "Tables",
          "../resources/table.jpg",
          "Baobab Table",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          "R 4,695.00",
          true
        ),
        new Product(
          "003",
          "Couches",
          "../resources/brown-couch.jpg",
          "Leather Couch",
          "A 3 seater couch made from 100% cow leather and stainless steel legs",
          "R 12,595.00",
          true
        ),
        new Product(
          "004",
          "Chairs",
          "../resources/chair-brown.jpg",
          "Browny Chair",
          "A soft comfortable chair with a brown color and oak legs",
          "R 2,295.00",
          true
        ),
      ],
    };
  },
  methods: {
    addToCart(id) {
      // if SHOPPING_CART_KEY is empty
      if (!localStorage.getItem(SHOPPING_CART_KEY)) {
        let shoppingCartArray = [];

        let shoppingCartProduct = this.productList.find(function (product) {
          return product.id == id;
        });

        shoppingCartArray.push(shoppingCartProduct);

        localStorage.setItem(
          SHOPPING_CART_KEY,
          JSON.stringify(shoppingCartArray)
        );
      } else {
        // if SHOPPING_CART_KEY exits, get array and add product to array
        let shoppingCartArray = JSON.parse(
          localStorage.getItem(SHOPPING_CART_KEY)
        );

        let shoppingCartProduct = this.productList.find(function (product) {
          return product.id == id;
        });

        shoppingCartArray.push(shoppingCartProduct);

        localStorage.setItem(
          SHOPPING_CART_KEY,
          JSON.stringify(shoppingCartArray)
        );
      }
    },
  },
  computed: {
    chairsList() {
      return this.productList.filter((product) => {
        return product.category === "Chairs";
      });
    },
    couchesList() {
      return this.productList.filter((product) => {
        return product.category === "Couches";
      });
    },
    tablesList() {
      return this.productList.filter((product) => {
        return product.category === "Tables";
      });
    },
    shoppingCartList() {
      this.shoppingCartArray = JSON.parse(
        localStorage.getItem(SHOPPING_CART_KEY)
      );
      return this.shoppingCartArray;
    },
  },

  mounted() {
    if (!localStorage.getItem(SHOPPING_CART_KEY)) {
      let initArray = [];
      localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(initArray));
    }

    this.shoppingCartArray = JSON.parse(
      localStorage.getItem(SHOPPING_CART_KEY)
    );
  },
}).mount("#app");
