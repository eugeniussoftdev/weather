import React from 'react';
import PropTypes from 'prop-types';

const WeatherSettings = ({ setSeatherSettings, humidity, temp }) => (
    <div className="row form-group">
        <div className="col-md-3 form-group">
            <div className="input-group">
                <span className="input-group-addon info">
                    <span className="glyphicons glyphicon glyphicon-cloud"></span>
                </span>
                <input 
                    type="text" 
                    className="form-control" 
                    name="temp"
                    placeholder='tempterature'
                    value={temp}
                    onChange={setSeatherSettings} />
            </div>
        </div>
        <div className="col-md-3 form-group">
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    name="humidity"
                    placeholder="humidity"
                    value={humidity}
                    onChange={setSeatherSettings} />
                <span className="input-group-addon warning">
                    <span className="glyphicon glyphicon glyphicon-tint"></span>
                </span>
            </div>
        </div>
    </div>
);

WeatherSettings.propTypes = {
    setSeatherSettings: PropTypes.func
}


export default WeatherSettings;