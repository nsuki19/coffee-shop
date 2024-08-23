// Khi trang web tải xong, tải và hiển thị các mặt hàng trong giỏ hàng
document.addEventListener("DOMContentLoaded", function() {
    // Lấy giỏ hàng từ localStorage, nếu không có, khởi tạo mảng rỗng
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Lấy các phần tử HTML để hiển thị mặt hàng trong giỏ hàng và tổng số tiền
    const cartItemsDiv = document.getElementById('cartItems');
    const totalAmountDiv = document.getElementById('totalAmount');
    
    // Nếu giỏ hàng rỗng, hiển thị thông báo giỏ hàng trống
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty!</p>';
    } else {
        // Nếu giỏ hàng không rỗng, hiển thị các mặt hàng trong giỏ hàng
        let cartContent = '<ul>';  // Khởi tạo danh sách các mặt hàng trong giỏ
        let totalAmount = 0;  // Khởi tạo biến tổng số tiền
        
        // Duyệt qua từng mặt hàng trong giỏ hàng và tạo nội dung HTML để hiển thị
        cart.forEach(item => {
            cartContent += `<li>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</li>`;
            totalAmount += item.price * item.quantity;  // Tính tổng số tiền
        });
        cartContent += '</ul>';  // Kết thúc danh sách mặt hàng
        
        // Hiển thị các mặt hàng trong giỏ hàng
        cartItemsDiv.innerHTML = cartContent;
        
        // Hiển thị tổng số tiền
        totalAmountDiv.innerHTML = `<p><strong>Total: $${totalAmount.toFixed(2)}</strong></p>`;
    }
});