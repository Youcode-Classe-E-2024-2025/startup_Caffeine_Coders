const list = document.getElementById('product-containerX');

function scrollRight() {
    const scrollAmount =381;        //list.clientWidth;  // Scroll by the width of the visible container
    list.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function scrollLeftSlider() {
    const scrollAmount =-381;// list.clientWidth*-1;  // Scroll by the width of the visible container
    list.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}


const secondList = document.getElementById('secondProduct-containerX');

function secondScrollRight() {
    const scrollAmount = list.clientWidth;  // Scroll by the width of the visible container
    secondList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function secondScrollLeftSlider() {
    const scrollAmount = list.clientWidth*-1;  // Scroll by the width of the visible container
    secondList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}


