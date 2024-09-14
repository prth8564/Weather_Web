export function ResultHandler(data:any){

const output = {
            main: data.weather[0].main,
            description: data.weather[0].description,
            temp: data.main.temp,
            min_temp: data.main.temp_min,
            max_temp: data.main.temp_max,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            visibility: data.visibility,
            clouds: data.clouds.all
        }
        return output;
}