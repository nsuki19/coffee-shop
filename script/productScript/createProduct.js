function createProduct() {
    const productName = document.getElementById('productName').value;

    const productPrice = parseFloat(document.getElementById('productPrice').value);

    const productCategory = document.getElementById('productCategory').value;

    const productImage = document.getElementById('profileImage').files[0];

    const productId = Date.now().toString();

    const newProduct = {
        id: productId,
        name: productName,
        price: productPrice,
        category: productCategory,
        image: URL.createObjectURL(productImage)
    };

    let products = JSON.parse(localStorage.getItem('products')) || [];

    products.push(newProduct);

    localStorage.setItem('products', JSON.stringify(products));

    alert('Product created successfully!');

    goToPage('productCRUD.html');
}
