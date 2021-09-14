
var btnBuscar = document.getElementById("btnBuscar");

btnBuscar.addEventListener('click', buscarAluno);
var nomes = document.querySelectorAll(".info-nome");
function buscarAluno(){

    var txtFiltro = document.querySelector("#txtFiltro").value.toUpperCase();

    for (i=0; i<nomes.length; i++){
        
        if (txtFiltro != ""){    
            nomes[i].parentNode.classList.remove("sumido")
            if (txtFiltro != nomes[i].textContent.substring(0,txtFiltro.length)){
                nomes[i].parentNode.classList.add("sumido")
            }
        }
        else{
            nomes[i].parentNode.classList.remove("sumido")
        }
    }
}