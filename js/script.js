
var aluno   = document.querySelectorAll(".aluno");
    

for (var indice=0; indice<aluno.length; indice++)
{
    var nota_01  = aluno[indice].querySelector(".info-nota01").textContent;
    var nota_02  = aluno[indice].querySelector(".info-nota02").textContent;
    var localSituacao = aluno[indice].querySelector(".info-situacao");
    var media_01 = CalcularMedia(nota_01, nota_02);

    media_011 = AdequarFormato(media_01);

    aluno[indice].querySelector(".info-media").textContent = media_011;

    localSituacao.textContent = AprovarAluno(media_01);
    localSituacao.classList.add(MudarCor(media_01));    
}

