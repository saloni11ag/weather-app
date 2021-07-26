import axios from 'axios';
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './weather.css';
import WeatherDetails from '../weatherdetails/weatherDetails';

class Weather extends Component {

    constructor() {
        super();
        this.state = {
            id: null,
            location: '',
            description: '',
            currentTemp: null,
            maxTemp: null,
            minTemp: null,
            humidity: null,
            show: false
        }

    }

    fetchWeatherDetails(value) {
        axios.get(`http://localhost:3000/weather/${value}`)
            .then(
                res => {
                    let response = res.data;
                    this.setState({
                        location: response.city_name,
                        description: response.description,
                        currentTemp: response.currentTemp,
                        maxTemp: response.maxTemp,
                        minTemp: response.minTemp,
                        humidity: response.humidity
                    })

                    this.setState({ show: true })
                },
                error => console.log(error)
            )

    }

    selectChange = (event) => {
        // let name = event.target.name;
        let val = event.target.value;
        // console.log(val)
        this.setState({ id: val })
        this.fetchWeatherDetails(val);

    }

    getChart = () => {
        this.props.history.push(`/details/${this.state.id}`);
    }

    render() {
        return (

            <div>
                <select name="cityname" className ='input-select' onChange={this.selectChange} >
                    <option>Select a City</option>
                    <option value="1">New York</option>
                    <option value="2">London</option>
                    <option value="3">Berlin</option>
                    <option value="4">Budapest</option>
                    <option value="5">Paris</option>
                    <option value="6">Stockholm</option>
                    <option value="7">Amsterdam</option>
                    <option value="8">Rome</option>
                </select>
                {this.state.show && <WeatherDetails
                    location={this.state.location}
                    description={this.state.description}
                    currentTemp={this.state.currentTemp}
                    maxTemp={this.state.maxTemp}
                    minTemp={this.state.minTemp}
                    humidity={this.state.humidity}
                />}
                {this.state.show && <button onClick={this.getChart}>Click To View More Details</button>}
            </div>
        )
    }
}


export default withRouter(Weather);
