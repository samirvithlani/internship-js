console.log("basic.js file load....")

document.getElementById("text").innerHTML = "Hello";

//var const let
var a = 10
var b = 20
const c = a + b
console.log(c)


//JSON

var color ={

    id:"red",
    code:"#101",
    status:false,
    value:10

}

var student = [

    {
        name:"raj",
        age:20,
        marks:150
    },
    {
        name:"parth",
        age:22,
        marks:250
    },
    {
        name:"Akshay",
        age:24,
        marks:50
    }

]

console.log(color.code)
console.log(student[0].name)

for(var i=0;i<student.length;i++){

    console.log(student[i].name)
}

function add(a,b){

    return a+b
}

function sub(){

    let a = 10
    let b = 20
    console.log(a-b)
}


var x = add(10,20)
console.log(x)
sub()









