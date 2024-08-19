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
        // document.write("first name" + first + "<br>")
        // document.write("last name" + last + "<br>")
        // document.write("Email:" + email + "<br>")
        // document.write("Password:" + pass + "<br>")
        alert("your form has been submit")
    }

}
function expand(event) {
    event.preventDefault()
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

function twoexpand(event) {
    event.preventDefault()
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

function threeexpand(event) {
    event.preventDefault()
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

    var td1 = newTr.insertCell(0).innerHTML = name
    var td2 = newTr.insertCell(1).innerHTML = classname
    var td3 = newTr.insertCell(2).innerHTML = age
    var td4 = newTr.insertCell(3).innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`
    document.getElementById("studentForm").reset()



})
function deleteRow(button) {
    var tr = button.parentNode.parentNode
    tr.parentNode.removeChild(tr)
}

function editRow(button) {



    var tr = button.parentNode.parentNode
    var index = tr.rowIndex -1
    console.log(index)
    document.getElementById("editindex").value = index
    document.getElementById("editname").value = tr.cells[0].innerHTML
    document.getElementById("editclass").value = tr.cells[1].innerHTML
    document.getElementById("editage").value = tr.cells[2].innerHTML

    document.getElementById("editFormContent").classList.remove("hidden")


}



document.getElementById("editform").addEventListener("submit", function (e) {
    e.preventDefault()
    var editindex = document.getElementById("editindex").value
    var editname = document.getElementById("editname").value
    var editclass = document.getElementById("editclass").value
    var editage = document.getElementById("editage").value

    var table = document.getElementById("studentTable").querySelector("tbody")
    var tr = table.rows[editindex]

    tr.cells[0].innerHTML = editname
    tr.cells[1].innerHTML = editclass
    tr.cells[2].innerHTML = editage
    document.getElementById("editFormContent").classList.add("hidden")

})