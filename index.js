const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
 let passwordCl= document.getElementById("password")
 let passwordEl= document.getElementById("password1")
 

 function generateP(){
    for(let i=1; i <12; i++){
    let randomPassword= Math.floor(Math.random()*characters.length)
    
  
  passwordCl.textContent +=  characters[randomPassword]
 }
 
}
function generatePP(){
   for(let i=1; i <12; i++){
      let passwordRandom= Math.floor(Math.random()*characters.length)
      passwordEl.textContent += characters[passwordRandom]
}
}
function generate(){

   passwordEl.textContent = 0
  passwordCl.textContent=0

  generateP()
  generatePP()
   
  
}