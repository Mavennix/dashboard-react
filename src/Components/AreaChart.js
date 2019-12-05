import React, {Component, Fragment} from "react";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';


const data = [
    {
        uv: 4000, pv: 2400, amt: 2400,
    },
    {
        uv: 3000, pv: 1398, amt: 2210,
    },
    {
        uv: 2000, pv: 9800, amt: 2290,
    },
    {
        uv: 2780, pv: 3908, amt: 2000,
    },
    {
        uv: 1890, pv: 4800, amt: 2181,
    },
    {
        uv: 2390, pv: 3800, amt: 2500,
    },
    {
        uv: 3490, pv: 4300, amt: 2100,
    },
];

const areaStyle = {
    stroke : '#0294FF',
    background: 'rgba(2, 148, 255, 0.126274)'
};

export class AreaChartView extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100px' }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        {/*<Tooltip />*/}
                        <Area type="monotone" dataKey="uv" stroke={areaStyle.stroke} fill={areaStyle.background} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default AreaChartView;