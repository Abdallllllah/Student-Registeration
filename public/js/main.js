let id;
let name;
function listener(event){
    event.preventDefault(); // prevent the form from submitting

     id = parseInt(document.getElementById("studentId").value);
     name = document.getElementById("studentName").value;

    addstudent();
    fetchStudents()

}
async function addstudent(){
    var x = {"id": id, "name" : name}
    
    var url = "http://localhost:3000/students"

    const y = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(x)
    })
    if(y.ok){
        console.log("doone")
    }


}
async function fetchStudents() {
    try{
    var x = await fetch("http://localhost:3000/students")
    var data = await x.json()
}
    catch(error){
        console.log(   `the error is , ${error}`)
    }

    populate(data)
}

function populate(data){
    var table = document.getElementById("content");
    table.innerHTML= "<tr><th>Student ID</th> <th>Student Name</th><tr/>"

    data.forEach(element => {
        var row = document.createElement("tr")
        var x = document.createElement("td")
        var y = document.createElement("td")

         x.textContent = element.id;
        y.textContent = element.name;
        row.appendChild(x)
        row.appendChild(y)

        table.appendChild(row) 
    });}
