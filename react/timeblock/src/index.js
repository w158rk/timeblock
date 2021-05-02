import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Container,Grid} from '@material-ui/core';
import {Provider, useDispatch} from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import TimeTable from './TimeTable';
import { changeTimeBlocks } from './slices/timeBlocksSlice';
import axios from 'axios';

const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        axios.get('/records')
            .then((response) => {
                dispatch(changeTimeBlocks(response.data));       
                // for flask, the returned data has been converted to js object
                // there is no need to use JSON.parse here
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
    <Container>
            <Grid container style={{height: '10vh'}}>
                <Grid item xs={12} style={{marginBottom: 0, paddingBottom: 0}}>
                    <Header />
                </Grid>    
            </Grid>          
            <Grid container>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>    
                <Grid item xs={10}>
                    <TimeTable />
                </Grid>    
            </Grid>          
            <Grid container style={{height: '10vh'}}>
                <Grid item xs={12}>
                    <Footer />
                </Grid>    
            </Grid>          
        </Container>

    );
}

ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
