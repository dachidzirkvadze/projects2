window.addEventListener("scroll", function () {
  var idk = document.getElementById("navbar");
  idk.classList.toggle("xxdd", window.scrollY > 5);
});

$(".top").click(function (e) {
  e.preventDefault();

  $(".serch").toggleClass("serchh");
});

$(".x").click(function (e) {
  e.preventDefault();

  $(".serch").toggleClass("serchh");
});

$(".slide").click(function (e) {
  e.preventDefault();

  $(".topsite").toggleClass("topsite2");
});

//// JavaScript code
//function search_animal() {
//	let input = document.getElementsByClassName("searchbtn").value
//	input=input.toLowerCase();
//	let x = document.getElementsByClassName("bla");
//
//	for (i = 0; i < x.length; i++) {
//		if (!x[i].innerHTML.toLowerCase().includes(input)) {
//			x[i].style.display="none";
//		}
//		else {
//			x[i].style.display="list-item";
//		}
//	}
//}

function search() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("fd");
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
