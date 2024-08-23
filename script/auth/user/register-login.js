function userRegister(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {name, email, password};

    localStorage.setItem('user', JSON.stringify(user));

    alert('User registered successfully');

    goToPage('userLogin.html');
}

function userLogin(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if(storedUser && storedUser.email === email && storedUser.password === password){
        alert('Login successfully');
        goToPage('/view/customer/customerProfile.html');
    }else{
        alert('Login failed');
    }
}