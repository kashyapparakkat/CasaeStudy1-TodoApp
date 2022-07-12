let email = document.getElementById("exampleInputEmail1")
let password = document.getElementById("exampleInputPassword1")
let confirmPassword = document.getElementById("exampleInputConfirmPassword1")

var maxTodos = 0

function validateLogin() {
    var a = false
    console.log("Inside validateLogin function")
    var promise = new Promise(function (resolve, reject) {
        if ((email.value == "admin") && (password.value == "12345")) {
            console.log("Inside if loop in validateLogin function")
            resolve("true")
            a = true
        } else {
            console.log("Inside else loop in validateLogin function")
            reject("false")
            a = false
        }
    })

    promise.then(function (s){
        console.log("Inside promise resolve")
        a = true
    }).catch(function (e){
        console.log("Inside promise reject")
        a = false
    })

    console.log("validateLogin ===", a)
    return a
}

const api_url =
    "https://jsonplaceholder.typicode.com/todos";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        `<tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
         </tr>`;

    // Loop to access all rows
    for(var i = 0; i < data.length; i++) {
        //for (let r of data.length) {
        if (data[i].completed == true) {
            console.log("Inside if")
    tab += `<tr> 
        <td>${data[i].userId} </td>
        <td>${data[i].id}</td>
        <td>${data[i].title}</td> 
        <td><input type="checkbox" checked disabled onchange="validateMaxTodos()"></td>          
    </tr>`;
        } else {
            console.log("Inside else")
    tab += `<tr> 
    <td>${data[i].userId} </td>
    <td>${data[i].id}</td>
    <td>${data[i].title}</td> 
    <td><input type="checkbox" onchange="validateMaxTodos()"></td>          
    </tr>`;
        }
    }

    // Setting innerHTML as tab variable
    document.getElementById("todos").innerHTML = tab;
}

function validateMaxTodos(){
    maxTodos++
    console.log("maxTodos==",maxTodos)
    var promise = new Promise(function (resolve, reject) {
        if(maxTodos == 5){
            console.log("Inside if loop in validateMaxTodos function")
            resolve("true")
        } else {
            console.log("Inside else loop in validateMaxTodos function")
            reject("false")
        }
    })

    promise.then(function (s){
        console.log("Inside promise resolve")
        alert("Congrats. 5 Tasks have been Successfully Completed")
    }).catch(function (e){
        console.log("Inside promise reject")
    })

}

