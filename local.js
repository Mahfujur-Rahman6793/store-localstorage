const addProduct = () =>{
    const productName = document.getElementById('product');
    const productQuentity = document.getElementById('quentity');
    // console.log(productName);
    const name = productName.value;
    const quentity = productQuentity.value;
    productName.value = '';
    productQuentity.value = '';
    dislplayItem(name, quentity);
    save(name, quentity);
}
const dislplayItem = (name, quentity) => {
    const listContainer = document.getElementById('list-of-item');
    const li = document.createElement('li');
    li.innerText = `${name} : ${quentity} `;
    listContainer.appendChild(li);
    
}


// check local storage

const search = () => {
    let cart = {};
    const item = localStorage.getItem('cart');
    if (item) {
        cart = JSON.parse(item);
    }
    return cart;
}

// save item to local storage

const save = (product, quentity) => {
    const cart = search();
    cart[product] = quentity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const showcart = () => {
    const item = search();
    for (const product in item) {
        const quentity = item[product];
        // console.log(product, quentity);
        dislplayItem(product, quentity);

        
    }
}
showcart();
