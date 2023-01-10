let amigo = {
    nome: "josé",
    idade: 35,
    peso: 85.4,
    engordar(param = 0) {
        console.log("engordou");
        this.peso += param;
    }
}
amigo.engordar(2)
console.log(typeof amigo);
console.log(amigo);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);