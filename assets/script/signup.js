//signup function
function storevalue() {

    w = document.getElementById("fname").value;
    x = document.getElementById("lname").value;
    u = document.getElementById("username").value;
    y = document.getElementById("email").value;
    z = document.getElementById("password").value;
    i = document.getElementById("policy").value;
    console.log("policy", i);

    p = {
        fname: w,
        lname: x,
        username: u,
        email: y,
        password: z,
    };

    data = localStorage.getItem("data");

    data = data == null ? [] : JSON.parse(data);

    if (data.some((e) => {
            return e.email == y;
        })) {
        alert("duplicate data");
    } else {
        data.push(p);
        data = JSON.stringify(data);
        localStorage.setItem("data", data);
        alert("your Account has been created");
        window.open("login.htm", "_self");
    }
}