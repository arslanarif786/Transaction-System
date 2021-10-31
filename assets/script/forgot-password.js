//forgot-password function
function forgotPass() {
    w = document.getElementById("email").value;

    data = JSON.parse(localStorage.getItem("data"));

    (data.some((e) => { return e.email == w})) ?
     alert("check your inbox or spam!") :
      alert("account not registered!")
}