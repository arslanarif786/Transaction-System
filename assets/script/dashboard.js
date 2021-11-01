fetch("data.json").then(function(response){
    return response.json();
})
.then(function(data){
    if (data.length > 0) {
        var dumy = "";
        data.forEach((a) => {
            dumy += "<tr>";
            dumy += "<td>" + `${a.id ?? "-"}` + "</td>";
            dumy += "<td>" + `${a.trx_id ?? "-"}` + "</td>";
            dumy += "<td>" + `${a.date ?? "-"}` + "</td>";
            dumy += "<td>" + `${a.name ?? "-"}` + "</td>";
            dumy += "<td>" + `${a.email ?? "-"}` + "</td>";
            dumy += "<td>" + `${a.amount ?? "-"}` + "</td>";
             "</tr>";
        })
        document.getElementById("data").innerHTML = dumy;
}
})
function showProfile(){
    document.location.href= "profile.html";
}

// .catch(function(err){
//     console.log(err);
// });
    
