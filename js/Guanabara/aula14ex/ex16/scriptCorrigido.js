function counter() {
    let ini = document.querySelector("#valStart");
    let end = document.querySelector("#valEnd");
    let step = document.querySelector("#valProg");
    let result = document.querySelector("#res");

    if (ini.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        result.innerHTML = "Impossivel Contar";
        alert("[FATAL ERROR] campos vazios");
    }
    else {
        result.innerHTML = "Contando: <br/>";
        let i = Number(ini.value);
        let f = Number(end.value);
        let p = Number(step.value);

        if (p <= 0) {
            alert("passo invalido");
            p = 1;
        }

        if (i < f) {
            //contagem crescente
            for (let count = i; count < f; count += p) {
                result.innerHTML += ` ${count} \u{1f449}`;
            }
        }
        else {
            //contagem decrescente
            for (let count = i; count >= f; count -= p) {
                result.innerHTML += ` ${count} \u{1f449}`;
            }
        }
        result.innerHTML += `\u{1f3c1}`;
    }
    
}