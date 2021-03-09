let users = [];

function fetchData(){
    fetch('http://127.0.0.1:5000/show-results/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        users = data;
    });
}

fetchData()

function signin(){
    
    let loginForm = document.getElementById("signin");
    let inputs = loginForm.getElementsByTagName('input');

    let name = inputs[0].value;
    let password = inputs[1].value;

    console.log(users, name, password);

    let loggedIn = users.filter(user => {
        return user.name == name && user.password == password;
    })

    console.log(loggedIn)

    if (loggedIn.length >= 1) {
        alert('You have been successfully signed in!');
        window.location.href='./LOGIN.html'
    } else {
        alert('Invalid Login');
    }
    loginForm.reset();
}

function signup(){
    let signupForm = document.getElementById('signup');
    let inputs = signupForm.getElementsByTagName('input');

    let name = inputs[0].value
    let surname = inputs[1].value
    let email = inputs[2].value
    let password = inputs[3].value

    fetch('http://127.0.0.1:5000/add-host/', {
        method: 'POST',
        body: JSON.stringify({
            name,
            surname,
            email,
            password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err))
    signupForm.reset();
    fetchData();

    window.location.href = "./chat.html";

}