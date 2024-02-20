let inputbox = document.querySelector(".inputbox")
let btn = document.querySelector(".btn")
let error = document.querySelector(".error")
let ol = document.querySelector("ol")
let olerror = document.querySelector(".ol_error")
let todoarr = []
let arrindex;

btn.addEventListener("click",function(){
    if (inputbox.value == ""){
        error.innerHTML = "Don't empty in this box"

        
    }else{
        if (btn.innerHTML == "Add") {
            error.innerHTML = ""
            todoarr.push(inputbox.value)
            inputbox.value = ""
            todo()
            
        }else{
            todoarr[arrindex] = inputbox.value
            todo()
            btn.innerHTML = "Add"
            inputbox.value = ""
        }
    }
    //console.log(todoarr);
})
function todo(){
    ol.innerHTML = ""
    todoarr.map((item)=>{
    ol.innerHTML += `<li>${item}<button class="edit">Edit</button><button class="delete">Delete</button></li>`
        //delete operation
    let deletebtn = document.querySelectorAll(".delete")
    let deletebtnArr = Array.from(deletebtn)
    deletebtnArr.map((deleteitem,index)=>{
        deleteitem.addEventListener("click",function() {
            //console.log(deleteitem,index);
            todoarr.splice(index,1)
            todo()
        }) 

    })
    //edit operation
    let editbtn = document.querySelectorAll(".edit")
    let editbtnArr = Array.from(editbtn)
    editbtnArr.map((edititem,index)=>{
        edititem.addEventListener("click",function() {
            btn.innerHTML = "Update"
            inputbox.value = todoarr[index]
            arrindex = index
            
        })    
        
            
        })
    })
    }

    
    
