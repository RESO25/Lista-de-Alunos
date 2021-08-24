function CalcularMedia(nota_01, nota_02)
{
    nota_01 = parseFloat(nota_01.replace(",","."));
    nota_02 = parseFloat(nota_02.replace(",","."));
    return (nota_01 + nota_02) / 2;
}

function AdequarFormato(media_01)
{
    return FormatarComVirgula( media_01.toFixed(1) );
}

function FormatarComVirgula(nota){
    return nota.toString().replace(".",",");
}

function CalcAprovacao(media){

    if (media > 5){
        return "APROVADO"
    }
    else{
        return "REPROVADO"
    }

}

function AprovarAluno(media_01, linha)
{   
    var local = linha.querySelector(".info-situacao");

    if (media_01 >= 5)
    {
        
        local.textContent = "APROVADO";
        linha.classList.add("aprovado")
    }
    else 
    {
        local.textContent = "REPROVADO";
        linha.classList.add("reprovado")
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

function colorirLinhas() {

    var linhaAluno = document.querySelectorAll(".aluno");

    for (var i = 0; i < linhaAluno.length; i++){
        
        if ( (i+1) % 2 == 0 ){

            linhaAluno[i].classList.add("linhaImpar");

        }
    }
}