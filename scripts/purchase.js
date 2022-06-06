var arr=JSON.parse(localStorage.getItem("purchase"))
display(arr)

function display(data){
  data.forEach(function(el){
   
    var card= document.createElement("div")
    card.setAttribute("class","vouch") 

    var img=document.createElement("img")
    img.src=el.image
    img.style.width="100%"

    var h3=document.createElement("h3")
    h3.innerText=el.name

    var h4=document.createElement("h4")
    h4.innerText=el.price


    card.append(img,h3,h4)
    document.getElementById("purchased_vouchers").append(card)
  })
}
var remaining=JSON.parse(localStorage.getItem("user")) 
document.getElementById("wallet_balance").append(remaining.amount)
