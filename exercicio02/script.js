function verificar(){
   var data = new Date()
   var ano = data.getFullYear() /* ANO ATUAL  */
    var tano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('foto')
    if(tano.value.length == 0 || tano.value > ano){
        window.alert ('Verifique os dados e Tente Novamente!')
    }else  {
        var fsex = window.document.getElementsByName('redsex')
        var idade = ano - Number(tano.value)
           
      } 
      var genero = ''
      
     if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade <= 10 ){
          //criança
         img.src = 'foto-bebe-m.png'    
         genero = 'Menino'   
         document.body.style.background = '#26444c'
        }
        else if ( idade <= 21){
          // adolescente
          img.src = 'foto-jovem-m.png'
          document.body.style.background ="#938880"
        }
        else if( idade <= 50){
          // adulto
          img.src = " foto-adulto-m.png"
        }
         else{
          // idoso
          img.src = "foto-idoso-m.png"
          genero = 'Idoso'
         }
        
      }
      else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade <= 10){
          img.src ="foto-bebe-f.png"
          genero = 'Menina'
        }
        else if(idade <= 21){
          img.src = 'foto-jovem-f.png'
         
        }
        else if (idade <= 50){
          img.src = 'foto-adulto-f.png'
        }
        else{
          img.src = 'foto-idoso-f.png'
        }
        
      }
      img.style.ali
      res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      res.style.textAlign = 'center'
    }
   


    