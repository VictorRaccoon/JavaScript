let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

btn.addEventListener("click", () => {
    fetch("https://reqres.in/api/users?page=2").then((response) => {
        return response.json();
    }).then((response) => {
        console.log(response);
        console.log(response.data);
        response.data.forEach(user => {
            console.log(user);
            let item = document.createElement("li");
            item.classList.add("format");

            item.innerHTML = `<img src='${user.avatar}' /> <span>${user.first_name}</span>`;

            list.appendChild(item);
        });
    })
});