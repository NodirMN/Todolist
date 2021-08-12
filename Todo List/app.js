let name = document.getElementById('userName')
let address = document.getElementById('userAddress')
let progs = document.querySelectorAll('.form-check input[type=checkbox]')
let depart = document.getElementById('userDepart')
let users = []
let table = document.querySelector('table')
var myModal = new bootstrap.Modal(document.getElementById('newWorkerModal'),{})
if (localStorage.getItem('users')){
    try {users = JSON.parse(localStorage.getItem('users')); show()
} catch (error) {localStorage.removeItem('users')}   
}
function add() {
    let progLang = []
    progs.forEach(prog => {if (prog.checked){progLang.push(prog.value)}})
    const user = { 
        name: name.value, 
        address: address.value, 
        progs: progLang, 
        depart: depart.value
    }
    users.push(user)
    let readyUsers = JSON.stringify(users)
    localStorage.setItem('user', readyUsers); show(); myModal.hide()

}
function show() {
    let count = 1
    table.innerHTML = `<thead><tr><th scope ="col"></th><th scope ="col"></th><th scope ="col"></th><th scope="col"></th> <th scope="col"> </thead>`
    users.forEach(user =>{
        table.innerHTML += `<tr><td>${count}</td><td>${user.name}</td><td>${user.address}</td><td>${user.progs}</td><td>${user.depart}<td><td><button class ="btn btn-danger" onclick="del(${count-1})">Delete</button><td></tr>`
        count++})
}
function del(index){
    users.splice(index,1)
let readyUsers = JSON.stringify(users)
localStorage.setItem('user', readyUsers); 
    show()
}


