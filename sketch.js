var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apikey = '&appid=d8652e7d673459a311db4a75a63019df';
var units = '&units=metric';
var input;

// A wind direction vector
var wind;
// Circle position
var position;



var openone = 0;




function setup() {
	createCanvas(1500,900);
         background(255,255,255);


noStroke();
  frameRate(100);
console.log("hallo")
	var button = select('#submit');
	button.mousePressed(weatherAsk);
	input=select('#city');
    output= units[0];

}

  var IE = document.all?true:false
  if (!IE) document.captureEvents(Event.MOUSEMOVE) 

            




            // var tempX = 0
            // var tempY = 0



            // function getMouseXY(e) {
            //     if (IE) { 

            //     tempX = event.clientX + document.body.scrollLeft
            //     tempY = event.clientY + document.body.scrollTop
            //     } 
            //     else 
            //     {  
            //      tempX = e.pageX
            //      tempY = e.pageY
            //     }  

            //     // document.Show.MouseX.value = tempX
            //     // document.Show.MouseY.value = tempY

            //     return true

            //     }



  function mousePressed() {
    if (weather) {
      playing = true;
      println("pressed");
    }
  }

function weatherAsk () { 
    var url = api + input.value() + apikey + units;
    loadJSON (url,gotData); 



function gotData (data) {
  openone = data.weather;
  weather = data; 


  // Display as HTML elements


  // var name = createDiv(weather.name[units]) );
  // name.style("color", "white");
  // name.style("font-size", 20+"px");
  //   name.style("padding-top", 10+"px");
        

  var city = createDiv(floor(weather.clouds.all)  + '% Clouds' );
  city.style("color", "white");
  city.style("font-size", 20+"px");
    city.style("padding-top", 10+"px");
        

  var temperatureDiv = createDiv(floor(weather.main.temp) + '&deg; Temperature');
  temperatureDiv.style("color", "white");
  temperatureDiv.style("font-size", 20+"px");
    temperatureDiv.style("padding-top", 10+"px");

          temperatureDiv.style("margin-right", "5%");


  var humidit = createDiv(floor(weather.main.humidity) + 'RH Humidity' );
   humidit.style("color", "white");
  humidit.style("font-size", 20+"px");
   humidit.style("padding-top", 10+"px");
   humidit.style("padding-bottom", 20+"px");
  
  // Make a vector
  // wind = p5.Vector.fromAngle(angle);
}
}
// fill(weather.main.temp*100/6*3,weather.main.temp,weather.main.temp*100/12)

function draw() {

  if (mouseIsPressed === true) {
      line(mouseX, mouseY,pmouseX, pmouseY);
      stroke(weather.main.temp,weather.main.temp,weather.main.temp,);
      strokeWeight(weather.main.temp/1.5);
  }

// function mousePressed() {
// 	if (weather ){
//     // rect(100,100,1024,700), fill(255,255,255);

//       ellipse(mouseX, mouseY, weather.main.humidity/2,weather.main.humidity/2), fill(weather.main.temp*100/6*3,weather.main.temp,weather.main.temp*100/12);


// }

}

// A wind direction vector
var wind;
// Circle position
var position;







// var output = document.getElementById('output');
// output.innerHTML= weather.main.humidity;
//         loadJSON (url,gotData); ;













