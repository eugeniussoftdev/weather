// import React from 'react';
import angular from 'angular';

import 'ngreact';


import rootComponent from './rootreact.jsx';
// import '../style/app.css';




const reactDirectiveWrapper = ['reactDirective', (reactDirective) => reactDirective(rootComponent)];



let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    // calctime number =  0;

    constructor(WeatherService) {
        this.weatherService = WeatherService;
        this.calctime = 0;
        console.log('THIS SEVICE', this.weatherService)

        // try {
        //     const weatherDataResp = this.weatherService.getWeather();
        //     const calc = this.weatherService.getCalcTime();
        //     console.log('WWWW', weatherData, calc);

        //     this.calctime = 2;
        // } catch (error) {

        // }
        
        this.fetchWeather();

        // return new Promise((resolve) => {
        //     this.weatherService
        //         .getWeather()
        //         .then((response) => {
        //             console.log('RRRRRRRR', response)
        //             this.calctime = response.calctime;
        //             resolve(this);
        //         });
        // });
    }


    async getData() {
        try {
           const resp =  await this.weatherService.getWeather();
           this.calctime = resp.calctime;
        } catch (error) {
            
        }
    }

    fetchWeather() {
        this.weatherService
            .getWeather()
            .then((response) => {
                this.calctime = response.calctime;
            })
    }


}

class WeatherService {
    // uid;
    // calctime;

    constructor() {
        console.log('SERVICE')

        this.uid = '9fda3a31228b2eb120acd1b7e8d7418d';
        this.calctime = 0;
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
            this.calctime = data.calctime;

            console.log('response', data)
            return data;
        } catch (error) {
            console.log('ERROR', error)
            return error;
        }
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['react'])
    .directive('app', app)
    .directive('reactDirectiveWrapper', reactDirectiveWrapper)
    .controller('AppCtrl', AppCtrl)
    .service('WeatherService', WeatherService);

export default MODULE_NAME;