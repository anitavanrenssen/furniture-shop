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
          "../resources/chair-1-sm.jpg",
          "Mabibi Chair - Dark",
          "A soft comfortable chair with a rich blue color and oak legs",
          1495,
          "./src/resources/chair-1-sm.jpg",
          false
        ),
        new Product(
          "002",
          "Tables",
          "../resources/table-1-sm.jpg",
          "Hairpin Dining Table",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          4695,
          "./src/resources/table-1-sm.jpg",
          false
        ),
        new Product(
          "003",
          "Couches",
          "../resources/brown-couch.jpg",
          "Mdumbi Leather Couch",
          "A 3 seater couch made from 100% cow leather and stainless steel legs",
          21995,
          "./src/resources/brown-couch.jpg",
          false
        ),
        new Product(
          "004",
          "Chairs",
          "../resources/chair-table-sm.jpg",
          "Mabibi Chair - Light",
          "A soft comfortable chair with a brown color and oak legs",
          1495,
          "./src/resources/chair-table-sm.jpg",
          false
        ),
        new Product(
          "005",
          "Chairs",
          "../resources/chair-2-sm.jpg",
          "Ocean Dining Chair",
          "A soft comfortable chair with a brown color and oak legs",
          1395,
          "./src/resources/chair-2-sm.jpg",
          true
        ),
        new Product(
          "006",
          "Chairs",
          "../resources/chair-5-sm.jpg",
          "Adam Dining Chair",
          "A soft comfortable chair with a brown color and oak legs",
          1395,
          "./src/resources/chair-5-sm.jpg",
          false
        ),
        new Product(
          "007",
          "Chairs",
          "../resources/chair-6-sm.jpg",
          "Rattan Occasional Chair",
          "A soft comfortable chair with a brown color and oak legs",
          2995,
          "./src/resources/chair-6-sm.jpg",
          false
        ),
        new Product(
          "008",
          "Chairs",
          "../resources/chair-3-sm.jpg",
          "Rib Dining Chair",
          "A soft comfortable chair with a brown color and oak legs",
          1395,
          "./src/resources/chair-3-sm.jpg",
          true
        ),
        new Product(
          "009",
          "Chairs",
          "../resources/chair-desk-sm.jpg",
          "Emma Desk Chair",
          "A soft comfortable chair with a brown color and oak legs",
          1895,
          "./src/resources/chair-desk-sm.jpg",
          false
        ),
        new Product(
          "010",
          "Chairs",
          "../resources/chair-4-sm.jpg",
          "Lubanzi Chair",
          "A soft comfortable chair with a brown color and oak legs",
          1495,
          "./src/resources/chair-4-sm.jpg",
          false
        ),
        new Product(
          "011",
          "Couches",
          "../resources/couch-2-sm.jpg",
          "Harker Couch",
          "A soft comfortable chair with a brown color and oak legs",
          18795,
          "./src/resources/couch-2-sm.jpg",
          false
        ),
        new Product(
          "012",
          "Couches",
          "../resources/couch-3-sm.jpg",
          "Forester Couch",
          "A soft comfortable chair with a brown color and oak legs",
          14495,
          "./src/resources/couch-3-sm.jpg",
          false
        ),
        new Product(
          "013",
          "Couches",
          "../resources/couch-4-sm.jpg",
          "Coffee Leather Couch",
          "A soft comfortable chair with a brown color and oak legs",
          14495,
          "./src/resources/couch-4-sm.jpg",
          false
        ),
        new Product(
          "014",
          "Tables",
          "../resources/table-3-sm.jpg",
          "Okavango Dining Table",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          3395,
          "./src/resources/table-3-sm.jpg",
          false
        ),
        new Product(
          "015",
          "Tables",
          "../resources/table-2-sm.jpg",
          "3-Piece Puzzle Side Tables",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          1895,
          "./src/resources/table-2-sm.jpg",
          true
        ),
        new Product(
          "016",
          "Tables",
          "../resources/table-5-sm.jpg",
          "Ngepi Side Table",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          1225,
          "./src/resources/table-5-sm.jpg",
          false
        ),
        new Product(
          "017",
          "Tables",
          "../resources/table-6-sm.jpg",
          "Hairpin Coffee Table",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          2225,
          "./src/resources/table-6-sm.jpg",
          false
        ),
        new Product(
          "018",
          "Tables",
          "../resources/table-4-sm.jpg",
          "Violet Bedside Table",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          895,
          "./src/resources/table-4-sm.jpg",
          false
        ),
        new Product(
          "019",
          "Tables",
          "../resources/table-7-sm.jpg",
          "Daisy Bedside Table",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          995,
          "./src/resources/table-7-sm.jpg",
          false
        ),
        new Product(
          "020",
          "Cabinets",
          "../resources/cabinet-1-sm.jpg",
          "Kubu Cabinet Dresser",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          3295,
          "./src/resources/cabinet-1-sm.jpg",
          true
        ),
        new Product(
          "021",
          "Cabinets",
          "../resources/cabinet-3-sm.jpg",
          "Rose Rattan Cabinet",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          1995,
          "./src/resources/cabinet-3-sm.jpg",
          false
        ),
        new Product(
          "022",
          "Cabinets",
          "../resources/cabinet-4-sm.jpg",
          "Mbotyi Drawer",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          2995,
          "./src/resources/cabinet-4-sm.jpg",
          false
        ),
        new Product(
          "023",
          "Cabinets",
          "../resources/cabinet-5-sm.jpg",
          "Magwa Cabinet Server",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          2795,
          "./src/resources/cabinet-5-sm.jpg",
          false
        ),
        new Product(
          "024",
          "Shelves",
          "../resources/shelve-1-sm.jpg",
          "Zithulele Shelve - Large",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          2885,
          "./src/resources/shelve-1-sm.jpg",
          false
        ),
        new Product(
          "025",
          "Shelves",
          "../resources/shelve-2-sm.jpg",
          "Zithulele Shelve - Small",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          1995,
          "./src/resources/shelve-2-sm.jpg",
          false
        ),
        new Product(
          "026",
          "Vases",
          "../resources/decor-1-sm.jpg",
          "Letaba Wooden Vase Set",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          895,
          "./src/resources/decor-1-sm.jpg",
          false
        ),
        new Product(
          "027",
          "Vases",
          "../resources/decor-2-sm.jpg",
          "Satara Wooden Vase Set",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          895,
          "./src/resources/decor-2-sm.jpg",
          false
        ),
        new Product(
          "028",
          "Vases",
          "../resources/decor-3-sm.jpg",
          "Sirheni Wooden Vase Set",
          "A 6 seater table made from solid oak wood and stainless steel legs ",
          595,
          "./src/resources/decor-3-sm.jpg",
          false
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
    cabinetsList() {
      return this.productList.filter((product) => {
        return product.category === "Cabinets";
      });
    },
    shelvesList() {
      return this.productList.filter((product) => {
        return product.category === "Shelves";
      });
    },
    vasesList() {
      return this.productList.filter((product) => {
        return product.category === "Vases";
      });
    },
    newArrivalsList() {
      return this.productList.filter((product) => {
        return product.newArrival;
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
