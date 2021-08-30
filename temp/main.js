var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

function getCookies() {
  var array = document.cookie.split("=");
  var lec = array[1];

  if (lec != "yes") {
    window.setTimeout(function () {
      $(".alert")
        .fadeTo(1500, 0)
        .slideDown(1000, function () {
          $(this).remove();
        });
    }, 2000);
  } else {
    let g = document.getElementById("alert");
    let parent = g.parentElement;
    parent.removeChild(g);
  }

  document.cookie = "color=" + "yes" + ";expires=fri, 5 Aug 2022 01:00:00 UTC;";
}

function controlBtn(context) {
  if (context == "btn") {
    
    btn2.disabled = true;
    btn3.disabled = true;
    document.getElementById("btn").style.background = "#ed2560";
    document.getElementById("btn2").style.background = "#f1ebed";
    document.getElementById("btn3").style.background = "#f1ebed";
    btn.disabled = false;
  
   } else if (context == "btn2") {
    
    btn.disabled = true;
    document.getElementById("btn").style.background = "#f1ebed";
    document.getElementById("btn2").style.background = "#ed2560";
    document.getElementById("btn3").style.background = "#f1ebed";
    btn2.disabled = false;
    btn3.disabled = true;
  
   } else if (context == "btn3") {
    document.getElementById("btn").style.background = "#f1ebed";
    document.getElementById("btn2").style.background = "#f1ebed";
    document.getElementById("btn3").style.background = "#ed2560";

    btn.disabled = true;
    btn2.disabled = true;
    btn3.disabled = false;
  }
}
