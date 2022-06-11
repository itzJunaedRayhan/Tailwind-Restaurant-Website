let toggleIcon = document.getElementById('toggle-icon');
let fullBodyWrapper = document.getElementById('full-wrapper');

let productWrapper = document.getElementById('products-wrapper');
let product = productWrapper.getElementsByClassName("product")
let left = document.querySelector('.left');
let right = document.querySelector('.right');


//  Display Navigation on click event:
toggleIcon.addEventListener('click', () => {
    fullBodyWrapper.classList.toggle('display-navigation');
});




//  Slide Products on click event:
right.addEventListener('click', () => {
    console.log("Hello");
    productWrapper.append(product[0])
})

left.addEventListener('click', () => {
    console.log("Hello");
    productWrapper.prepend(product[product.length - 1])
})