
// menu
let burger_icon= document.querySelector(".burger-icon");
let burger_menu = document.querySelector(".burger-menu");

burger_icon.addEventListener('click',function(){
  
if(burger_menu.style.display === 'none' ){
    burger_menu.style.display = 'flex';
    burger_icon.style.transform='rotate(90deg)'

    // burger_icon.classList.add("rotate-90-burger")
}else{
    burger_menu.style.display = 'none';
    burger_icon.classList.remove("rotate-90-burger")
    burger_icon.style.transform='rotate(0deg)'



}
})

var retunrList;
function fetchProducts() {
    fetch('../data/data.json') 
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
    console.log(retunrList);
    
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
    const Sproduct = retunrList.filter(
      item =>  item.name.toLowerCase().includes(Sname.toLowerCase()) || item.desc.toLowerCase().includes(Sname.toLowerCase())
    ); 
    console.log(Sproduct);
    
    displayProducts(Sproduct);
 }

// filter By product type and price 


 
function filterBy(){
const selectbytype = document.getElementsByClassName('product_type');
const selectbyPrice = document.getElementsByClassName('price'); 
// Get the value of the selected option
const selectedValue = selectbytype[0].value; 
const priceSort=selectbyPrice[0].value;
var listByProductType=retunrList;
console.log('Selected value:', priceSort);
     if(selectedValue!==''){
       console.log(retunrList);
       
        listByProductType=retunrList.filter(
       item =>  item.type_of_product.toLowerCase()==selectedValue)  
      }


     if (priceSort=='+') {
      
      listByProductType.sort((a, b) => a.price - b.price);

     } else if(priceSort=='-'){
      listByProductType.sort((a, b) => b.price - a.price);
     }
     




 displayProducts(listByProductType);
}
 


