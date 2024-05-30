function updateTime() {

let tijuanaElement = document.querySelector("#tijuana");
let tijuanaDateElement = tijuanaElement.querySelector(".date");
let tijuanaTimeElement = tijuanaElement.querySelector(".time");
let tijuanaTime = moment().tz("Mexico/BajaNorte");

tijuanaDateElement.innerHTML = tijuanaTime.format("MMMM Do YYYY");

tijuanaTimeElement.innerHTML  = tijuanaTime.format("h:mm:ss [<small>]A[</small>]");



let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");

losAngelesTimeElement.innerHTML  = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

}

updateTime();
setInterval(updateTime, 1000);
