var btnNovo = document.querySelector("#btnNovo");
var telaBloqueio = document.querySelector(".bloqueio");
var telaAlunoNovo = document.querySelector(".adds");

btnNovo.addEventListener("click", exibirTelaAlunoNovo);

function exibirTelaAlunoNovo(){

    telaBloqueio.classList.remove("escondido");
    telaAlunoNovo.classList.remove("escondido");

}

var btnCancelar = document.querySelector("#btnCancelar");

btnCancelar.addEventListener("click", fecharTelaAlunoNovo);
telaBloqueio.addEventListener("click", fecharTelaAlunoNovo);

function fecharTelaAlunoNovo(){

    telaBloqueio.classList.add("escondido");
    telaAlunoNovo.classList.add("escondido");

    var nome1   = document.querySelector("#addNome");
    var RM1     = document.querySelector("#addRM");
    var nota011 = document.querySelector("#add01");
    var nota021 = document.querySelector("#add02");

    nome1.value = "";
    RM1.value = "";
    nota011.value = "";
    nota021.value = "";

    document.querySelector("#confirm").innerHTML = "";

}