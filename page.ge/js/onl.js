  ////////////
 //ნავბარი///
////////////

window.addEventListener("scroll", function () {
  var idk = document.getElementById("navbar");
  idk.classList.toggle("xxdd", window.scrollY > 5);
});

  ///////////////
 //ტოპ საიტები//
///////////////

$(document).on("click", ".slide", function (e) {
  e.preventDefault();
  $(this).replaceWith(
    '<button class="slidee"><svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"/></svg></button>'
  );
  $(".topsite").toggleClass("topsite2");
});

$(document).on("click", ".slidee", function (e) {
  e.preventDefault();
 // $(this).replaceWith('<button class="slide">TOP</button>');
 $(this).replaceWith('<button class="slide">TOP</button>');
  $(".topsite").toggleClass("topsite2");
});

  /////////////////
 //სერჩის ღილაკი//
/////////////////

$(".top").click(function (e) {
  e.preventDefault();
  $(".serch").toggleClass("serchh");
});

$(".x").click(function (e) {
  e.preventDefault();
  $(".serch").toggleClass("serchh");
});



  ////////////
 //ფანჯარა///
////////////

$(".bla").click(function (e) {
  e.preventDefault();
  $(".fool").toggleClass("fooll");
});

$(".dfd").click(function (e) {
  e.preventDefault();
  $(".fool").toggleClass("fooll");
});




/////////////////////
/////////////////////
$(".add").click(function (e) {
  e.preventDefault();
  $(".window").toggleClass("wdw");
});
$(".bllla").click(function (e) {
  e.preventDefault();
  $(".window").toggleClass("wdw");
});


$(".addreklam").click(function (e) {
  e.preventDefault();
  $(".window").toggleClass("wdw");
});
/////////////////////
/////////////////////




  //////////////////
 // სერჩის ლოგიკა//
//////////////////


function search() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("bla");
    let slogic = true;
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      } else {
        slogic = false;
        x[i].style.display = "block";
      }
    }
    if (slogic) {
      document.getElementById("notresult").style.display = "block";
    } else {
      document.getElementById("notresult").style.display = "none";
    }
  }
  
//$(".x").click(function (e){
//    $(".serch").hide("100");
//});
//
//$(".top").click(function (e){
//    $(".serch").toggle("100");
//});




//function search() {
//  let input = document.getElementById("searchbar").value;
//  input = input.toLowerCase();
//  let x = document.getElementsByClassName("bla");
//
//  for (i = 0; i < x.length; i++) {
//    if (!x[i].innerHTML.toLowerCase().includes(input)) {
//      x[i].style.display = "none";
//    } else {
//      x[i].style.display = "table";
//    }
//  }
//}

function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("TextBoxID");
  filter = input.value.toUpperCase();
  table = document.getElementById("TableID");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      var x = $("#TextBoxID").val();
      var regex = /^[a-zA-Z]+$/;
      if (!x.match(regex)) {
          td = tr[i].getElementsByTagName("td")[0];
      }
      if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }
}