import { useDispatch, useSelector } from "react-redux";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {getDatesThisWeek, getUnitsOfADay} from '../../utils/misc';
import React, { useEffect } from "react";
import * as dataActions from "../../actions/data";


const TimeTable = () => {
    // load data when mounted
    const dispatch = useDispatch();
    useEffect(()=>{
        dataActions.fetchData(dispatch);
    }, [])

    const records = useSelector(state => state.data.records);
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

    const getNotes = () => {

        var ret = Array(2*24*7);
        for(var i=0; i<ret.length; i++) {
            ret[i] = '';
        }
        records.forEach(record => {
            var index = getIndexFromDateTime(record.date, record.time);
            var dur = record.length;
            [...Array(dur).keys()].map(i => {ret[index+i] = record.note;});
        });

        return ret;

    }


    const colors = getColors();
    const text = getText();
    const notes = getNotes();

    const showNote = (e) => {
        var cell = e.target;
        var i = parseInt(cell.id);
        cell.innerHTML = notes[i];
        cell.style.fontWeight='bold';
    }

    const hideNote = (e) => {
        var cell = e.target;
        var i = parseInt(cell.id);
        cell.innerHTML = text[i];
        cell.style.fontWeight='normal';
    }



    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {
                            days.map(day => <TableCell key={`${day}`}>{day}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    [...Array(48).keys()].map(j => (
                        <TableRow key={`row.${j}`}>
                            <TableCell component="th" key={`rowhead.${j}`}>{times[j]}</TableCell>
                            {
                                [...Array(7).keys()].map(i =>
                                    <TableCell
                                        id = {i*48+j}
                                        key = {`cell.${j}.${i}`}
                                        style={{backgroundColor: colors[i*48+j]}}
                                        onMouseOver={(e) => showNote(e)}
                                        onMouseOut={e => hideNote(e)}
                                    >
                                    {text[i*48+j]}
                                    </TableCell>
                                )
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
