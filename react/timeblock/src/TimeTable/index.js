import { useSelector } from "react-redux";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {getDatesThisWeek, getUnitsOfADay} from '../utils';


const TimeTable = () => {
    const records = useSelector(state => state.timeBlocks.records);
    const days = getDatesThisWeek(new Date(Date.now()));
    const times = getUnitsOfADay();

    
    const getIndexFromDateTime = (date, time) => {
        // YYYY-MM-DD
        // HH:mm
        var d = new Date(date);
        var base = new Date(days[0]);
        var deltaDate = d.getTime() - base.getTime(); 
        deltaDate = parseInt(deltaDate / (1000 * 60 * 60 * 24)); 

        var list = time.split(":");
        var h = parseInt(list[0]);
        var m = parseInt(list[1]);
        var deltaTime = h * 2 + parseInt(m / 30);

        return deltaDate * 24*2 + deltaTime;

    }

    const getColors = () => {

        var ret = Array(2*24*7);
        for(var i=0; i<ret.length; i++) {
            ret[i] = 'white';
        }
        records.forEach(record => {
            var index = getIndexFromDateTime(record.date, record.time);
            var dur = record.length;
            [...Array(dur).keys()].map(i => {ret[index+i] = '#' + record.color;});
        });

        return ret;

    }
    
    const getText = () => {

        var ret = Array(2*24*7);
        for(var i=0; i<ret.length; i++) {
            ret[i] = '';
        }
        records.forEach(record => {
            var index = getIndexFromDateTime(record.date, record.time);
            var dur = record.length;
            [...Array(dur).keys()].map(i => {ret[index+i] = record.event;});
        });

        return ret;

    }

    const colors = getColors();
    const text = getText();

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {
                            days.map(day => <TableCell>{day}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    [...Array(48).keys()].map(j => (
                        <TableRow>
                            <TableCell component="th">{times[j]}</TableCell>
                            {
                                [...Array(7).keys()].map(i => (<TableCell style={{backgroundColor: colors[i*48+j]}}>{text[i*48+j]}</TableCell>))
                            }
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default TimeTable;
