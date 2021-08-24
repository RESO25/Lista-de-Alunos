
var btnNovo       = document.querySelector("#btnNovo");
var telaBloqueio  = document.querySelector(".bloqueio");
var telaAlunoNovo = document.querySelector(".adds");
var formulario    = document.querySelector(".adds");
var tabela        = document.querySelector("#addColuna");
var msg           = document.querySelector("#msg");

btnNovo.addEventListener("click", exibirTelaAlunoNovo);

function exibirTelaAlunoNovo(){

    telaBloqueio.classList.remove("escondido");
    telaAlunoNovo.classList.remove("escondido");

}

var btnCancelar = document.querySelector("#btnCancelar");
var btnAdicionar = document.querySelector("#btnAdicionar");

btnCancelar.addEventListener("click", fecharTelaAlunoNovo);
telaBloqueio.addEventListener("click", fecharTelaAlunoNovo);
btnAdicionar.addEventListener("click", adicionarNovoAluno);

function fecharTelaAlunoNovo(){

    telaBloqueio.classList.add("escondido");
    telaAlunoNovo.classList.add("escondido");

    var nome   = formulario.querySelector("#txtNome");
    var rm     = formulario.querySelector("#txtRM");
    var nota01 = formulario.querySelector("#txtNota01");
    var nota02 = formulario.querySelector("#txtNota02");

    nome.value      = "";
    rm.value        = "";
    nota01.value    = "";
    nota02.value    = "";
    msg.textContent = "";

}

function adicionarNovoAluno(){

    var nome   = document.querySelector("#txtNome").value;
    var rm     = document.querySelector("#txtRM").value;
    var nota01 = document.querySelector("#txtNota01").value;
    var nota02 = document.querySelector("#txtNota02").value;

    if (nome == ""){
        msg.textContent = "Nome inválido";
        return;
    }
    
    if (rm == ""){
        msg.textContent = "RM inválido";
        return;
    }

    if (nota01 == ""){
        msg.textContent = "Nota 1 não pode ser em branco";
        return;
    }
    nota01 = parseFloat(nota01);
    if (nota01<0 || nota01>10){
        msg.textContent = "Nota 1 deve ser entre 0 e 10";
        return;
    }

    if (nota02 == ""){
        msg.textContent = "Nota 2 não pode ser em branco";
        return;
    }
    nota02 = parseFloat(nota02);
    if (nota02<0 || nota02>10){
        msg.textContent = "Nota 2 deve ser entre 0 e 10";
        return;
    }

    var mediaAlunoNovo = CalcularMedia(FormatarComVirgula(nota01), FormatarComVirgula(nota02));
    var situacaoAlunoNovo = CalcAprovacao(mediaAlunoNovo);

    var novaLinha = document.createElement("tr");
    novaLinha.classList.add("aluno");

    var celulaRM = document.createElement("td");
    celulaRM.classList.add("info-rm");
    celulaRM.textContent = rm;

    var celulaNome = document.createElement("td");
    celulaNome.classList.add("info-nome");
    celulaNome.textContent = nome;
        
    var celulaNota01 = document.createElement("td");
    celulaNota01.classList.add("info-nota01");
    celulaNota01.textContent = FormatarComVirgula(nota01.toFixed(1));

    var celulaNota02 = document.createElement("td");
    celulaNota02.classList.add("info-nota02");
    celulaNota02.textContent = FormatarComVirgula(nota02.toFixed(1));
            
    var celulaMedia = document.createElement("td");
    celulaMedia.classList.add("info-media");
    celulaMedia.textContent = AdequarFormato(mediaAlunoNovo);

    var celulaSituacao = document.createElement("td");
    celulaSituacao.classList.add("info-situacao");
    celulaSituacao.textContent = situacaoAlunoNovo;

    novaLinha.appendChild(celulaRM);
    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaNota01);
    novaLinha.appendChild(celulaNota02);
    novaLinha.appendChild(celulaMedia);
    novaLinha.appendChild(celulaSituacao);

    AprovarAluno(mediaAlunoNovo, novaLinha); 

    tabela.appendChild(novaLinha);

    fecharTelaAlunoNovo();
    
    colorirLinhas();
}

