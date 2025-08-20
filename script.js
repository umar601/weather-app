let input=document.querySelector("input");
let btn=document.querySelector("button");
let tempinc=document.querySelector("#tempinc");
 let tempinf=document.querySelector("#tempinf");
let locat=document.querySelector("#region");
let city=document.querySelector("#city");
let country=document.querySelector("#country");
let lastupdated=document.querySelector("#lastupdated");
let feelslike=document.querySelector("#feelslike");
let condition=document.querySelector("#condition");
let humidity=document.querySelector("#humidity");
let image=document.querySelector("img");
let wind=document.querySelector("#wind");



   


async function getweather(){

    let url=`http://api.weatherapi.com/v1/current.json?key=5d4590e105e9472aa5f192253251808&q=${input.value}`

try{
    let res=await axios.get(url);
    
   locat.innerText=res.data.location.name
   city.innerText=res.data.location.region
   country.innerText=res.data.location.country
    tempinc.innerText=`${res.data.current.temp_c} C`
    tempinf.innerText=`${res.data.current.temp_f} F`
    feelslike.innerText=`${res.data.current.feelslike_c} C`
    condition.innerText=res.data.current.condition.text
    image.setAttribute("src",res.data.current.condition.icon)
    humidity.innerText=`${res.data.current.humidity} %`
    wind.innerText=`${res.data.current.wind_kph} km/h`
    lastupdated.innerText=res.data.current.last_updated

}catch(e){
    alert("please enter valid city")
}
        

}


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("clicked")
    getweather()
})
                                                           
