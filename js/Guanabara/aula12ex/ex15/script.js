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
                img.setAttribute("src", "bebeM.jpg");
            }
            else if (age < 21) {
                img.setAttribute("src", "jovemM.jpg");
            }
            else if (age < 50) {
                img.setAttribute("src", "adultoM.jpg");
            }
            else { 
                img.setAttribute("src", "idosoM.jpg");
            }
        }
        else if (formSex[1].checked) {
            gender = "Mulher";
            if (age >= 0 && age < 10) {
                img.setAttribute("src", "bebeF.jpg");
            }
            else if (age < 21) {
                img.setAttribute("src", "jovemF.jpg");
            }
            else if (age < 50) {
                img.setAttribute("src", "adultoF.jpg");
            }
            else { 
                img.setAttribute("src", "idosoF.jpg");
            }
        }
        result.style.textAlign = "center";
        result.innerHTML = `${gender} de ${age} anos de idade`;
        result.appendChild(img);
    }
}