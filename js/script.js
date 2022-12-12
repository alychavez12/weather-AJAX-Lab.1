const $name = $('#name');
const $temp = $('#temp');
const $feels_like = $('#feels_like');
const $weather = $('#weather');
const $input = $('input[type="text"]');

let weatherData, userInput;

$("form").on("submit", handleGetData)

function handleGetData(event) {
    event.preventDefault()
    /* calling preventDefault() on a 'submit' event will prevent a page refresh*/
    userInput = $input.val()
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q="+userInput+"&units=imperial&appid=99892aac9105acb17992bbbe9ab2014a"
    }).then(
     
      function (main){
        weatherData = main
         render()

      },
      (error) => {
        console.log("bad request", error)
      }
    )
  }

  
  function render() {
    $name.text(weatherData.name)
    $temp.text(weatherData.main.temp)
    $feels_like.text(weatherData.main.feels_like)
    $weather.text(weatherData.weather[0].description)
  }