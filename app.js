async function fetching(){
let table  = document.getElementById('table')
let counter = 0

await firebase.database().ref('user/').orderByKey().on('value', function (snapshot) {
    if (snapshot.val() != null && snapshot.val() != undefined) {
        snapshot.forEach(element => {
                    table.innerHTML=table.innerHTML+`
                    

        
                <tr>
                    <td>${counter}</td>
                    <td><strong> ${element.val().dataIp}</strong></td>
                    <td>${element.val().countryName}</td>
                    <td>${element.val().cityName}</td>
                    <td>${element.val().location}</td>
                    <td>${element.val().postal}</td>
                    <td>${element.val().platformDescription}</td>
                    <td>${element.val().resoulation}</td>
                    <td>${element.val().org}</td>
                </tr>
                    `
                    counter++
                    document.getElementById('loader').style.display="none"
                    table.style.display="block"
                    console.log(element.val())
                })}})}


fetching()