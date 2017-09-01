var ref = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_.0123456789";
var save = new function(){
  for(i = 0;i<ref.length();i++){
    console.log(ref.substring(i,i+1))
    var id = document.getElementById(ref.substring(i,i+1));
  }
}
