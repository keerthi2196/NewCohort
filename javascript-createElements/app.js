let users = [];
let elements = document.getElementById('elements');
let alert = document.getElementById('alert')

function renderUser() {
    elements.innerHTML = '';
    users.forEach((user) => {
        let div = document.createElement('div');
        let name = document.createElement('p');
        let email = document.createElement('p');
        let btn = document.createElement('button');
        div.classList.add('user');
        name.innerText = user.name;
        email.innerText = user.email;
        btn.innerText = 'delete';
        btn.classList.add('delete');
       btn.addEventListener('click',() => deleteUser(user.email));
        elements.appendChild(div);
        div.appendChild(name);
        div.appendChild(email);
        div.appendChild(btn);

    })
}

function filteredValue(email){
let user = users.filter(user => user.email == email);
return user.length>0? true : false;
}

function removeAlerts(){
    setTimeout(()=> {
alert.classList.remove('success','danger');
    },2000)
}


function addUser() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let user = {
        name: name.value,
        email: email.value,
    }
    let checkEmail = filteredValue(email.value);
  if(checkEmail == false){
    users.push(user);
    alert.innerText = 'user added sussccfully';
    alert.classList.add('success');
  }else{
    alert.innerText = 'user already exists';
    alert.classList.add('danger');
  }

  removeAlerts();
  renderUser();

    name.value = '';
    email.value = '';

}

function deleteUser(email){
users = users.filter(user => user.email !== email);

renderUser();
}

function rotate() {
    let dice = document.getElementById('dice');

    // let div = document.createElement(div);
    dice.classList.add('spin');
    setTimeout(() => {
        dice.classList.remove('spin');
    }, 1000);

    dice.innerText = Math.floor(Math.random() * 6 + 1);
}
