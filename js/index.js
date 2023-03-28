let hourpart=document.getElementById("hourpart");
let mintpart=document.getElementById("mintpart");
let secopart=document.getElementById("secopart");

let ampm=document.getElementById("ampm");

function updateDatte(){


    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

    if(h>12){
        h=h-12;
        ampm.innerHTML="AM";
    }

    h=(h<10)?"0"+h:h;
    m=(h<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;

    hourpart.innerHTML=h;
    mintpart.innerHTML=m;
    secopart.innerHTML=s;
    // ampm.innerHTML=;

setTimeout(()=>{
    updateDatte();

},1000);
  
}

updateDatte();