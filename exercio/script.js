function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var agora = new Date()
var hora = agora.getHours()

msg.innerHTML = `Agora São ${hora} Horas `
if(hora >= 0 && hora < 12 ){
    //bom dia
    img.src = 'fotomanha.png'
    document.body.style.background = "#9da1ac"
   
}else if (hora >= 12 && hora < 18){
    // boa tarde
    img.src = 'fototarde.jpg'
    document.body.style.background = "rgb(253, 145, 63)"
}else{
    //boa noite
    img.src = 'fotonoite.jpg'
    document.body.style.background = "#182325"
}
}
