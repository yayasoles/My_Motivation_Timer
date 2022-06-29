setInterval(()=>{
   var date=new Date();

    document.querySelector('.budget__value').innerHTML=`${date.getHours()} : ${date.getMinutes()}  :  ${date.getSeconds()}  :  ${date.getMilliseconds()}`;
},100)