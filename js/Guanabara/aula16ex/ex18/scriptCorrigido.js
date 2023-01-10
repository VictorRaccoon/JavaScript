let num = document.querySelector("#fnum");
let list = document.querySelector("#flist");
let res = document.querySelector("#res");
let values = [];

const isNumb = numb => Number(numb) >= 1 && Number(n) <= 100 ? true : false;

const inListt = (numb, list) => list.indexOf(Number(numb)) != -1 ? true : false;

const add = () => {
    if (isNumb(num.value) && !inListt(num.value, values)) {
        values.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        list.appendChild(item);
        res.innerHTML = "";
    } 
    else {
        alert("valor inválido ou ja encontrado na lista"); 
    }
    num.value = "";
    num.focus();
}

const finish = () => {
    if (values.length == 0) {
        alert("Adicione valores antes de finalizar");
    }
    else {
        let numbOfElement = values.length;
        let bigger = values[0];
        let smaller = values[0];
        let sum = 0;
        let avarage = 0;
        values.forEach(element => {
            sum += element;
            if (element > bigger) {
                bigger = element;
            }
            if (element < bigger) {
                smaller = element;
            }
        });

        avarage = sum / numbOfElement;
        res.innerHTML = "";
        res.innerHTML += `<p>ao todo temos ${numbOfElement} números cadastrados</p>`;
        res.innerHTML += `<p>o maior valor informado foi ${bigger}</p>`;
        res.innerHTML += `<p>o menor valor informado foi ${smaller}</p>`;
        res.innerHTML += `<p>somando todos os valores temos ${sum}</p>`;
        res.innerHTML += `<p>a média dos valores digitados é ${avarage}</p>`;
    }
}