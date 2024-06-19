var leftimg=document.querySelector(".leftimg");
var rightvid=document.querySelector(".rightvid");
var lefttxt =document.querySelector(".lefttxt");
var rightxt=document.querySelector(".righttxt");
var fblack=document.querySelector(".fblack");
var fwhite=document.querySelector(".fwhite");



var lscreen=document.querySelector(".lscreen");
var rscreen=document.querySelector(".rscreen");
var lstxt=document.querySelector(".lstxt");
var rstxt=document.querySelector(".rstxt");
var rsm=document.querySelector(".rsm");
var rsmb=document.querySelector(".rsmb")




var leth=document.querySelector(".leth");
var lethtxt =document.querySelector(".lethtxt");
var trk=document.querySelector(".trk");
var trktxt=document.querySelector(".trktxt");
var trks=document.querySelector(".trks");
var trkb=document.querySelector(".trkb");











leftimg.addEventListener("mouseover",function(){
    lefttxt.classList.remove("text-black");
    lefttxt.classList.add("text-white");
    fblack.classList.add("hidden");
    fwhite.classList.remove("hidden");

})
leftimg.addEventListener("mouseout",function(){
    lefttxt.classList.add("text-black");
    lefttxt.classList.remove("text-white");
    fwhite.classList.add("hidden");
    fblack.classList.remove("hidden");

})

rightvid.addEventListener("mouseover",function(){
    rightxt.classList.remove("hidden");
})
rightvid.addEventListener("mouseout",function(){
    rightxt.classList.add("hidden");
})

lscreen.addEventListener("mouseover",function(){
    lstxt.classList.remove("hidden");
})

lscreen.addEventListener("mouseout",function(){
    lstxt.classList.add("hidden");
})


rscreen.addEventListener("mouseover",function(){
    rstxt.classList.add("text-white");
    rstxt.classList.remove("text-black");
    rsm.classList.remove("hidden");
    rsmb.classList.add("hidden");

  
})

rscreen.addEventListener("mouseout",function(){
    rstxt.classList.remove("text-white");
    rstxt.classList.add("text-black");
  rsm.classList.add("hidden");
  rsmb.classList.remove("hidden");

})



trk.addEventListener("mouseover",function(){
    trktxt.classList.add("text-white");
    trktxt.classList.remove("text-black");
    trks.classList.remove("hidden");
    trkb.classList.add("hidden");

  
})





trk.addEventListener("mouseout",function(){
    trktxt.classList.remove("text-white");
    trktxt.classList.add("text-black");
  trks.classList.add("hidden");
  trkb.classList.remove("hidden");

})



leth.addEventListener("mouseover",function(){
    lethtxt.classList.remove("hidden");
})

leth.addEventListener("mouseout",function(){
   lethtxt.classList.add("hidden");
})



