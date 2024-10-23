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
