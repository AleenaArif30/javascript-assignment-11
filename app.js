function sub() {
    var first = document.getElementById('first').value
    var last = document.getElementById('last').value
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value

    if (email === "") {
        alert("Email id is required")

    }
    else if (pass === "") {
        alert("Enter your password")
    }
    else {

        console.log(first)
        console.log(last)
        console.log(email)
        console.log(pass)
        document.write("first name" + first + "<br>")
        document.write("last name" + last + "<br>")
        document.write("Email:" + email + "<br>")
        document.write("Password:" + pass + "<br>")
        alert("your form has been submit")
    }

}
function expand() {
    var link = document.getElementById("link")
    var morecontent = document.getElementById("more-content")
    if (link.innerHTML === "Read more") {
        link.innerHTML = "Read less"
        morecontent.style.display = "inline"
    }
    else {
        link.innerHTML = "Read more"
        morecontent.style.display = "none"
    }
}

function twoexpand() {
    var links = document.getElementById("links")
    var morecontents = document.getElementById("more-contents")
    if (links.innerHTML === "Read more") {
        links.innerHTML = "Read less"
        morecontents.style.display = "inline"
    }
    else {
        links.innerHTML = "Read more"
        morecontents.style.display = "none"
    }
}

function threeexpand() {
    var slink = document.getElementById("slink")
    var smorecontent = document.getElementById("smore-content")
    if (slink.innerHTML === "Read more") {
        slink.innerHTML = "Read less"
        smorecontent.style.display = "inline"
    }
    else {
        slink.innerHTML = "Read more"
        smorecontent.style.display = "none"
    }
}

//  form


document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault()

    var name = document.getElementById("name").value
    var classname = document.getElementById("class").value
    var age = document.getElementById("age").value

    var table = document.getElementById("studentTable").querySelector("tbody")
    var newTr = table.insertRow();

    var td1 = newTr.insertCell(0)
    var td2 = newTr.insertCell(1)
    var td3 = newTr.insertCell(2)
    var td4 = newTr.insertCell(3)

    td1.innerHTML = name
    td2.innerHTML = classname
    td3.innerHTML = age
    td4.innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`
    document.getElementById("studentForm").reset()


})
function deleteRow(button) {
    var tr = button.parentNode.parentNode
    tr.parentNode.removeChild(tr)
}
function editRow() {

}

