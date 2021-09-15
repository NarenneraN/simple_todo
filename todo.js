const inputbox = document.querySelector(".input-field input");
const add_btn = document.querySelector(".input-field button");
const todolist = document.querySelector(".todolist");
const pendingno=document.querySelector(".pendingno");
const deleteall = document.querySelector(".footer button");
//onekeyup function for input
show();
inputbox.onkeyup = function() {
  myFunction()
};
function myFunction() {
  let userdata = inputbox.value;
  if (userdata.trim() != 0) {
    add_btn.classList.add("active");
  } else {
    add_btn.classList.remove("active");
  }
}
add_btn.addEventListener('click',taskstorage);
function taskstorage()
{
  let userdata=inputbox.value;
  let task = localStorage.getItem("New_Todo");
  if(task==null)
  {
    taskArr=[];
  }
  else
  {
    taskArr=JSON.parse(task);
  }
  taskArr.push(userdata);
  localStorage.setItem("New_Todo",JSON.stringify(taskArr));
  show();
}
//ADD TASK IN UL TAG
function show()
{
  let task = localStorage.getItem("New_Todo");
  if(task==null)
  {
    taskArr=[];
  }
  else
  {
    taskArr=JSON.parse(task);
  }
  pendingno.innerHTML=taskArr.length;
  let newlitag="";
  taskArr.forEach((element,index) => {
  newlitag += `<li>${element}<span onclick="deletetask(${index})" ><i class='fas fa-trash'></i></span></li>`;
});
 todolist.innerHTML=newlitag;
 inputbox.value="";
}
//DELETE TASK function
function deletetask(index)
{
  let task = localStorage.getItem("New_Todo");
  taskArr=JSON.parse(task);
  taskArr.splice(index,1);
  localStorage.setItem("New_Todo",JSON.stringify(taskArr));
  show();
}
deleteall.addEventListener('click',function(){
  taskArr=[];
  localStorage.setItem("New_Todo",JSON.stringify(taskArr));
  show();
})
