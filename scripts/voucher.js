var url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
getdata()
async function getdata(){
  try{
  var res= await fetch(url)
 var deta=await res.json()
 console.log(deta[0].vouchers)
   display(deta[0].vouchers)
  }
  catch(error){
  console.log(error)
  }
}
var sum=0
function display(data){
  data.forEach(function(el){
   
    var card= document.createElement("div")
    card.setAttribute("class","voucher") 

    var img=document.createElement("img")
    img.src=el.image
    img.style.width="100%"

    var h3=document.createElement("h3")
    h3.innerText=el.name

    var h4=document.createElement("h4")
    h4.innerText=el.price

    var buy=document.createElement("div")
    buy.innerText="Buy"
    buy.setAttribute("class","buy_voucher")
    buy.addEventListener("click",function(){
      mybuy(el)
    })
   
    card.append(img,h3,h4,buy)
    document.getElementById("voucher_list").append(card)
  })
}

var price=JSON.parse(localStorage.getItem("user"))
document.getElementById("wallet_balance").append(price.amount)



var arr=[]
function mybuy(ele){
  sum=sum+ele.price
  arr.push(ele)
  
  localStorage.setItem("purchase",JSON.stringify(arr))
 if(sum>price.amount){
   alert("Sorry! insufficient balance")
 }
 else{
   document.getElementById("wallet_balance").innerHTML=null
   document.getElementById("wallet_balance").append(price.amount-sum)
     var newprice=price.amount-sum

  var cartoon=JSON.parse(localStorage.getItem("user"))
  cartoon.amount=newprice
  localStorage.setItem("user",JSON.stringify(cartoon))
   alert("Hurray! purchase successful")
 }
}