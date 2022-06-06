var s1
function myfunc(){
  event.preventDefault()
  var form=document.getElementById("form")

  let name=form.name.value 
  let email=form.email.value
  let add=form.address.value
  let amount=form.amount.value

   s1= new details(name,email,add,amount)
  localStorage.setItem("user",JSON.stringify(s1))
  window.location.reload()
}

function details(a,b,c,d){
  this.name=a
  this.email=b
  this.address=c
  this.amount=(+d)
}