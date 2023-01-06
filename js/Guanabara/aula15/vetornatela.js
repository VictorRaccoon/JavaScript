let valores = [8, 1, 7, 4, 2, 9];
valores.sort();

console.log(valores[0]);

for (let index = 0; index < valores.length; index++) {
    console.log(`a Posição ${index} possui o valor ${valores[index]}`);
}console.log(`\n`);

for (let i in valores) {
    console.log(`a Posição ${i} possui o valor ${valores[i]}`);
}console.log(`\n`);

valores.forEach((item, i) => {
    console.log(`a Posição ${i} possui o valor ${item}`);
});