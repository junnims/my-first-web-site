var links = {
    setcolor:function(color){
        var alist = document.querySelectorAll('a');
 var i = 0;
 while(i<alist.length){
 alist[i].style.color=color;
 
 i = i + 1;
  } 

}
}


var body = {
     setcolor:function(color){
        document.querySelector('body').style.color = color;
     }
     ,
        backgroundcolor : function(color){
        document.querySelector('body').style.backgroundColor =color;
     }
 }
 
 
 function nightdayhandler(jun){


 if(jun.value==='night'){  
 body.backgroundcolor('black');
 body.setcolor('yellow');
 jun.value ='day'


 links.setcolor('powderblue');


 }else{
 body.backgroundcolor('white');
 body.setcolor('black');
 jun.value ='night'

 links.setcolor('green');

 }
}