//var number = [27, 30, 25, 27];
//
//function cheksome(el){
//    return el < 50;
//}
//console.log(number.every(cheksome))
//function cheksome(el){
//    return el > 10;
//}
//console.log(number.every(cheksome))
//
//function sortable(a, b){
//    return a - b;
//}
//
//
//var ramege2 = number.sort(sortable)
//console.log(ramege2.reverse())
//
//var ramege = number.slice(1)
//console.log(ramege)
//
//var ramege = number.shift(27)
//console.log(ramege)
//
//var ramege = number.pop(27)
//console.log(ramege)
//
//var ramege = number.push(43)
//console.log(ramege)
//
//
//number.splice(1, 1, "ახალი მასივი")
//console.log(number)






//var date = {
//    name:"დაჩი",
//    email:"ddzirkvadze278@gmail.com",
//    mobile:555555555,
//    photo:"<img src='' alt=''",
//    idk:new Date ("27, 09, 2005")
//}
//
//var dd = new Date();
//photo.setAttribute('src', date.photo);
//names.innerText = date.name;
//mobiles.innerText = date.mobiles;
//
//var idk = date.idk.getMonth();
//
//idk.innerText = date.idk.getYeart() + "-" + date.idk.getDate();
//
//if (dd == 2 && dd.idk.getDate () !== datnow.getDate()){
//    var dachi = dd.idk.getDate()- datnow.getDate();
//    console,console.log("დაბადების ღემდე დარჩენილია" + idk + "დღე");
//}
//
//
//if (dd == 2 && dd.idk.getDate()== datnow.getDate()){
//
//    console.log("გილოცანთ დაბადების დღეს")
//}


//var dachi = document.getElementById("dd3")
//
//console.log(dachi)
//
//
//for (let s = 0; s < clas.length; s++) {
//const element = clas[s];
//clas[0].innerText="dachi";
//element.classList.remove("dd2")
//element.style.backgroundcolor = "green";
//}
//function XD2(){
//   document.getElementById('dachi').stepUp();
//}
//function XD1(){
//    e3lement.stayl.backgroundcolor = "red";
//}
//var idk = document.getElementsByClassName("idk");
//
//window.eddEventListener("mouseover", function (e) {
//   console.log(e.screenX, e.screenY) 
//   idk.stayl.left = e.screenX + "px"; 
//   idk.stayl.top = e.screenY + "px";
//})
//
//function dada (params) {
//    console.getElementById("dachi").stayl.margintop = "0px";
//    console.getElementById("dachi").stayl.margintop = "500ppx";
//}
//
//
//
//
//    var dav = {
//    name:"დაჩი",
//    email:"ddzirkvadze278@gmail.com",
//    password:"blabla123",
//    mobile:555555555,
//    photo:"<img src='' alt=''",
//    idk:new Date ("27, 09, 2005")
//}









//$(".dd").click (function (e) {
//    $(".daa").toggle("5000")
//});
//
//$(".show").click (function  (e) {
//    $(".green").toggle("100")    
//})
//
//
//$(".x").click (function (e) {
//    $(".green").hide("100")
//})
//
//$(".ok").click (function (e) {
//    $(".green").hide("100")
//})
//
//
//$(".dd5").click (function (e) {
//    $(".dd2").hide("100")
//})
//
//$(".dd4").click (function  (e) {
//    $(".dd2").show("100")
//})

$(".form-check-input").click (function (e) {
   e.preventDefault();
  
   $ ('body').toggleClass("dark");
 });