multiplicationTable = () => {
    let num = document.getElementById("txtn");
    let multTab = document.getElementById("selmt");
    
    if (num.value.length == 0) {
        alert("por favor, digite um número");
    }
    else {
        num = Number(num.value);
        let count = 0;
        multTab.innerHTML = "";
        while (count <= 10) {
            let item = document.createElement('option');
            item.text = `${num} x ${count} = ${num*count}`;
            item.value = `multTab${count}`;
            multTab.appendChild(item);
            count++;
        } 
    }

}