function readProduct(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const product = products.find(product => product.id === productId);
    
    if (product) {
        document.getElementById('productName').innerText = product.name;
        document.getElementById('productPrice').innerText = `$${product.price.toFixed(2)}`;
        document.getElementById('productCategory').innerText = product.category;
    } else {
        alert('Product not found.');
    }
}
