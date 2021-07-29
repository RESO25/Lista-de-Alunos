
var reload = function refresh() {

    //Aluno 1
     
    var aluno_01 = document.querySelector("#aluno1");
  
    var nota_01 = aluno_01.querySelector(".info-nota01").textContent;

    var nota_02 = aluno_01.querySelector(".info-nota02").textContent;

    var media_01 = (parseFloat(nota_01) + parseFloat(nota_02))/2;

    aluno_01.querySelector(".info-media").textContent = media_01;
    if (media_01 >= 5)
    {
        aluno_01.querySelector(".info-situacao").textContent = "APROVADO";
        aluno_01.querySelector(".info-situacao").classList.add("aprovado");
        aluno_01.querySelector(".info-situacao").classList.remove("reprovado");
    }
    else 
    {
        aluno_01.querySelector(".info-situacao").textContent = "REPROVADO";
        aluno_01.querySelector(".info-situacao").classList.add("reprovado");
        aluno_01.querySelector(".info-situacao").classList.remove("aprovado");
    }
    
    //Aluno 2
    
    var aluno_02 = document.querySelector("#aluno2");

    var nota_11 = aluno_02.querySelector(".info-nota01").textContent;

    var nota_12 = aluno_02.querySelector(".info-nota02").textContent;
 
    var media_02 = (parseFloat(nota_11) + parseFloat(nota_12))/2;

    aluno_02.querySelector(".info-media").textContent = media_02;
    if (media_02 >= 5)
    {
        aluno_02.querySelector(".info-situacao").textContent = "APROVADO";
        aluno_02.querySelector(".info-situacao").classList.add("aprovado");
    }
    else 
    {
        aluno_02.querySelector(".info-situacao").textContent = "REPROVADO";
        aluno_02.querySelector(".info-situacao").classList.add("reprovado");
    }
    
    //Aluno 3
    
    var aluno_03 = document.querySelector("#aluno3");

    var nota_21 = aluno_03.querySelector(".info-nota01").textContent;

    var nota_22 = aluno_03.querySelector(".info-nota02").textContent;

    var media_03 = (parseFloat(nota_21) + parseFloat(nota_22))/2;

    aluno_03.querySelector(".info-media").textContent = media_03;
    if (media_03 >= 5)
    {
        aluno_03.querySelector(".info-situacao").textContent = "APROVADO";
        aluno_03.querySelector(".info-situacao").classList.add("aprovado");
    }
    else 
    {
        aluno_03.querySelector(".info-situacao").textContent = "REPROVADO";
        aluno_03.querySelector(".info-situacao").classList.add("reprovado");
    }
    
    //Aluno 4
    
    var aluno_04 = document.querySelector("#aluno4");

    var nota_31 = aluno_04.querySelector(".info-nota01").textContent;

    var nota_32 = aluno_04.querySelector(".info-nota02").textContent;

    var media_04 = (parseFloat(nota_31) + parseFloat(nota_32))/2;

    aluno_04.querySelector(".info-media").textContent = media_04;
    if (media_04 >= 5)
    {
        aluno_04.querySelector(".info-situacao").textContent = "APROVADO";
        aluno_04.querySelector('.info-situacao').classList.add("aprovado");
    
    }
    else 
    {
        aluno_04.querySelector(".info-situacao").textContent = "REPROVADO";
        aluno_04.querySelector('.info-situacao').classList.add("reprovado");
    }
    
    //Aluno 5
    
    var aluno_05 = document.querySelector("#aluno5");

    var nota_51 = aluno_05.querySelector(".info-nota01").textContent;
 
    var nota_52 = aluno_05.querySelector(".info-nota02").textContent;

    var media_05 = (parseFloat(nota_51) + parseFloat(nota_52))/2;

    aluno_05.querySelector(".info-media").textContent = media_05;
    if (media_05 >= 5)
    {
        aluno_05.querySelector(".info-situacao").textContent = "APROVADO";
        aluno_05.querySelector('.info-situacao').classList.add("aprovado");
    }
    else 
    {
        aluno_05.querySelector(".info-situacao").textContent = "REPROVADO";
        aluno_05.querySelector('.info-situacao').classList.add("reprovado");
    }
    
    //Aluno 6
    
    var aluno_06 = document.querySelector("#aluno6");

    var nota_61 = aluno_06.querySelector(".info-nota01").textContent;

    var nota_62 = aluno_06.querySelector(".info-nota02").textContent;

    var media_06 = (parseFloat(nota_61) + parseFloat(nota_62))/2;
 
    aluno_06.querySelector(".info-media").textContent = media_06;
    if (media_06 >= 5)
    {
        aluno_06.querySelector(".info-situacao").textContent = "APROVADO";
        aluno_06.querySelector('.info-situacao').classList.add("aprovado");
    }
    else 
    {
        aluno_06.querySelector(".info-situacao").textContent = "REPROVADO";
        aluno_06.querySelector('.info-situacao').classList.add("reprovado");
    }
    
    //Aluno 7
    
    var aluno_07 = document.querySelector("#aluno7");

    var nota_71 = aluno_07.querySelector(".info-nota01").textContent;

    var nota_72 = aluno_07.querySelector(".info-nota02").textContent;

    var media_07 = (parseFloat(nota_71) + parseFloat(nota_72))/2;

    aluno_07.querySelector(".info-media").textContent = media_07;
    if (media_07 >= 5)
    {
        aluno_07.querySelector(".info-situacao").textContent = "APROVADO";
        aluno_07.querySelector('.info-situacao').classList.add("aprovado");
    }
    else 
    {
        aluno_07.querySelector(".info-situacao").textContent = "REPROVADO";
        aluno_07.querySelector('.info-situacao').classList.add("reprovado");
    }
    
    //Aluno 8
    
    var aluno_08 = document.querySelector("#aluno8");

    var nota_81 = aluno_08.querySelector(".info-nota01").textContent;

    var nota_82 = aluno_08.querySelector(".info-nota02").textContent;

    var media_08 = (parseFloat(nota_81) + parseFloat(nota_82))/2;

    aluno_08.querySelector(".info-media").textContent = media_08;
    if (media_08 >= 5)
    {
        aluno_08.querySelector(".info-situacao").textContent = "APROVADO";
        aluno_08.querySelector('.info-situacao').classList.add("aprovado");
    }
    else 
    {
        aluno_08.querySelector(".info-situacao").textContent = "REPROVADO"
        aluno_08.querySelector('.info-situacao').classList.add("reprovado");
    }
    
    //Aluno 9
    
    var aluno_09 = document.querySelector("#aluno9");

    var nota_91 = aluno_09.querySelector(".info-nota01").textContent;

    var nota_92 = aluno_09.querySelector(".info-nota02").textContent;

    var media_09 = (parseFloat(nota_91) + parseFloat(nota_92))/2;

    aluno_09.querySelector(".info-media").textContent = media_09;
    if (media_09 >= 5)
    {
        aluno_09.querySelector(".info-situacao").textContent = "APROVADO"
        aluno_09.querySelector('.info-situacao').classList.add("aprovado");
    }
    else 
    {
        aluno_09.querySelector(".info-situacao").textContent = "REPROVADO"
        aluno_09.querySelector('.info-situacao').classList.add("reprovado");
    }
}

function Adicionar() 
{
    
    var nome = document.querySelector("#addNome").value;
    var RM = document.querySelector("#addRM").value;
    var nota01 = document.querySelector("#add01").value;
    var nota02 = document.querySelector("#add02").value;

    var nome1 = document.querySelector("#addNome");
    var RM1 = document.querySelector("#addRM");
    var nota011 = document.querySelector("#add01");
    var nota021 = document.querySelector("#add02");

    var media = (parseFloat(nota01) + parseFloat(nota02))/2;

    var addColuna = document.getElementById("addColuna"); 
    console.log(addColuna)

    if (nome == "")
    {
        document.querySelector("#confirm").innerHTML = "<h4>Insira informações válidas.</h4>";
    }
    else
    {

        if (RM == "")
        {
            document.querySelector("#confirm").innerHTML = "<h4>Insira informações válidas.</h4>";
        }
        else
        {
           
            if (nota01 == "")
            {
                document.querySelector("#confirm").innerHTML = "<h4>Insira informações válidas.</h4>"; 
            }
            else {

                if (nota02 == "")
                {
                    document.querySelector("#confirm").innerHTML = "<h4>Insira informações válidas.</h4>";
                }
                else
                {
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
                        <tr>
                            <td contenteditable="true" class="info-rm">${RM}</td>
                            <td class="info-nome">${nome}</td>
                            <td class="info-nota01">${nota01}</td>
                            <td class="info-nota02">${nota02}</td>
                            <td class="info-media">${media}</td>
                            <td class="info-situacao aprovado">${situacao}</td>
                        </tr> `
                    }
                    else 
                    {
                        addColuna.innerHTML+= `
                    <tr>
                        <td contenteditable="true" class="info-rm">${RM}</td>
                        <td class="info-nome">${nome}</td>
                        <td class="info-nota01">${nota01}</td>
                        <td class="info-nota02">${nota02}</td>
                        <td class="info-media">${media}</td>
                        <td class="info-situacao reprovado">${situacao}</td>
                    </tr> `
                    }
                }
            }
        }
    }

    nome1.value = "";
    RM1.value = "";
    nota011.value = "";
    nota021.value = "";

}