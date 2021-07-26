import axios from 'axios';
import React, { Component } from 'react'
import Chart from "react-google-charts";

import './weatherChart.css'

export default class WeatherChart extends Component {
    constructor(props) {
        super(props)
        var pathArray = window.location.href.split("/");
        let val = pathArray[4]
        this.state = {
            id: val,
            location: '',
            day1_max: 0,
            day1_min: 0,
            day2_max: 0,
            day2_min: 0,
            day3_max: 0,
            day3_min: 0,
            day4_max: 0,
            day4_min: 0,
            day5_max: 0,
            day5_min: 0,
            day6_max: 0,
            day6_min: 0,
            day7_max: 0,
            day7_min: 0
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/weeklystatus/${this.state.id}`)
            .then(
                res => {
                    let response = res.data
                    this.setState({
                        location: response.city_name,
                        day1_max: parseFloat(response.day1.split('-')[0]),
                        day1_min: parseFloat(response.day1.split('-')[1]),
                        day2_max: parseFloat(response.day2.split('-')[0]),
                        day2_min: parseFloat(response.day2.split('-')[1]),
                        day3_max: parseFloat(response.day3.split('-')[0]),
                        day3_min: parseFloat(response.day3.split('-')[1]),
                        day4_max: parseFloat(response.day4.split('-')[0]),
                        day4_min: parseFloat(response.day4.split('-')[1]),
                        day5_max: parseFloat(response.day5.split('-')[0]),
                        day5_min: parseFloat(response.day5.split('-')[1]),
                        day6_max: parseFloat(response.day6.split('-')[0]),
                        day6_min: parseFloat(response.day6.split('-')[1]),
                        day7_max: parseFloat(response.day7.split('-')[0]),
                        day7_min: parseFloat(response.day7.split('-')[1])
                    })
                }

            )
    }

    render() {
        return (
            <>
                <span>{this.state.location}</span>
                <Chart
                    chartType="LineChart"
                    width={'600px'}
                    height={'400px'}
                    id='weather-chart'
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['x', 'MAX TEMP', 'MIN TEMP'],
                        ['Sunday', this.state.day1_max, this.state.day1_min],
                        ['Monday', this.state.day2_max, this.state.day2_min],
                        ['Tuesday', this.state.day3_max, this.state.day3_min],
                        ['Wednesday', this.state.day4_max, this.state.day4_min],
                        ['Thursday', this.state.day5_max, this.state.day5_min],
                        ['Friday', this.state.day6_max, this.state.day6_min],
                        ['Saturday', this.state.day7_max, this.state.day7_min],
                    ]}
                    options={{
                        hAxis: {
                            title: 'Days',
                        },
                        vAxis: {
                            title: 'Temperature(in C)',
                        },
                        series: {
                            1: { curveType: 'function' },
                        },
                    }}
                />
            </>
        )
    }
}
