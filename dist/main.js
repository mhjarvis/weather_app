(()=>{function e(e){fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=bb240cca395c22bffedb2a9a6e9daa71`,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){console.log(e),document.querySelector(".city-name").innerHTML=`${e.name} Weather Status`,document.querySelector(".current-temperature").innerHTML=`${t(e.main.temp)} &#xb0;F`,document.querySelector(".feels-like").innerHTML=`feels like: ${t(e.main.feels_like)}&#xb0;F`,document.querySelector(".cloud-info").innerHTML=e.weather[0].description,document.querySelector(".humidity").innerHTML=`humidity: ${e.main.humidity}%`}))}function t(e){return e=(e=9*(e-273.15))/5+32,parseInt(e)}function n(){let e=new Date,t=`${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}`;document.querySelector(".current-time").innerHTML=t}e("Huntsville"),fetch("https://api.openweathermap.org/data/2.5/forecast?q=Huntsville&APPID=bb240cca395c22bffedb2a9a6e9daa71",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){!function(e){for(let n=0;n<6;n++){const c=document.querySelector(`.f${n}`),r=document.createElement("p");let o=new Date(1e3*e.list[n].dt);r.classList.add("time"),r.innerHTML=`${o.getHours()}:00 - ${o.getHours()+3}:00`,c.appendChild(r);const i=document.createElement("p");i.classList.add("forcast-temp"),i.innerHTML=`${t(e.list[n].main.temp)}&#xb0;F`,c.appendChild(i);const u=document.createElement("p");u.classList.add("cloud-cover"),u.innerHTML=`${e.list[n].weather[0].description}`,c.appendChild(u)}}(e)})),n(),setInterval(n,1e3),document.querySelector(".city-button").addEventListener("click",(function(){let t=document.querySelector(".city-input").value;document.querySelector(".city-input").value="",console.log(t),e(t)}))})();