
javascript:(function(){document.getElementsByTagName('body')[0].style.setProperty('font-family', 'serif', 'important');})();s

let btn = document.getElementById("getTimezone");
 
 
if(btn !== null){
btn.addEventListener("click",Timezone);
}

function Timezone(){
  let time = document.getElementById("showTimezone");
  time.innerHTML = Date();
}

