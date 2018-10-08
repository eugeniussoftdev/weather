import React, { Component } from 'react';

// Components
import {
    StationList,
    WeatherSettings,
} from './components';

class rootComponent extends Component {

    constructor() {
        super();

        this.state = {
            calctime: 0,
            humidity: '50',
            stations: [],
            temp: '21',
        };

        this.fetchWeatherData = this.fetchWeatherData.bind(this);
        this.setSeatherSettings = this.setSeatherSettings.bind(this);
    }

    componentDidMount() {
        this.fetchWeatherData();
    }


    setSeatherSettings(e) {
        e.preventDefault();

        if (!e.target.name) {
            return;
        }

        const {
            name,
            value,
        } = e.target;

        this.setState(() => ({
            [name]: value,
        }));
    }

    fetchWeatherData() {
        const { service } = this.props;

        service.getWeather()
            .then(({ calctime, list }) => {
                this.setState(() => ({
                    calctime,
                    stations: list
                }))
            })


    }

    render() {
        const {
            stations,
            temp,
            humidity,
        } = this.state;

        return (
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-body">
                            <h1 className="title">Hello from React !</h1>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <button className="btn btn-primary" onClick={this.fetchWeatherData}>FETCH</button>
                            <p><span>Loading time</span> <span>{this.state.calctime}</span></p>
                        </div>
                    </div>
                    <WeatherSettings
                        setSeatherSettings={this.setSeatherSettings}
                        humidity={humidity}
                        temp={temp
                        } />
                    <StationList
                        humidity={humidity}
                        stations={stations}
                        temp={temp}
                    />
                </div>
        );
    }
}

export default rootComponent;