//dashboard function
function dashboard() {
  
    data = JSON.parse(localStorage.getItem("data"));

    if (data.length > 0) {
        var dumy = "";
        data.forEach((a) => {
            dumy += "<tr>";
            dumy += "<td>" + `${a.id ?? "-"}` + "</td>";
            dumy += "<td>" + `${a.date ?? "-"}` + "</td>";
            dumy += "<td>" + `${a.trx_id ?? "-"}` + "</td>";
            dumy += "<td>" + `${a.fname + " " + a.lname ?? "-"}` + "</td>";
            dumy += "<td>" + `${a.email ?? "-"}` + "</td>";
            dumy += "<td>" + `${a.amount ?? "-"}` + "</td>";
             "</tr>";
        })

        document.getElementById("data").innerHTML = dumy;
        console.log("datatatata",document.getElementById("data"));
    }
}