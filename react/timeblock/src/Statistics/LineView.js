import {getDatesThisWeek} from '../utils'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * 
 * @param {*} props 
 * 
 * props.records
 *      should contain a list of record with the same top event
 * 
 * props.date: TODO
 * 
 * this component will draw a total-date chart with the color of this event
 */
const LineView = (props) => {
    const dates = getDatesThisWeek();
    const base = new Date(dates[0]);
    var values = Array(7).fill(0);
    const records = props.records;
    var color = '#666666';
    
    
    records.forEach(record => {
        const date = new Date(record.date);
        const delta = date.getDate()-base.getDate();
        console.log(delta);
        if(delta>=0 && delta<=7) {

            values[delta]+=record.length;
            color = record.color;
        }
    });


    const data = [...Array(7).keys()].map(i => {
        return {
            date:  dates[i],
            total: values[i]*30/60,
        }
    });
    console.log(values);

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="total" stroke={'#'+color} activeDot={{ r: 8 }} />
            </LineChart>

        </ResponsiveContainer>
    )


}

export default LineView;