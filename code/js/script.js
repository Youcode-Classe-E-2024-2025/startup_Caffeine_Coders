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



  // Get by name  



 const searchContent = document.getElementById('search_input');
 function getByName(event){
     event.preventDefault();
    const Sname=searchContent.value;
    console.log('Input value:', Sname);
    const Sproduct = list.filter(
      item =>  item.name.toLowerCase().includes(Sname.toLowerCase()) || item.desc.toLowerCase().includes(Sname.toLowerCase())
    ); 
    console.log(Sproduct);
    
    displayProducts(Sproduct);
 }

// filter By product type and price 




 










