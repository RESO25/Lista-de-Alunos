function CalcularMedia(nota_01, nota_02)
{
    nota_01 = parseFloat(nota_01.replace(",","."));
    nota_02 = parseFloat(nota_02.replace(",","."));
    return (nota_01 + nota_02) / 2;
}

function AdequarFormato(media_01)
{
    return media_01.toFixed(1).toString().replace(".",",");
}

function AprovarAluno(media_01)
{   
    if (media_01 >= 5)
    {
        return "APROVADO";
    }
    else 
    {
        return "REPROVADO";
    }
}

function MudarCor(media_01)
{
    if (media_01 >= 5)
    {
       return "aprovado";
    }
    else 
    {
        return "reprovado";
    }
}

function Adicionar() 
{
    
    var nome    = document.querySelector("#addNome").value;
    var RM      = document.querySelector("#addRM").value;
    var nota01  = document.querySelector("#add01").value;
    var nota02  = document.querySelector("#add02").value;

    var nome1   = document.querySelector("#addNome");
    var RM1     = document.querySelector("#addRM");
    var nota011 = document.querySelector("#add01");
    var nota021 = document.querySelector("#add02");

    var media = (parseFloat(nota01) + parseFloat(nota02))/2;

    var addColuna = document.getElementById("addColuna"); 

        if (RM == "" || nome == "" || nota01 == "" || nota02 == "")
    { 
        document.querySelector("#confirm").innerHTML = "<h4>Insira informações válidas.</h4>";
    }
    else
    {
        nome1.value = "";
        RM1.value = "";
        nota011.value = "";
        nota021.value = "";

        document.querySelector("#confirm").innerHTML = "";
        if (media>=5)
        {
            var situacao = "APROVADO";
        }
        else 
        {
            var situacao = "REPROVADO"
        }
        if (media>=5)
        {
            addColuna.innerHTML+= `
            <tr class="aluno">
            <td class="info-rm">${RM}</td>
            <td class="info-nome">${nome}</td>
            <td contenteditable="true" class="info-nota01">${nota01}</td>
            <td contenteditable="true" class="info-nota02">${nota02}</td>
            <td class="info-media">${media}</td>
            <td class="info-situacao aprovado">${situacao}</td>
            </tr> `
        }
        else 
        {
            addColuna.innerHTML+= `
            <tr>
            <td class="info-rm">${RM}</td>
            <td class="info-nome">${nome}</td>
            <td contenteditable="true" class="info-nota01">${nota01}</td>
            <td contenteditable="true" class="info-nota02">${nota02}</td>
            <td class="info-media">${media}</td>
            <td class="info-situacao reprovado">${situacao}</td>
            </tr> `
        }

        var telaBloqueio = document.querySelector(".bloqueio");
        var telaAlunoNovo = document.querySelector(".adds");

        telaBloqueio.classList.add("escondido");
        telaAlunoNovo.classList.add("escondido");
    }
}