function gerarTicket() {
   const nomeRaw = document.getElementById("input-nome").value.trim();

if (nomeRaw.length < 3) {
    alert("O nome deve conter pelo menos 3 caracteres");
    return;
}

    //split para pegar primeiro e último nome
    const partes = nomeRaw.split(" ").filter(p => p !== "");
    let nomeFormatado = "";

    // data atual
    const dataAtual = new Date();
    const dataPrazo = new Date();

    //pegando urgência do select
    const urgencia = document.getElementById("urgencia").value;

    // define prazos
    let diasAdd = 0;

    if (urgencia === "alta") {
        diasAdd = 2;
    } else if (urgencia === "media") {
        diasAdd = 7;
    } else {
        diasAdd = 10;
    }

    // aplica o prazo na data
    dataPrazo.setDate(dataAtual.getDate() + diasAdd);

    //mostra os valores na tela
    document.getElementById("out-nome").innerText = nomeFormatado;
    document.getElementById("out-data").innerText = dataAtual.toLocaleDateString('pt-BR');
    document.getElementById("out-prazo").innerText = dataPrazo.toLocaleDateString('pt-BR');

    document.getElementById("ticket-resultado").style.display = "block";
}