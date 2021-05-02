import {Grid, Button, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { changeView } from '../store';

const useStyles = makeStyles({
    root: {
        background: '#EBEBE9',
        height: '100%',
        margin: '0',
        '& button': {
            width: '100%',
            borderRadius: 0
        }
    },
});


const Sidebar = () => {
    const dispatch = useDispatch();

    const onClick = (e) => {
        dispatch(changeView(e.currentTarget.id))
    
    }
    

    // options
    var cnt = 0;
    const test = [[
        {
            text: 'Table View',
            href: '#1'
        },
        {
            text: 'Statistics',
            href: '#2'
        } 
    ], [
        {
            text: 'Editor',
            href: '#3'
        },
        {
            text: 'Options',
            href: '#3'
        },
        {
            text: 'Helps',
            href: '#3'
        }
    ]];

    test.forEach(list => {
        list.forEach(item => {
            item.id = cnt;
            cnt ++;
        })
    });

    // component
    const classes = useStyles();
    const selected = useSelector(state => state.opts.selectedView);
    return (
        <Grid alignItems='flex-start' className={classes.root} container>
        <Grid container>
        {
            test.map((list) => {
                return (
                    <Grid item xs={12}>
                        {
                            list.map((item) => {
                                return (
                                <Grid item xs={12}>
                                {
                                    item.id==selected ? <Button variant='contained' color='primary'  id={item.id} key={item.id} onClick={(e) => onClick(e)}>{item.text}</Button>
                                        : <Button color='default' onClick={onClick} key={item.id} id={item.id}>{item.text}</Button>
                                }
                                    
                                </Grid>);
                            })
                            
                        }
                        <Divider />
                    </Grid>
                )
            })
        }
        </Grid>
        </Grid>
    )
}

export default Sidebar;