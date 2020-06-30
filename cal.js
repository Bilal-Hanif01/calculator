// function getname(){
//     var name =document.getElementById("name")
//     console.log(name.value)

//     name.value=" "

// }
function getnumber(num){
  
    var result=document.getElementById("result")

    result.value+=num;
}
function clearesult(num){
  
    var result=document.getElementById("result")

    result.value ="";
}
function getresult(){
  
    var result=document.getElementById("result")
    result.value=eval(result.value)
}