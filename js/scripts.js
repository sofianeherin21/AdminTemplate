var coll1 = document.getElementById("row1head");
var content1 = document.getElementById("row1");
var content2 = document.getElementById("row2");
var content3 = document.getElementById("row3");
var plusbtn= document.getElementsByClassName("add");
coll1.addEventListener("click", function() {


    if (content1.style.display === "block") {
      content1.style.display = "none";
    } else {
      content2.style.display = "none";
      content1.style.display = "block";
      content3.style.display = "none";
    }
    
    var pos=document.getElementsByClassName('table-right')[0].getBoundingClientRect();
    var height=document.getElementsByTagName('tbody')[1].offsetHeight;
    console.log(height);
    // var pos2= plusbtn[0].getBoundingClientRect();
    // console.log(pos.bottom-pos.top);
    // console.log(plusbtn[0]);
    plusbtn[0].style.marginTop=`${pos.bottom-pos.top-50}px`;
    //console.log(pos2.top);
    console.log(plusbtn[0].style.marginTop);



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
    var pos=document.getElementsByClassName('table-right')[1].getBoundingClientRect();
    plusbtn[1].style.marginTop=`${pos.bottom-pos.top-50}px`;

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

    var pos=document.getElementsByClassName('table-right')[2].getBoundingClientRect();
    plusbtn[2].style.marginTop=`${pos.bottom-pos.top-50}px`;

});


// var col=document.getElementsByClassName('card-header');
// console.log(col);
// //console.log(content);
// for(var i=0;i<col.length;i++)
// {
//   col[i].addEventListener("click",function(i){
//     var content =document.getElementsByClassName('collapse');
//     console.log(i.path[3].id);

//     if(i.path[3].id==='row2head')
//     {
//       var j=1;
//       console.log(j);
//     }
//     else if(i.path[3].id==='row1head')
//     {
//       var j=0;
//       console.log(j);
//     }
//     else if(i.path[3].id==='row3head')
//     {
//       var j=2;
//       console.log(j);
//     }
//     else
//       console.log('false')
//     //console.log(content[j]);
//     if (content[j].style.display==="block") {
//       content[j].style.display="none";
//     }
//     else{
//       content[j].style.display="block";
//     }
//   })
// }

