function fetch(){

    console.log("fetch function called....")
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

    xhr.onload = function(){    
        
        console.log("onload....")
        console.log(this.responseText);
    }
    xhr.send();

}

function add(){

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/users', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    var emp = {
        name:"Raj",
        job:"Software Engineer"
    }
    xhr.onload = function(){

        console.log(this.responseText);
    }

    xhr.send(emp);


}