var ref = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_.,!?0123456789";
var storage = localStorage;

//This function populates the input fields with whatever is saved in local 
//storage 
var load = function(){
  //By default the storage object has 4 contents, I'm not sure why. If the
  //storage object isn't empty, loop through storage and populate input fields
  if(storage.length !== 4 ){
    for(i = 0;i<ref.length;i++){
      var id = ref.substring(i,i+1);
      var element = document.getElementById(id);
      element.value=storage[id];
    }
  //Otherwise, populate storage with the default values and run the load 
  //function again
  }else{
    for(i = 0;i<ref.length;i++){
      var id = ref.substring(i,i+1);
      localStorage.setItem(id, id);
    }
    load();
  }
};

//Save the current contents of the input boxes to local storage
var save = function(){
  for(i = 0;i<ref.length;i++){
    var id = ref.substring(i,i+1);
    localStorage.setItem(id, document.getElementById(id).value);
  }
};

//Encode wahtever is in the "input" div based on the rules in the input boxes
var translate = function(){
  //Save the current contents of the table
  save();
  //Bring in the contents of the input as a variable
  var input = document.getElementById("input");
  input = input.value;
  input = input.toUpperCase();
  //Bring in output as a variable
  var output = document.getElementById("output");
  output.value = "";
  //loop through input and translate char by char
  for(i=0;i<input.length;i++){
    var id = input.substring(i, i+1);
    //Spaces are stored under _
    if (id === " "){
      output.value += localStorage.getItem("_");
    //If it's not in storage, just use the character itself
    }else if (localStorage.getItem(id) === null){
      output.value += id;
    }else{
      output.value += localStorage.getItem(id);
    }
  }
};

//Inport a string of text as a key
var importFunc = function(){
  var key = prompt("Enter Key");
  for(i = 0;i<key.length;i++){
    var id = ref.substring(i,i+1);
    localStorage.setItem(id, key.substring(i,i+1));
  }
  load();
};

//Export key as a string of text
var exportFunc = function(){
  var key = "";
  for(i = 0;i<ref.length;i++){
    var id = ref.substring(i,i+1);
    key += localStorage.getItem(id) ;
    console.log(key);
  }
  prompt("Copy your key below:", key);
};

//Run the load function on page load
load();
document.getElementById("input").addEventListener("keyup", function(event) {
    translate();
});
