var retunrList;
function fetchProducts() {
    fetch('../js/data.json') 
      .then(response => {
        
        if (!response.ok) {
          throw new Error('Network response was not ok' + response.statusText);
        }
        return response.json();
      })
      .then(products => {
        
        retunrList=products;
        displayProducts(products);

      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  function displayProducts(products) {
    const productList = document.querySelector('.productsDisplay');
  
   
    productList.innerHTML = '';
  
 
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'ProductCard';
  
     
      productDiv.innerHTML = `
        <div class="ProductCardContent">
        <a href="productDetails.html" onclick="storeProductId(${product.id})">
    <img src="${product.img}" alt="Image of ${product.name}" class="product-image">
        </a>
          
          <div class="cardDescription">
            <p class="productName productFont">
              ${product.name}
            </p>
            <p class="productPrice productFont">
              ${product.price.toFixed(2)} DH <!-- Ensure price shows two decimal places -->
            </p>
          </div>
          <button class="whiteColor" type="button">Add to cart</button>
        </div>
      `;
  
      
      productList.appendChild(productDiv);
    });
  }
  function storeProductId(id) {
    localStorage.setItem('selectedProductId', id); 
}
  fetchProducts();
  
//  const searchContent = document.getElementById('search_input');
//  function getByName(){
//     const name=searchContent.value;
//     console.log('Input value:', inputValue);
//  }


let list = []; 
const img = document.querySelector('.productImg');
const nname = document.querySelector('.productName');
const stock = document.querySelector('.stock-status');
const desc = document.querySelector('.desc');
const price = document.querySelector('.price');


window.onload = function() {
    fetchProducts(); 
};

function fetchProducts() {
    fetch('../js/data.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json(); 
        })
        .then(products => {
            list = products;
            displayProductDetails();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayProductDetails() {
    const selectedProductId = localStorage.getItem('selectedProductId'); 
    const product = list.find(item => item.id == selectedProductId); 

    if (product) {
        img.setAttribute('src', product.img);
        nname.textContent = product.name;
        stock.textContent = '40 in stock'; 
        price.textContent = `${product.price} DH`;
        desc.textContent =  product.name; 
    } else {
        console.error(`Product with ID ${selectedProductId} not found.`);
    }
}
