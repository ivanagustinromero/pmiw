class juego{
  constructor(){
    this.vida = 30; //segundos que aguantar
    this.segundos = 0;
    this.ultsegundos = 0;
    
  
  this.crearperso();
  }
  
  dibujar(){
    this.personaje.dibujar();
    
  }
  
  //iniciar(){
 // }
 ganar(){
   if(millis() - this.ultsegundos >=100)
   this.segundos++;
   this.ultsegundos = millis();
   
 
 }
 
 if (frameCount % 60 === 0 && this.vida > 0) { 
   this.vida--;
   
 }
 
 if(this.vida <=0){
   this.vida = 0;
 }


 crearperso(){
    this.personaje= new personaje(width/2, 320);
 
 }
 tecladeFlechas(keyCode){
   this.personaje.tecladeFlechas(keyCode);
 
 }
}
