var now = new Date()
var hour = now.getHours()
console.log(`são ${hour} horas`);
if (hour < 6) {
    console.log("boa madrugada");
}
else if (hour <= 12) {
    console.log("bom dia");
}
else if (hour <= 18) {
    console.log("boa tarde");
}
else {
    console.log("boa noite");
}