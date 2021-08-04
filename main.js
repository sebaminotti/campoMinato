var bombe = [];
var numeriGiocatore =[]
for(var i = bombe.length; i < 16 ; i++){
var bomba = Math.floor(Math.random()*(1,100)+1)
  if(!bombe.includes(bomba)){
    bombe.push(bomba)
  } else if( bombe.includes(bomba)){

    i--
  }
}

console.log(bombe);

do {
  var livello = prompt('facile / medio / difficile')
} while ((livello!='facile')&&(livello!='medio')&&(livello!='difficile'));



switch (livello) {
  case 'facile': livello = 5
      alert(`HAI SELEZIONATO LIVELLO FACILE : AVRAI 5 NUMERI DA INSERIRE CORRETTAMENTE PER VINCERE `)
    break;
  case 'medio': livello = 10
  alert(`HAI SELEZIONATO LIVELLO MEDIO : AVRAI 10 NUMERI DA INSERIRE CORRETTAMENTE PER VINCERE `)
    
    break;
  case 'difficile': livello = 30
  alert(`HAI SELEZIONATO LIVELLO DIFFICILE : AVRAI 30 NUMERI DA INSERIRE CORRETTAMENTE PER VINCERE `)
    break;

  default:
    break;
}





for(var i = numeriGiocatore.length;  i < livello; i ++){

  do {
    var numero = Number(prompt('inserisci i tuoi numeri '))
  } while ((numero < 1)||(numero > 100)||(isNaN(numero)));

  if(!numeriGiocatore.includes(numero)){
  
    if(bombe.includes(numero)){

      alert('HAI PRESO UNA BOMBA !! HAI PERSO 💣' + " " +  ' HAI INDOVINATO : ' + numeriGiocatore.length + ' numeri  e sono : ' + " " + numeriGiocatore)

         
      break
    } 

    numeriGiocatore.push(numero)

  } else {
      i--
    alert('numero gia inserito')
  }
}


if(numeriGiocatore.length == livello){

  setTimeout(() => {
    alert('HAI VINTOOOOOOO COMPLIMENTI HAI INDOVINATO TUTTI I NUMERI' + ` HAI INDOVINATO  ${numeriGiocatore.length} numeri : e sono :${numeriGiocatore}`)
      
      var reload = prompt('vuoi rigiocare ??')
       
      if(reload =='si'){
        location.reload()
      }
  }, 3000);
} else if( numeriGiocatore.length!=livello) {
  setTimeout(() => {
    alert('HAI PERSO RIGIOCHI??')
      
      var reload = prompt('vuoi rigiocare ??')
       
      if(reload =='si'){
        location.reload()
      }
  }, 3000);

}

