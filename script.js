let city = $("input").val();
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=4cd091b31040f85d7960b69658cf7491";




//Lookup city using fetch response
function cityLookup() {
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data))
            
        }
    })

}

//convert K to C. 1K = 273C
function convert(val){
    return (val -273).toFixed(2)
}

