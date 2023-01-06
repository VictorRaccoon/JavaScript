function verification() {
    var date = new Date();
    var year = date.getFullYear();
    var formYear = document.getElementById("txtyear");
    var result = document.querySelector("#res");
    if (formYear.value.length == 0 || Number(formYear.value) > year) {
        alert("[FATAL ERROR]: verifique os dados e tente novamente");
    }
    else {
        var formSex = document.getElementsByName("radsex");
        var age = year - Number(formYear.value);
        var gender = "";
        var img = document.createElement("img");
        img.setAttribute("id", "photo");
        if (formSex[0].checked) {
            gender = "Homem";
            if (age >= 0 && age < 10) {
                img.setAttribute("src", "bebeM.png");
            }
            else if (age < 21) {
                img.setAttribute("src", "jovemM.png");
            }
            else if (age < 50) {
                img.setAttribute("src", "adultoM.png");
            }
            else { 
                img.setAttribute("src", "idosoM.png");
            }
        }
        else if (formSex[1].checked) {
            gender = "Mulher";
            if (age >= 0 && age < 10) {
                img.setAttribute("src", "bebeF.png");
            }
            else if (age < 21) {
                img.setAttribute("src", "jovemF.png");
            }
            else if (age < 50) {
                img.setAttribute("src", "adultoF.png");
            }
            else { 
                img.setAttribute("src", "idosoF.png");
            }
        }
        result.style.textAlign = "center";
        result.innerHTML = `${gender} de ${age} anos de idade`;
        result.appendChild(img);
    }
}