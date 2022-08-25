function verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
      window.alert('Verifique os dados e tente novamente')  
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var genero =''
        var img= document.createElement('img')
        img.setAttribute('id', 'img')
        if(fsex[0].checked) { 
            genero= 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'hcrianca.jpg')
                //criança
            }else if( idade < 21){
                img.setAttribute('src', 'hjovem.jpg')
                //jovem
            }else if(idade < 60){
                img.setAttribute('src', 'hhomem.jpg')
                //adulto
            }else{
                img.setAttribute('src', 'hidoso.jpg')
                //idoso
            }
        }else{
            genero='Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'mcrianca.jpg')
                //criança
            }else if( idade < 21){
                img.setAttribute('src', 'mjovem.jpg')
                //jovem
            }else if(idade < 60){
                img.setAttribute('src', 'mmulher.jpg')
                //adulto
            }else{
                img.setAttribute('src', 'midoso.jpg')
                //idoso
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos!` 
        res.appendChild(img)  
    }
}   