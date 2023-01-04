var age = 20
if (age < 16) {
    console.log("não vota");
}
else if (age < 18 || age > 65) {
    console.log("vota opcionalmente");    
}
else {
    console.log("vota");
}