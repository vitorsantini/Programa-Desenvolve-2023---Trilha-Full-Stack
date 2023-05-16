const cliente = {

    nome: "Joao",
    idade: 24,
    email: "joao@forma.com",
    telefone: ["11555554444", "111112222"]
};

cliente.endereco = {
    rua: "Rua 1",
    numero: 504,
    apartamento: true,
    complemento: "ap 32",
}

console.log(cliente);
console.log(cliente.endereco);
console.log(cliente.endereco.complemento);