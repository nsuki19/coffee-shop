function loadProductList() {
    let products = JSON.parse(localStorage.getItem('products')) || [];

    let productListDiv = document.getElementById('productList');
    
    productListDiv.innerHTML = '';
    
    products.forEach(product => {
        let productDiv = document.createElement('div');
        
        productDiv.innerHTML = `
            <p>
                <strong>Name:</strong> ${product.name} <br>
                <strong>Price:</strong> $${product.price.toFixed(2)} <br>
                <strong>Category:</strong> ${product.category} <br>
                <img src="${product.image}" alt="Product Image" width="50" height="50"> <br>

                <button onclick="readProduct('${product.id}')">Read</button>
                <button onclick="deleteProduct('${product.id}')">Delete</button>
                <button onclick="prepareUpdateProduct('${product.id}')">Edit</button>
            </p>
            <hr>
        `;

        productListDiv.appendChild(productDiv);
    });
}


function prepareUpdateProduct(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const product = products.find(product => product.id === productId);
    
    if (product) {
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productImage').value = product.image;

        document.getElementById('updateButton').style.display = 'inline';
        document.getElementById('productForm').querySelector('button[onclick="createProduct()"]').style.display = 'none';
    } else {
        alert('Product not found.');
    }
}


// Chuyển hướng đến một trang khác
function goToPage(page) {
    // Tải danh sách sản phẩm khi chuyển hướng trang
    loadProductList();
}

