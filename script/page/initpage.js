document.addEventListener('DOMContentLoaded', function() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    displayProducts(products);
});

function getFilterCriteria(){
    return {
        category: document.getElementById('categoryFilter').value,
        minPrice: parseFloat(document.getElementById('minPrice').value) || 0,
        maxPrice: parseFloat(document.getElementById('minPrice').value) || Number.MAX_VALUE,
    }
}