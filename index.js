let array1 = [];

function addNum() {
  let input = document.getElementById("input").value;
  array1.push(input);

  document.getElementById("display").innerHTML = array1;
  
  document.getElementById("input").value = "";
}

let array2 = [];

function addObj() {
  let person = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
  };

  array2.push(person);

//   document.getElementById("display1").innerHTML += Object.values(Value);

//   console.log(array2);

  let table = document.querySelector(".tableInfo");
  table.innerHTML = "";
  array2.forEach((data) => {
    table.innerHTML += 
    ` 
    <tr>
    <td>${data.name}</td>
    <td>${data.surname}</td> 
    </tr>
    `;

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
});
}

function clrArray() {
    document.getElementById("display").innerHTML = "";
}

function clrNames() {
    document.querySelector(".tableInfo").innerHTML = "";
}