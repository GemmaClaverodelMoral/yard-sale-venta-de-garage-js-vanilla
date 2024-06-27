
const navbEmail         = document.querySelector(".navb_email")
const navMenuVertical   = document.querySelector(".nav_menu_vertical")
const desktopMenu       = document.querySelector(".desktop_menu")
const mobileMenu        = document.querySelector(".mobile_menu")
const shoppingCart      = document.querySelector(".shopping_cart")
const navbCart          = document.querySelector(".navb_cart")
const titleContainerImg = document.querySelector(".title_container_img")
const cardsContainer    = document.querySelector('.cards_container')
const productDetailCard = document.querySelector('.product_detail_card')
const iconContainer     = document.querySelector('.icon_container')


const productList = []
productList.push(
    {
        name: 'Bike',
        price: 120,
        image: "./assets/images/bici.jpg"
    },
    {
        name: 'Compu',
        price: 620,
        image: "./assets/images/bici.jpg"
    },
    {
        name: 'patin',
        price: 320,
        image: "./assets/images/bici.jpg"
    }
)

navbEmail.addEventListener('click',         toggleDesktopMenu)
navMenuVertical.addEventListener('click',   toggleMobileMenu)
navbCart.addEventListener('click',          toggleCart)
titleContainerImg.addEventListener('click', toggleCart)
// productCard.addEventListener('click',       toggleDetailCard)
iconContainer.addEventListener('click', toggleDetailCard)
document.addEventListener('DOMContentLoaded', (event) => renderProducts(productList));

function toggleDesktopMenu() { // Muestra o Oculta el Menu de escritorio

    mobileMenu.classList.add('inactive')
    shoppingCart.classList.add('inactive')
    productDetailCard.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
} 
function toggleMobileMenu() { // Muestra o Oculta el Menu de Mobile

    shoppingCart.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetailCard.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
} 
function toggleCart() { // Muestra o Oculta el Carrito de Compras
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    shoppingCart.classList.toggle('inactive');
} 
function toggleDetailCard() { // Muestra o Oculta el Detalle del Producto
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    shoppingCart.classList.add('inactive')
    productDetailCard.classList.toggle('inactive');
} 
function openProductDetail(producto) {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    shoppingCart.classList.add('inactive')
    // productDetailCard.img = producto.image
    // productDetailCard.name = producto.name
    // productDetailCard.price = producto.price
    productDetailCard.classList.remove('inactive')
}
function renderProducts(arr){ // Recorre la base de datos de productos y los plasma en la pantalla
    for (product of arr) {
        
        const productCard = document.createElement('div'); // <div class="product_card">
        productCard.classList.add('product_card');

        const productImage = document.createElement('img'); //   <img src="./assets/images/bici.jpg" alt="Bike" />
        productImage.src = product.image;
        productImage.alt = product.name;
        productCard.appendChild(productImage);              //   />
        productImage.addEventListener('click', openProductDetail)
        const productInfo = document.createElement('div');  //   <div class="product_info">
        productInfo.classList.add('product_info');
        const productText = document.createElement('div');  //     <div>
        const productPrice = document.createElement('p');   //       <p>$120,00
        productPrice.textContent = '$' + product.price + ',00';
        productText.appendChild(productPrice);              //       </p>
        const productName = document.createElement('p');    //       <p>Bike
        productName.textContent = product.name;
        productText.appendChild(productName);               //     </p>
        productInfo.appendChild(productText);               //     </div>
        const productFigure = document.createElement('figure');//   <figure>
        const cartImage = document.createElement('img');    //         <img src="./assets/icons/bt_add_to_cart.svg" alt="" />
        cartImage.src = './assets/icons/bt_add_to_cart.svg';
        cartImage.alt = 'Cart Icon';
        productFigure.appendChild(cartImage);               //         />
        productInfo.appendChild(productFigure);             //      </figure>
        productCard.appendChild(productInfo);               //   </div>
        cardsContainer.appendChild(productCard);            // </div>
        productImage.addEventListener('click', openProductDetail(product))
        
    }
}

