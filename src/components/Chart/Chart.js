import React from 'react'
import "./Chart.css"
import ChartBar from './ChartBar'


export default function Chart(props){
    let dataPointValues = props.dataPoints.map( (datapoint) => datapoint.value);
    let totalMaximum = Math.max(...dataPointValues)
    return (
        <div className="chart">
            {props.dataPoints.map( (datapoint) => {
                return <ChartBar key={datapoint.id} value={datapoint.value} label={datapoint.label} maxValue={totalMaximum} />
            })}
        </div>
    )
}