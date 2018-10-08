import React, { Component } from 'react';


class rootComponent extends Component {

    constructor() {
        super();
        this.state = {
            calctime: 0
        };
        
        this.fetchWeatherData = this.fetchWeatherData.bind(this);
    }
    // state = {
    //     calctime: 0
    // };

    fetchWeatherData () {
        const {data} = this.props; 

        data.getWeather()
            .then((response) => {
                console.log('RES', response)
                

                this.setState(() => ({
                    calctime: response.calctime, 
                }))
            })

            
    }
    render() {
      


        console.log('I AM REACT', this.props)
        // if (typeof stores !== 'object') {
        //     return <div className={'state-loading-screen'}>LOADING</div>;
        // }

        // const providerStores = {};
        // Object.getOwnPropertyNames(stores).forEach((storeName) => {
        //     providerStores[storeName] = stores[storeName];
        // });

        return (
            <div>
                REACT
                <button onClick={this.fetchWeatherData}>FETCH</button>
                <div>
                    <div className="container">
                        <p>
                            {this.state.calctime}
                        </p>
                        </div>
                </div>
            </div>
        );
    }
}

export default rootComponent;