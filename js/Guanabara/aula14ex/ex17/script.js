const calculate = () => {
    var n = document.querySelector("#val");
    n = Number(n.value);
    var result = document.querySelector("#res");
    
    for (let i = 0; i < 10; i++) {
        result.innerHTML += `<p>${n} x ${i} = ${n*i}</p>`;
    }
}