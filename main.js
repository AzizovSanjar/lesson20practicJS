//Задание 1: Получение данных с открытого API

//Выберите открытое API
//(например, JSONPlaceholder, https://jsonplaceholder.typicode.com/) с данными о пользователях.
//Используя Fetch API, получите список пользователей с сервера.
//Отобразите их имена и адреса на веб-странице.

// fetch( "https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => document.getElementById('lists'). innerText = JSON.stringify(data))


const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => response.json())
  //   .then((data) => console.log(data))
  .then((data) => {
    data.forEach((element) => {
      const li = document.createElement("li");
      li.innerText = `Имя: ${element.name}`;
      const span = document.createElement("span");
      span.innerText = `Адрес: ${element.address.street}`;
      const p = document.createElement("p");
      p.innerText = `Email: ${element.email}`;
      lists.append(li, span, p)
    });
  });



//.Задание 2: Отправка данных на сервер
//Создайте HTML-форму для добавления новой задачи.
//Используя Fetch API, отправьте POST-запрос с данными о новой задаче на сервер.


const formEl = document.getElementById('form')

formEl.addEventListener('submit', event => {
  event.preventDefault()

  const formData = new FormData(formEl)
  const data = Object.fromEntries(formData)

  console.log(data);

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(data)
  })

})





// const form = document.getElementById('form')

// function btnUser (event) {
//   event.preventDefault()

// const name = form.querySelector('[name="name"]')
// const username = form.querySelector('[name="username"]')
// const email = form.querySelector('[name="email"]')

// const formData = new FormData(formEl)
// const data = Object.fromEntries(formData)

// let values = {
//   name:name.value,
//   username:username.value,
//   email: email.value,

// }
// console.log(values);
// }
// form.addEventListener('submit', btnUser)

// fetch("https://jsonplaceholder.typicode.com/users", form, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(values),
// })
