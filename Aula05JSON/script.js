function lerJSON(){
    var req = new XMLHttpRequest()
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var objJSON = JSON.parse( this.responseText )
            var txt = "Nome: " + objJSON.nome + "<br>"
            txt += "Idade : " + objJSON.idade + "<br>"
            txt += "Formaçoes : "
            objJSON.formacoes.forEach( formacao => {
                txt += formacao + " - "
            })
            if( objJSON.casado){
                txt += "<br>Cônjuge: " + objJSON.conjuge.nome
            }
            txt +="<br>Filhos: "
            objJSON.filhos.forEach( filho => {
                txt += "<br>" + filho.nome + "Idade" + filho.idade
            })
            document.getElementById("divJSON").innerHTML = txt
        }
    }

    req.open("GET", "dados.json" , true)
    req.send()
}