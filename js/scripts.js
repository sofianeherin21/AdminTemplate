var coll1 = document.getElementById("row1head");
var content1 = document.getElementById("row1");
var content2 = document.getElementById("row2");
var content3 = document.getElementById("row3");

coll1.addEventListener("click", function() {


    if (content1.style.display === "block") {
      content1.style.display = "none";
    } else {
      content2.style.display = "none";
      content1.style.display = "block";
      content3.style.display = "none";
    }

});


var coll2 = document.getElementById("row2head");				
coll2.addEventListener("click", function() {



    if (content2.style.display === "block") {
      content2.style.display = "none";
    } else {
      content2.style.display = "block";
      content1.style.display = "none";
      content3.style.display = "none";
    }

});


var coll3 = document.getElementById("row3head");				
coll3.addEventListener("click", function() {



    if (content3.style.display === "block") {
      content3.style.display = "none";
    } else {
      content2.style.display = "none";
      content1.style.display = "none";
      content3.style.display = "block";
    }

});