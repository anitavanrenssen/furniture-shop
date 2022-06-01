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
          1495,
          "/src/resources/chair-blue.jpg"
        ),
        new Product(
          "002",
          "Tables",
          "../resources/table.jpg",
          "Baobab Table",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          4695,
          "/src/resources/table.jpg"
        ),
        new Product(
          "003",
          "Couches",
          "../resources/brown-couch.jpg",
          "Leather Couch",
          "A 3 seater couch made from 100% cow leather and stainless steel legs",
          12595,
          "/src/resources/brown-couch.jpg"
        ),
        new Product(
          "004",
          "Chairs",
          "../resources/chair-brown.jpg",
          "Browny Chair",
          "A soft comfortable chair with a brown color and oak legs",
          2295,
          "/src/resources/chair-brown.jpg"
        ),
      ],
      shoppingCartArray: [],
      wishlistArray: [],
      message: "hello",
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

        this.shoppingCartArray.push(shoppingCartProduct);

        localStorage.setItem(
          SHOPPING_CART_KEY,
          JSON.stringify(this.shoppingCartArray)
        );
      }
    },
    removeFromCart(id) {
      this.shoppingCartArray = JSON.parse(
        localStorage.getItem(SHOPPING_CART_KEY)
      );
      this.shoppingCartArray = this.shoppingCartArray.filter(function (
        product
      ) {
        return product.id != id;
      });

      localStorage.setItem(
        SHOPPING_CART_KEY,
        JSON.stringify(this.shoppingCartArray)
      );
    },
    addToWishList(id) {
      // if WISHLIST_KEY is empty, create new array
      if (!localStorage.getItem(WISHLIST_KEY)) {
        let wishlistArray = [];

        // find selected product in product list
        let wishlistProduct = this.productList.find(function (product) {
          return product.id == id;
        });

        // add selected product to array
        wishlistArray.push(wishlistProduct);

        // add array to local storage
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistArray));
      } else {
        // if WISHLIST_KEY exits, get existing array
        let wishlistArray = JSON.parse(localStorage.getItem(WISHLIST_KEY));

        // find selected product in product list
        let wishlistProduct = this.productList.find(function (product) {
          return product.id == id;
        });

        // check if product already exits in array to prevent duplicate
        let productExists = wishlistArray.some(
          (obj) => obj.id === wishlistProduct.id
        );

        // if product does not exist, add selected product to array
        if (!productExists) {
          wishlistArray.push(wishlistProduct);

          // add array to local storage
          localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistArray));
        }
      }
    },
    removeFromWishList(id) {
      // get existing array
      this.wishlistArray = JSON.parse(localStorage.getItem(WISHLIST_KEY));

      // remove selected product from array
      this.wishlistArray = this.wishlistArray.filter(function (product) {
        return product.id != id;
      });

      // add updated array to local storage
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(this.wishlistArray));
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
      if (!localStorage.getItem(SHOPPING_CART_KEY)) {
        let initArray = [];
        localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(initArray));
      }

      this.shoppingCartArray = JSON.parse(
        localStorage.getItem(SHOPPING_CART_KEY)
      );

      return this.shoppingCartArray;
    },
    shoppingCartTotal() {
      let shoppingCartTotal = 0;
      for (let i = 0; i < this.shoppingCartArray.length; i++) {
        shoppingCartTotal += this.shoppingCartArray[i].cost;
      }
      return shoppingCartTotal;
    },
    wishList() {
      if (!localStorage.getItem(WISHLIST_KEY)) {
        let initArray = [];
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(initArray));
      }

      this.wishlistArray = JSON.parse(localStorage.getItem(WISHLIST_KEY));

      return this.wishlistArray;
    },
  },

  mounted() {
    if (!localStorage.getItem(WISHLIST_KEY)) {
      let initArray = [];
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(initArray));
    }

    this.wishlistArray = JSON.parse(localStorage.getItem(WISHLIST_KEY));
  },
}).mount("#app");
