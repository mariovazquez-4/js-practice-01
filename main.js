const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleMenuProductDetail);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();
  mobileMenu.classList.toggle("inactive");
}

function toggleMenuProductDetail() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailClose = productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClose) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactive');

  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "TV",
  price: 700,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Mobile",
  price: 1200,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(array) {
  for (product of array) {
    const productCard = document.createElement("div"); // creamos el div
    productCard.classList.add("product-card"); // agregamos clase

    //product = {name, price, img} -> produc.img

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.img); // modificamos propiedad y agregamos la ruta
    productImage.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div"); // div sin clase

    const productPrice = document.createElement("p"); // innerText, innerHtml, inner , append
    productPrice.innerText = "$" + product.price; // parrafo precio

    const productName = document.createElement("p"); // // parrafo name
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart); //insertamos a su elemento padre

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);

//Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.
// productInfoDiv.append(productPrice, productName)
