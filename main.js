import { fetchApi } from "./fetchapi.js";
fetchApi("https://dummyjson.com/products")
    .then(data => {
        let htmls = "";
        data.products.forEach(item => {
            htmls += `
                <div class="grid__colum-2-4 item-wrap">
                    <a href="#" class="home-product-item">
                        <div class="home-product-item__img" style="background-image: url(${item.thumbnail});"></div>
                        <h5 class="home-product-item__namesp">${item.title}</h5>
                        <div class="home-product-item__gia">
                            <span class="home-product-item__giacu">1.200.000$</span>
                            <span class="home-product-item__giamoi">${item.pice}$</span>
                        </div>
                        <div class="home-product-item__action">
                            <span class="home-product-liketym home-product-liketym-dl">
                                <i class="home-product-liketym-dlv far fa-heart"></i>
                                <i class="home-product-liketym-dlx fas fa-heart"></i>
                            </span>
                            <div class="home-product-rating">
                                <i class="ome-product-star-gold fas fa-star"></i>
                                <i class="ome-product-star-gold fas fa-star"></i>
                                <i class="ome-product-star-gold fas fa-star"></i>
                                <i class="ome-product-star-gold fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="home-product-item-ban">88 đã bán</span>
                        </div>
                        <div class="home-product-item__xx">
                            <span class="home-product-item__brand">Whoo</span>
                            <span class="home-product-item__tensx">${item.brand}</span>
                        </div>
                        <div class="home-product-item__yt">
                            <i class="home-product-item__yt-icon fas fa-check"></i>
                            <span class="home-product-nhthem">Yêu thích</span>
                        </div>
                        <div class="home-product-item__seal">
                            <span class="home-product-ptram">10%</span>
                            <span class="home-product-giam">GIẢM</span>
                        </div>
                    </a>
                </div>
            `;
            document.querySelector('.home-product .grid__row').innerHTML = htmls;
        })
    })