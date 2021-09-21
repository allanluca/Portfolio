function dados(name , callback) {
    let section = document.getElementById(name);

    section.innerHTML = '<h1>' + data[name].titulo + '</h1>'
    section.innerHTML += '<p>' + data[name].resumo + '</p>'
    
    data[name].itens.forEach(element => {
        let article = '<article>' 
        article += '<h4>' + element.titulo + '</h4>'
        article += '<p>' + element.descricao + '</p>'
        article += '</article>'
        section.innerHTML += article
    })

    if(callback)
        callback(name)
    
}

function loadButton(name){
    var button = document.createElement('button')
    button.innerHTML = "Novo projeto"

    button.onclick = function(){
        var painel = document.getElementById("painel")
        painel.classList.toggle('aside-next')
    }

    let section = document.getElementById(name)
    section.appendChild(button)
}