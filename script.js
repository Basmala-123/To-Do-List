let addBtn = document.querySelector(".add-btn");
let List = document.querySelector(".toDo-list");
let input = document.querySelector(".toDoInput");
// let filterOption=document.querySelector(".filter");

addBtn.addEventListener("click", addToList);
List.addEventListener("click", deleteCheck);
// filterOption.addEventListener('click',filter_toDo)
function addToList(event) {
    event.preventDefault();
    // prevent user to add empty value 
    if(input.value==""){
        alert("empty");
    }else{
 let toDoDiv = document.createElement("div");
  toDoDiv.classList.add("toDo-div");
  //create List of To Do
  let toDoItem = document.createElement("li");
  toDoItem.innerHTML = input.value;
  toDoDiv.appendChild(toDoItem);
//check button
  let checkedBtn = document.createElement("button");
  checkedBtn.classList.add("checked", "btn");
  checkedBtn.innerHTML = '<i class="fa-solid fa-check text-white"></i>';
  toDoDiv.appendChild(checkedBtn);
//trash button
  let trashBtn = document.createElement("button");
  trashBtn.classList.add("trashBtn", "btn", "ms-2");
  trashBtn.innerHTML = '<i class="fa-solid fa-trash text-white"></i>';
//append to List
  toDoDiv.appendChild(trashBtn);
  List.appendChild(toDoDiv);
    }
// clear input value
  input.value = "";
}
function deleteCheck(e){
    let todo=e.target.parentElement;
    let selectedBtn=e.target;
    if(selectedBtn.classList[0]=="trashBtn"){
        todo.classList.add('fall');
        todo.addEventListener("transitionend",function(){
            todo.remove();
        })
        // 
    }
    else if(selectedBtn.classList[0]=="checked"){
        todo.classList.toggle("complete")
    }

}
function filter_toDo(e){
    const todos= List.childNodes;
 
    todos.forEach(ele => {
        
        // console.log(ele);
    });
// Array.from(todos).forEach(function (element) {
//     console.log(filterOption);
//     switch(filterOption.target.value){
//         case 'All':
//             console.log("all");
//             break;
//             case 'completed':
//                 console.log("alcom[l");
//                 break;
//         }
    
//   });
   

}
