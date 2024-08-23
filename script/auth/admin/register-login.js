function adminRegister(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const admin = {name, email, password};

    localStorage.setItem('admin', JSON.stringify(admin));

    alert('Admin registration successfully');

    goToPage('adminLogin.html');
}

function adminLogin(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedAdmin = JSON.parse(localStorage.getItem('admin'));

    if(storedAdmin && storedAdmin.email === email && storedAdmin.password === password){
        alert('Login Successfully');
        goToPage('/view/admin/adminProfile.html');
    }else{
        alert('Login failed, check your email/password');
    }
}