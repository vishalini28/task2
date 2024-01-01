let city_name="";
 
window.addEventListener("load" ,()=>{
        document.getElementById("loader").style.display="none"
     })

 async function displaydetails(){
    const key= "f8860b3a873942bbb5c182144231708";
    let url=https://api.weatherapi.com/v1/current.json?key= ${key}&q=${city_name}&aqi=no;
        const data=await fetch(${url}).then
        (response => response.json());
        console.log(data);

        let icon=data.current.condition.icon;
        document.getElementById("weathericon").src =icon;

        let temperature=data.current.temp_c;
        document.querySelector(".temp_c").textContent=temperature

        let info= data.current.condition.text;
        document.querySelector(".info").textContent=info;
        
        let name=data.location.name;
        let region=data.location.region;
        document.querySelector(".place").textContent=name;
        document.querySelector(".state").textContent=region;

        let feelslike_c=data.current.feelslike_c;
        let humidity=data.current.humidity;
        document.querySelector(".flk span").textContent=feelslike_c;
        document.querySelector(".hum span").textContent=humidity;
}

 function clearstarter(){
    let starter=document.querySelector(".ui .starter");
    starter.id="starterdisplay";
    let display=document.querySelector(".weatherdetails");
    display.id="";
    let display2=document.querySelector(".lastdetails");
    display2.id="";

    displaydetails();
 }


 (function gettingcityname(){
    document.querySelector(".nav i").addEventListener("click" , ()=>{
        city_name=document.querySelector(".nav input").value;
        console.log(city_name);
        document.querySelector(".nav input").value="";
        clearstarter();
    })
 })();








// 
// let city_name="bhabua";


// let responce=fetch(url).then((responces)=>{
//     return responces.json();
// }) 
// let data=responce.then((data)=>{
//     console.log(data)
// })
