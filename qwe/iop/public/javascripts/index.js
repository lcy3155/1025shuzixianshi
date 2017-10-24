/**
 * Created by user on 2017/10/24.
 */
 window.onload=function(){
     var She=document.querySelector('#she')
     var Hide=document.querySelector('.hidenshow')  ;

     She.onmouseover=function(){
         Hide.style.display='block'
     }
     She.onmouseout=function(){
         Hide.style.display='none'
     }




 }