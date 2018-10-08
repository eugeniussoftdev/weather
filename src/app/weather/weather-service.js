class WeatherService {
    constructor() {

        this.uid = '9fda3a31228b2eb120acd1b7e8d7418d';
    }

    get getCalcTime() {
        return this.calctime;
    }

    async getWeather() {
        const myHeaders = new Headers();

        const myInit = {
            method: 'GET',
            headers: myHeaders,
            //    mode: 'no-cors',
            cache: 'default'
        };

        var myRequest = new Request(`https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${this.uid}`, myInit);


        try {

            const response = await fetch(myRequest);
            const data = await response.json();

            return data;
        } catch (error) {
            console.error('ERROR', error)
            return error;
        }
    }
}

export default WeatherService;
