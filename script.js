
let atividades = []
let cont = 0

function adicionarTarefa(){
    cont ++

    let texto = document.getElementById("inputt")

    let obj = {
        id: cont,
        nome: texto.value.trim(),
        finalizado: false
    }

    atividades.push(obj)
    let lista = document.getElementById("lista")
    let li = document.createElement("li")

    li.innerHTML = ` 
                    <div id= "${atividades[atividades.length - 1].id}" class="actividades">
                        <p>${atividades[atividades.length - 1].nome}</p>
                        <input type="checkbox" id="inputCheck" onclick="tarefaFinalizada(${atividades[atividades.length - 1].id})">
                        <input type="button" value="X" id="inputButton" onclick="eliminarTarefa(${atividades[atividades.length - 1].id})">
                    </div>`

    console.log(atividades)

    lista.appendChild(li)
    texto.value = ""
    texto.focus()

}

function eliminarTarefa(id){
    for ( let i = 0; i < atividades.length; i++){
        if(atividades[i].id == id){
            atividades[i].finalizado = true
            console.log(atividades[i])
            atividades.splice(i, 1)
        }
    }

    let eliminarAtividade = document.getElementById(id)

    eliminarAtividade.style.display = "none"

}

function tarefaFinalizada(id){

    let inputCheck = document.getElementById("inputCheck")

    // for ( let i = 0; i < atividades.length; i++){
    //     if(atividades[i].id == id){
    //         atividades[i].finalizado = true
    //         alert(atividades[i])
    //         inputCheck.innerHTML= "<mark>"+inputCheck.value+"</mark>"
    //         break
    //     }

    //     else{
    //         alert("erroooooo")
    //     }
    // }
}