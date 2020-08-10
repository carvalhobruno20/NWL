//Procurar o botão
document.querySelector("#add-time")

//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField(){ 
    //Duplicar os campo
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //Pegar os Campos
    const fields = newFieldContainer.querySelectorAll('input')
    
    //Para cada campo, limpar
    fields.forEach(function(field){
        //Pega o field do momento e limpa ele
        field.value = ""
    });

    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}