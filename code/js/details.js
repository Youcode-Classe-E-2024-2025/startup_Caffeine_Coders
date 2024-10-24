let listDetails = []; 
const img = document.querySelector('.productImg');
const nname = document.querySelector('.productName');
const stock = document.querySelector('.stock-status');
const desc = document.querySelector('.desc');
const price = document.querySelector('.price');


window.onload = function() {
    fetchProducts(); 
};

function fetchProducts() {
    fetch('../data/data.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json(); 
        })
        .then(products => {
            listDetails = products;
            displayProductDetails();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayProductDetails() {
    console.log(listDetails);
   
    
    
    const selectedProductId = localStorage.getItem('selectedProductId'); 
    const product = listDetails.find(item => item.id == selectedProductId); 
    console.log(selectedProductId);
     console.log(product);
     console.log('test');
     
     
    if (product) {
        img.setAttribute('src', product.img);
        nname.textContent = product.name;
        stock.textContent = product.stock_status;
        price.textContent = `${product.price} DH`;
        desc.textContent =  product.desc; 
    } else {
        console.error(`Product with ID ${selectedProductId} not found.`);
    }
}
displayProductDetails();
