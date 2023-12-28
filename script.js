
var sname= document.getElementById('site')
var url= document.getElementById('url')
var inp=document.getElementsByClassName('feedback')
var list=[]
if(localStorage.getItem('sites') !== null){
    list= JSON.parse(localStorage.getItem('sites'))
    display()
}


function addSite(){
     var site={
        name:sname.value,
        sUrl:url.value
     }
     if(sname.value==''||url.value==''){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "all feilds must complete!",
            
          });}
          else{
            list.push(site)}
     console.log(list);
     display()
    
          
     
     localStorage.setItem('sites',JSON.stringify(list))
     clearForm()
}
function clearForm(){
    sname.value=''
    url.value=''
    
}
function display() {
    var cartoona=``
    for (var i = 0; i < list.length; i++) {
        cartoona+=`<tr>
        <td>${i+1}</td>
        <td>${list[i].name}</td>
        <td><button class="btn1 btn">
        <i class="fa-solid fa-eye pe-1"></i>
        <a href="${list[i].sUrl}">Visit</a></button>
        </td>
        <td><button onclick='trash(${i})' class="btn btn-danger">
        <i class="fa-solid fa-trash-can pe-1"></i>
        Delete
        </button>
        </td>
        
        </tr>
        
              `       
    }
    document.getElementById('tablebody').innerHTML=cartoona
}
function trash(index) {
    list.splice(index,1)
    localStorage.setItem('sites',JSON.stringify(list))
    display()
}
var regex1=/^[a-zA-Z0-9]{4,10}$/
var regex2 =/^(https):\/\/[w]{3}.[^\s]{4,}.(com)$/
sname.addEventListener("blur", function () {
    validate(sname,regex1);
  });
  
  url.addEventListener("blur", function () {
    validate(url, regex2);
  });
  
  function validate(m, regex) {
    var myreg = regex;
    if (myreg.test(m.value)) {
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
    } else {
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
    }}