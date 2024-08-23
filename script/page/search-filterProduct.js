function searchProducts(searchTerm){
    const products =JSON.parse(localStorage.getItem('products')) || [];

    const filterProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    displayProducts(filterProducts);
}

function filterProducts(filterCriteria){
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const filterProducts = products.filter(product => {
        const matchesCategory = !filterCriteria.category;
        product.category === filterCriteria.category;

    const matchesMinPrice = !filterCriteria.minPrice ||
    product.price >= filterCriteria.minPrice;
    const matchesMaxPrice = !filterCriteria.minPrice ||
    product.price >= filterCriteria.maxPrice;

    return matchesCategory && matchesMinPrice && matchesMaxPrice;
    });

    displayProducts(filterProducts);

}

function uploadImage(file, productID) {
    const formData = new FormData();
    formData.append('image', file);
  
    fetch('/upload-image', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.imageUrl;
      localStorage.setItem(`uploadedImage-${productID}`, imageUrl);
    })
    .catch(error => console.error(error));
  }

function displayProducts(products) {
    const productContainer = document.getElementById('productContainer');

    productContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        const uploadedImage = localStorage.getItem(`uploadedImage-${product.image}`);
        let imageUrl = product.image;
        if (uploadedImage) {
          imageUrl = uploadedImage;
        }
        productElement.innerHTML = `
         <p>
          <img src="${imageUrl}" alt="" width="50" height="50">
        </p>
        <h3>
            ${product.name}
        </h3>
        <p>
            Price: $${product.price.toFixed(2)}
        </p>
        <p>
            Category: ${product.category}
        </p>
        <button onclick="addToCart('${product.id}')">
            Add To Cart
        </button>
        `;
        productContainer.appendChild(productElement)
    });
}