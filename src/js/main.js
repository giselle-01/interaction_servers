import { alertError } from "./alert";

const endopointProducts = "http://localhost:3000/products";
const $nameProduct = document.getElementById("name_product");
const $priceProduct = document.getElementById("price_product");
const $description = document.getElementById("description");
const $form = document.getElementById("form");

$form.addEventListener("submit", function (event) {
  event.preventDefault();
  createProduct();
});

//create a new product
async function createProduct() {
  const newProduct = {
    nameProduct: $nameProduct.value,
    priceProduct: $priceProduct.value,
    description: $description.value,
  };

  try {
    let response = await fetch(endopointProducts, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    console.log(response);

    if (!response.ok) {
      alert("Lo sentimos, reintente más tarde");
      throw new Error(response.statusText);
    } else {
      alert("Producto agregado con éxito");
    }
  } catch (error) {
    console.log(error.message);
  }
}

//delete a product
async function deleteProduct() {
    let response = await fetch(endopointProducts, {
        method: "DELETE"
        headers: {
            "content-type": "aplication/json",
        },
        
    })
}
