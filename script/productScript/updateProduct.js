// Cập nhật một sản phẩm hiện có trong localStorage
function updateProduct(productId) {
    // Lấy giá trị từ các trường nhập liệu cho tên, giá và danh mục sản phẩm
    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productCategory = document.getElementById('productCategory').value;
    const productImage = document.getElementById('profileImage').files[0];

    let products = JSON.parse(localStorage.getItem('products')) || [];

    const productIndex = products.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        products[productIndex].name = productName;
        products[productIndex].price = productPrice;
        products[productIndex].category = productCategory;
        products[productIndex].image = URL.createObjectURL(productImage);

        localStorage.setItem('products', JSON.stringify(products));

        alert('Product updated successfully!');

        goToPage('productCRUD.html');
    } else {
        alert('Product not found.');
    }
}
