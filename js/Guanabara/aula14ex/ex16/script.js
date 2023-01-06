var counter = document.querySelector("#btnGo");
counter.addEventListener("click", () => {
    var numberIni = document.querySelector("#valStart");
    numberIni = Number(numberIni.value);
    var numberEnd = document.querySelector("#valEnd");
    numberEnd = Number(numberEnd.value);
    var numberCount = document.querySelector("#valProg");
    numberCount = Number(numberCount.value);
    var result = document.querySelector("#res");

    if (numberIni === null) {
        result.innerHTML = "Impossivel contar";
    }
    else if (numberCount === 0) {
        alert("Erro, 0 não pode ser usado como contagem. o número utilizado no lugar de 0 será o 1");
        numberCount = 1;
    }
    else {
        for (numberIni; numberIni <= numberEnd; numberCount+=numberCount) 
        {
            result += result.innerHTML = `${numberIni}`
        }
    }
});