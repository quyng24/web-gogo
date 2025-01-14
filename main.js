import { fetchApi } from "./fetchapi.js";
import { displayProduct, searchProducts } from "./product.js";


// fetch API display product 
let products = [];
fetchApi("https://dummyjson.com/products")
    .then(data => {
        products = data.products;
        displayProduct(products);
    })


// searchs products 
const searchInput = document.querySelector('.header__search-input');
searchInput.addEventListener('change', (e) => {
    const query = e.target.value.trim();
    const filterProducts = searchProducts(products, query)
    if(query === '') {
        displayProduct(products);
    } else {
        displayProduct(filterProducts);
    }
});


// Categorize product list
fetchApi("https://dummyjson.com/products")
    .then(data => {
        const categories = [...new Set(data.products.map(product => product.category))];
        const categoryContainer = document.querySelector('.category-list');
        let htmls = categories.map(category => `
            <li class="category-item">${category.toUpperCase()}</li>`).join('');
        categoryContainer.innerHTML = htmls;

        const allProductBtn = document.createElement('li');
        allProductBtn.className = 'category-list';
        allProductBtn.textContent = 'ALL PRODUCTS';
        allProductBtn.style.fontWeight = 'bold';
        allProductBtn.style.fontSize = '1rem';
        categoryContainer.insertAdjacentElement('afterbegin', allProductBtn);
        allProductBtn.addEventListener('click', () => {
            displayProduct(products);
        });
        const categoryItems = document.querySelectorAll('.category-item');
        categoryItems.forEach(item => {
            item.addEventListener('click', () => {
                const categoryContent = item.textContent.toLocaleLowerCase();
                const filterDisplayProducts = products.filter(item => {
                    if(item.category == categoryContent) {
                        return true;
                    } else {
                        return false;
                    }
                });
                displayProduct(filterDisplayProducts);
                
            });
        });
    });


// sort products by price
const btnSortLowHigh = document.querySelector('li.btn-sort-lowtohigh');
const btnSortHighLow = document.querySelector('li.btn-sort-hightolow');
btnSortLowHigh.addEventListener('click', () => {
    const sortProduct = [...products].sort((a, b) => a.price - b.price);
    displayProduct(sortProduct);
});
btnSortHighLow.addEventListener('click', (e) => {
    const sortProduct = [...products].sort((a, b) => b.price - a.price);
    displayProduct(sortProduct);
});