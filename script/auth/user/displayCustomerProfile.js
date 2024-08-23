function displayCustomerProfile(){
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if(storedUser){
        document.getElementById('customerName').textContent = storedUser.name;
        document.getElementById('customerEmail').textContent = storedUser.email;
    }
}

window.onload = displayCustomerProfile;