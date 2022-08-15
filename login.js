document.getElementById('login-button').addEventListener('click', function(){
    const usernameField = document.getElementById('user-name');
    const username = usernameField.value;
    console.log(username);

    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    console.log(password);

    if(username == 'modasser' && password == '12345'){
        window.location.href = "wallet.html";
    } else{
        alert('Sorry! your username or password is invalid. Please login with a valid credentials.')
    }
})