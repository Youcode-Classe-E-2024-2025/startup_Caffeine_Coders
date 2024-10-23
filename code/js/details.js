// function fetchProducts() {
//     fetch('../js/data.json') // Adjust the path if necessary
//       .then(response => {
//         // Check if the response is ok (status in the range 200-299)
//         if (!response.ok) {
//           throw new Error('Network response was not ok' + response.statusText);
//         }
//         return response.json(); // Parse the JSON data
//       })
//       .then(products => {
//         // Call displayProducts and pass the fetched products
//         displayProducts(products);
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   }
 
  const img = document.querySelector('.productImg');
  const nname = document.querySelector('.productName');
  const stock = document.querySelector('.stock-status');
  
  const desc = document.querySelector('.desc');
  const price = document.querySelector('.price');
 

  function detailsIserting() {
    img.setAttribute('src', "../../images/background-img.jpg");
    nname.textContent = 'all in one';   
    stock.textContent='40 in the stock';
    price.textContent='333DH'
    desc.textContent='test test test test testtestv test test v testtesttesttesttesttest'
  }
  window.onload = function() {
    detailsIserting();
};