const cliente = {

    nome: "Joao",
    idade: 24,
    email: "joao@forma.com",
    telefone: ["11555554444", "111112222"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            
            console.log("Saldo insuficiente");

        } else {

            this.saldo -= valor;
            console.log (`Pagamento realizado. Novo saldo: ${this.saldo}`)

        }
    }
};

cliente.efetuaPagamento(10);