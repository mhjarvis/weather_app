(()=>{function e(e){fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=bb240cca395c22bffedb2a9a6e9daa71`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){console.log(e.main)}))}e("Huntsville"),document.querySelector(".city-button").addEventListener("click",(function(){let t=document.querySelector(".city-input").value;document.querySelector(".city-input").value="",console.log(t),e(t)}))})();