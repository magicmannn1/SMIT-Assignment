// 1.

// function addNumber(num) {
//     return function(x) {
//       return num + x;
//     };
//   }
//   const addFive = addNumber(5);
//   console.log(addFive(5)); 
//   console.log(addFive(5)); 

// 2.

// function searchArray(array, value) {
//     if (array.length === 0) {
//       return false; 
//     } else if (array[0] === value) {
//       return true; 
//     } else {
//       return searchArray(array.slice(1), value); 
//     }
//   }
//   const Array = [1, 2, 3, 4, 5];
//   console.log(searchArray(Array, 3)); 
//   console.log(searchArray(Array, 6)); 

// 3.

// function addParagraph(text) {
//     const newParagraph = document.createElement("p"); 
//     newParagraph.textContent = text; 
//     document.body.appendChild(newParagraph);
//   }
//   addParagraph("Hello, world!");

// 4. 

// let getul=document.getElementById("ul")
// function addListItem(listText){
//     let li = document.createElement("li");
//    let node= document.createTextNode(listText);
//    li.appendChild(node);
//    ul.appendChild(li);
// }

// 5.

// function changeBackgroundColor(element, color) {
//     element.style.changeBackgroundColor = color;
//   }

//   const div = document.querySelector('div'); 
// changeBackgroundColor(div, 'red'); 

// 6.

// function saveToLocalStorage(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
//   }
//   const obj = { name: "Ali", age:17 }; 
//   saveToLocalStorage('myObj', obj); 
    
// 7.

// function getObjectFromLocalStorage(key) {
//     const item = localStorage.getItem(key); 
//     return JSON.parse(item); 
//   }
//   const myObject = getObjectFromLocalStorage("my-key"); 
//   console.log(myObject); 
  

// 8.

// let prestudents = localStorage.getItem("students")
// let students = prestudents ? JSON.parse(prestudents): [];
// function datasudents () {
// let std = {name: prompt("Enter name"),
// fatherName :prompt("Enter Father Name"),
// rolNo : +prompt("Enter rolno"),
// className: prompt("Enter Class Name")
//     }
//     students.push(std);
//     console.log(students);
//     let stringfiy = JSON.stringify(students);
//     localStorage.setItem("students", stringfiy);
