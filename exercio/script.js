function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var agora = new Date()
var hora = agora.getHours() 
msg.innerHTML = `Agora São ${hora} Horas `

if(hora > 6 && hora < 12 ) {
    img.src = 'denoite.png'
}
else if(hora >= 12 && hora < 18){
    img.src = "detarde.png"
}else{
    img.src = 'demanha.png'
}
}