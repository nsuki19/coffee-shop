// Xử lý quá trình thanh toán
function checkOut() {
    // Lấy giỏ hàng từ localStorage, nếu không có, khởi tạo mảng rỗng
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Kiểm tra xem giỏ hàng có rỗng không
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return false; // Ngăn không cho form gửi đi
    }
  
    // Tính tổng số tiền thanh toán
    const totalAmount = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    alert(`Your total is $${totalAmount.toFixed(2)}. Checkout successful!`);
  
    // Tạo hóa đơn và lưu dưới dạng file .txt
    generateInvoice(cart, totalAmount);
  
    // Xóa giỏ hàng sau khi thanh toán thành công
    localStorage.removeItem("cart");
  
    return false; // Ngăn không cho form gửi đi
  }
  
  // Tạo hóa đơn và lưu dưới dạng file .txt
  function generateInvoice(cart, totalAmount) {
    // thông tin người dùng được lưu trữ trong localStorage với key là user
    const user = JSON.parse(localStorage.getItem('user'));
  
    let invoiceContent = "Invoice\n\n";
  
    // thêm người dùng vào hóa đơn nếu có
    if(user && user.name){
      invoiceContent += `Customer: ${user.name}\n\n`;
    }
  
    invoiceContent += "Items Purchased:\n";
  
    // Duyệt qua từng sản phẩm trong giỏ hàng và thêm vào nội dung hóa đơn
    cart.forEach((item) => {
      invoiceContent += `${item.name} - $${item.price.toFixed(2)} x ${
        item.quantity
      } = $${(item.price * item.quantity).toFixed(2)}\n`;
    });
  
    // Thêm tổng số tiền vào hóa đơn
    invoiceContent += `\nTotal: $${totalAmount.toFixed(2)}\n`;
    invoiceContent += "\nThank you for your purchase!\n";
  
    // Tạo một đối tượng Blob với nội dung hóa đơn
    const blob = new Blob([invoiceContent], { type: "text/plain" });
  
    // Tạo một phần tử liên kết (link) để tải xuống file hóa đơn
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "invoice.txt";
    link.click(); // Kích hoạt việc tải xuống file
  }