import { ResponsiveBar } from '@nivo/bar'
import React from 'react'

class Bar extends React.Component {
    organizeData = (data) => {
        var fixed = [];
        data.forEach(state => {
            fixed.push({
            "id": state[0],
            "label": state[0],
            "value": state[1],
        })})

        return fixed;
        //console.log(fixed);
    }

    render() {
        console.log("DATA");
        console.log(this.props.data);
        var data2 = this.organizeData(this.props.data);
        //console.log(data);

        return (
            <div className="chart">
                <ResponsiveBar
                    data={data2}
                    margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
                    padding={0.3}
                    colors={{ scheme: 'nivo' }}
                    colorBy="value"
                    borderColor="inherit:darker(1.6)"
                    borderRadius={4}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "State",
                        "legendPosition": "middle",
                        "legendOffset": 32
                    }}
                    axisLeft={{
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "# of Past Events",
                        "legendPosition": "middle",
                        "legendOffset": -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                />
                <style jsx>{`
                    .chart {
                        height:50vh;
                        width:60vw;
                        background: white;
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                            transition: 0.3s;
                    }
                    .chart:hover {
                        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                    }
                `}</style>
            </div>
        )
    }
}

export default Bar;