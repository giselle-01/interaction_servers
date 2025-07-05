import { alertError } from "./alert";

//variables 
const endopointProducts = "http://localhost:3000/products";
const $nameProduct = document.getElementById("name_product");
const $priceProduct = document.getElementById("price_product");
const $description = document.getElementById("description");
const $form = document.getElementById("form");

$form.addEventListener("submit", function (event) {
  event.preventDefault();
  createProduct();
});

//function to create new products
async function createProduct() {
    const newProduct = {
    nameProduct: $nameProduct.value,
    priceProduct: $priceProduct.value,
    description: $description.value,
    };
};
  try {
    const response = await fetch(endopointProducts, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    console.log(response);

    if (!response.ok) {
      alert("Lo sentimos, reintente más tarde");
      throw new Error(response.statusText);
    } else {
      alert("Producto agregado con éxito");
    };

  } catch (error) {
    console.log(error.message);
  };


//function to get all the products
async function getProducts() {
    try {
        const response = await fetch(endopointProducts);
        if (!response.ok) {
            throw new Error(response.statusText);
        };

        const products = await response.json();
        console.log(products);
        
    } catch (error) {
    console.error(error.message);
  };
};

//function to delete produts
async function deleteProducts() {

    getProducts(products)

    try {
        let response = await fetch(endopointProducts, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        }
    });
    console.log(response)

    if (!response.ok) {
        alert("Lo sentimos, reintente más tarde");
        throw new Error()
    }
    } catch (error) {
        console.log(error.message);
    };
};

//function to update products
async function updateProducts() {
    try {
        let response = await fetch(endopointProducts, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        }
    });
    console.log(response)


    if (!response.ok) {
        alert("Lo sentimos, reintente más tarde");
        throw new Error()
    }
    } catch (error) {
        console.log(error.message);
    };



};

