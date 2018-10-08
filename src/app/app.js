import angular from 'angular';
import 'ngreact';

import WeatherService from './weather/weather-service';
import rootComponent from './react-app/rootreact.jsx';

const reactDirectiveWrapper = ['reactDirective', (reactDirective) => reactDirective(rootComponent)];

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor(WeatherService) {
        this.weatherService = WeatherService;
        this.fetchWeather();
    }

    fetchWeather() {
        this.weatherService
            .getWeather()
            .then((response) => {
                console.log('RESPONSE', response)
            })
    }


}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['react'])
    .directive('app', app)
    .directive('reactDirectiveWrapper', reactDirectiveWrapper)
    .controller('AppCtrl', AppCtrl)
    .service('WeatherService', WeatherService);

export default MODULE_NAME;