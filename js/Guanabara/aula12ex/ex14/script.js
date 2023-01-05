function toCharge() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');    
    var date = new Date();
    var hour = date.getHours();
    msg.innerHTML = `Agora são ${hour} horas.`;
    if (hour >= 0 && hour <= 12) {
        img.src = 'manhã.png';
        document.body.style.backgroundColor = '#e2cd9f';
    }
    else if (hour >= 12 && hour <= 18) {
        img.src = 'tarde.jpg';
        document.body.style.backgroundColor = '#b9846f';
    }
    else {
        img.src = 'noite.png';
        document.body.style.backgroundColor = '#515154';
    }
}
