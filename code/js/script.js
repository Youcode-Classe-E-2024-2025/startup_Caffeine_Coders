
function fetchProducts() {
    fetch('../js/data.json') // Adjust the path if necessary
      .then(response => {
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok' + response.statusText);
        }
        return response.json(); // Parse the JSON data
      })
      .then(products => {
        // Call displayProducts and pass the fetched products
        displayProducts(products);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  function displayProducts(products) {
    const productList = document.querySelector('.productsDisplay');
  
    // Clear the existing product list (if any)
    productList.innerHTML = '';
  
    // Loop through the products array and create HTML elements for each product
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'ProductCard';
  
      // Add product name, image, and price with proper formatting
      productDiv.innerHTML = `
        <div class="ProductCardContent">
          <img src="${product.img}" alt="Image of ${product.name}">
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
  
      // Append the product div to the product list container
      productList.appendChild(productDiv);
    });
  }
  
  fetchProducts();
  