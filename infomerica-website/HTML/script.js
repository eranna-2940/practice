
function validemail() {
    let email = document.getElementById("email").value
    let erroremail = document.getElementById("erroremail")

    if (email.endsWith('gmail')) {
        erroremail.innerHTML = ""
    } else {
        erroremail.innerHTML = "please enter gmail.com";
        erroremail.style.color = 'red';
    }
}

function validpassword() {
    let password = document.getElementById("password").value;
    let errorpassword = document.getElementById("errorpassword");

    if (password.length < 3) {
        errorpassword.innerHTML = "please enter strong password"
        errorpassword.style.color = 'red';
    } else {

        errorpassword.innerHTML = ""
    }
}


function getFormvalue() {

    //sessionStorage.setItem('email',r_email.value)
    //sessionStorage.setItem('password',r_password.value)


    let r_email = document.getElementById("email");
    let r_password = document.getElementById("password");

    localStorage.setItem('email', r_email.value);
    localStorage.setItem('password', r_password.value);

 

    if(email.value == "" || password.value == ""){
        alert('please filled all inputes')
    }
    document.write(`
            {Email:${r_email.value}<br>
            Password:${r_password.value}}

        `);

};


