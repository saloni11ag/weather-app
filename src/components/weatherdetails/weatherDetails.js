import React, { Component } from 'react'

import './weatherDetails.css'

export default class WeatherDetails extends Component {

    render() {
        return (
            <div id = 'weather-card'>
            <div id='card-heading'><h5>Today's Weather</h5></div>
            <div>
                <div><h4>{this.props.location}</h4></div>
                <div id='card-content'>
                    <b>Current Weather:   </b> {this.props.description}<br/>
                    <b>Temperature:   </b> {this.props.currentTemp}&deg;<br/>
                    <b>Max. Temperature:   </b> {this.props.minTemp}&deg;<br/>
                    <b>Min. Temperature:   </b> {this.props.maxTemp}&deg;<br/>
                    <b>Humidity:   </b> {this.props.humidity}%<br/>
                </div>
            </div>
            </div>
        )
    }
}
