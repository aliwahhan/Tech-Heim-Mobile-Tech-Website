
const getDataJson ='../js/products.json';

fetch(getDataJson)
  .then(response => response.json())
  .then(data => {
    const swiper_items_sale = document.getElementById("swiper_items_sale");

    // تصفية المنتجات التي لديها old_price = 0
    const filteredProducts = data.filter(product => product.old_price === 0);

    // إنشاء عنصر لكل منتج وتنظيمه في DOM
    filteredProducts.forEach(product => {
      const productSlide = document.createElement('div');
      productSlide.classList.add('swiper-slide', 'p-lg-3', 'p-2');

      productSlide.innerHTML = `
        <div class="images">
          <img src="${product.img}" class="card-img" alt="${product.name}">
        </div>
        <hr class="main-line mx-auto mb-2">
        <div class="colors-product">
          ${product.color.map(color => `<div style="background-color: #${color}; width: 10px; height: 10px; border-radius: 50%;"></div>`).join('')}
          <p class="m-0 p-0 pluse">+</p>
        </div>
        <div>
          <h5 class="title">${product.name}</h5>
          <div class="d-flex justify-content-between align-items-center">
            <p class="price m-0 p-0 fs-6">$${product.price.toFixed(2)}</p>
            <div class="evelations d-flex align-items-center gap-1">
              <i class="fa-solid fa-star fs-6"></i>
              <p class="m-0 p-0 fs-6">${product.evaluate}</p>
            </div>
          </div>
        </div>
      `;

      // إضافة العنصر إلى swiper_items_sale
      swiper_items_sale.appendChild(productSlide);
    });
  })
  .catch(error => console.error('Error fetching products:', error));

  // get the best Sellers 
//   const bestSellers = '../js/bestSellers.json';
//   forEach(bestSellers)
//     .then(response => response.json())
//   .then(data => {
// const swiper_bstSellers=document.getElementById('swiper_bstSellers');
// forEach(productBest => {
//   const bestProduct = document.createElement('div');
//   bestProduct.classList.add('swiper-slide', 'p-lg-3', 'p-2');
//   bestProduct.innerHTML =`
//                       <div class="images">
//                             <img src="${productBest.img}" class="card-img" alt="${productBest.name}">
//                         </div>
//                         <div class="discount position-absolute  mt-2  top-0 " style="background-color: #FDDBC9;"
//                             id="discount">-50%</div>
//                         <hr class="main-line mx-auto mb-2">
//                         <div class="colors-product">
//                             <div class="one"></div>
//                             <div class="tow"></div>
//                             <div class="three"></div>
//                             <p class="m-0 p-0 pluse">+</p>
//                         </div>
//                         <div>
//                             <h5 class="title">Iphone 14 promax 256 gig</h5>
//                             <div class="d-flex justify-content-between align-items-end ">
//                                 <div>
//                                     <del class="old-price m-0 p-0 text-black-50" style="font-size: 10px;"
//                                         id="price">$930.90</del>
//                                     <p class="price m-0 p-0 fs-6 " id="price">$930.90</p>
//                                 </div>
//                                 <div class="evelations d-flex align-items-center gap-1">
//                                     <i class="fa-solid fa-star fs-6"></i>
//                                     <p class="m-0 p-0 fs-6">4.5</p>

//                                 </div>
//                             </div>
//                         </div>
//   `;
//   swiper_bstSellers.appendChild(bestProduct);
// });
//   }).catch(error=> console.error('Error fetching product best sellers'));
const bestSellersUrl = '../js/bestSellers.json';

fetch(bestSellersUrl)
  .then(response => response.json())
  .then(data => {
    const swiper_bstSellers = document.getElementById('swiper_bstSellers');
    
    data.forEach(productBest => {
      const bestProduct = document.createElement('div');
      bestProduct.classList.add('swiper-slide');
      
      bestProduct.innerHTML = `
        <div class="images">
          <img src="${productBest.img}" class="card-img" alt="${productBest.name}">
        </div>
        ${productBest.discount > 0 ? `<div class="discount position-absolute mt-2 top-0">-${productBest.discount}%</div>` : ''}
        <hr class="main-line mx-auto mb-2">
        <div class="colors-product">
          ${productBest.color.map(colorCode => `<div class="color-square" style="background-color: #${colorCode};"></div>`).join('')}
          <p class="m-0 p-0 pluse">+</p>
        </div>
        <div class="d-flex justify-content-between flex-column p-2 pb-0 a">
          <h5 class="title">${productBest.name}</h5>
          <div class="d-flex justify-content-between align-items-end">
            <div>
              ${productBest.old_price > 0 ? `<del class="old-price m-0 p-0 text-black-50" style="font-size: 10px;">$${productBest.old_price.toFixed(2)}</del>` : '<p></p>'}
              <p class="price m-0 p-0 fs-6">$${productBest.price.toFixed(2)}</p>
            </div>
            <div class="evelations d-flex align-items-center gap-1">
              <i class="fa-solid fa-star fs-6"></i>
              <p class="m-0 p-0 fs-6">${productBest.evaluate}</p>
            </div>
          </div>
        </div>
      `;

      swiper_bstSellers.appendChild(bestProduct);
    });
  })
  .catch(error => console.error('Error fetching product best sellers:', error));
