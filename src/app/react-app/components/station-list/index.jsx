import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StationList extends Component {

    get getSortedList() {
        const {
            humidity,
            stations,
            temp,
        } = this.props;

        const sortedStations = stations.sort((a, b) => {
            const humidityDiff = Math.abs(a.main.humidity - humidity) - Math.abs(b.main.humidity - humidity);
            const tempDiff = Math.abs(a.main.temp - temp) - Math.abs(b.main.temp - temp);
            return humidityDiff + tempDiff;
        });
        return sortedStations;
    }

    render() {
        return (
            <table className="table table-striped table-condensed">
                <thead>
                    <tr>
                        <th>Station Name</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.getSortedList.map((station) => (
                            <tr key={station.id}>
                                <td>
                                    {station.name}
                                </td>
                                <td>
                                    {station.main.temp} <i>&deg;C</i>
                                </td>
                                <td>
                                    {station.main.humidity} <i>%</i>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}

export default StationList;