const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
  containerCartProducts.classList.toggle('hidden-cart')
})


const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');


const productsList = document.querySelector('.container-items');


let allProducts = []



productsList.addEventListener('click', e => {
    
    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exist = allProducts.some(
            product => product.title === infoProduct.title
        );

        if (exist) {
            const  products = allProducts.map(product => {
                if (product.title === infoProduct.title){
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHtml();
    }
})


const showHtml = () => {

    rowProduct.innerHTML = '';

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classLits.add('cart-product');
    
        containerProduct.innerHtml = `
         <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${product.quantity}</span>
            <p class="titulo-producto-carrito">${product.title}</p>
            <span class="precio-producto-carrito">${product.price}</span>
         </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        `
    
        rowProduct.append(containerProduct);
    })
}