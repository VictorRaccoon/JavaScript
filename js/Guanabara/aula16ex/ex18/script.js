var btnGo = document.querySelector("#btnGo");
btnGo.addEventListener("click", () => {
    var result = document.querySelector("#res");
    var num = document.getElementById("num");
    num = Number(num.value);
    var vet = [];
    vet.forEach(element => {
        if (num < 1 || num > 100) {
            result.innerHTML = "valor inválido";
        }
        else if (num === element) {
            result.innerHTML = "valor ja digitado";
        }
        else 
        {
            element += num;
            result.innerHTML = `valor ${item} adicionado`;
        }    
    });
    var finish = document.createElement('input');
    finish.setAttribute("type", "button");
    finish.appendChild(finish);
    finish.addEventListener("click", () => {
        var info = document.createElement('div');
        info.setAttribute("id", "resInfo");
        var calc = document.getElementById("resInfo");
            calc.innerHTML = `ao todo temos ${vet.length} elementos declarados`;
            calc.innerHTML = `o maior valor inormado foi ${vet.max()}`;
            calc.innerHTML = `o menor valor informado foi ${vet.min()}`;
            calc.innerHTML = `somando todos os valores temos ${sum}`;
            calc.innerHTML = ``;
    });
})