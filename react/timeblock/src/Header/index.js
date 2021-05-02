import {Grid, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: '#4B73C8',
        color: 'white',
        height: '100%'
    },
    title: {
        marginLeft:"5%"
    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.root} container>
            <Grid item xs={8}>
                <h1 className={classes.title}>Time Blocks</h1>
            </Grid>

            <Grid item xs={2}>
                <TextField label="Might be used" />
            </Grid>
        </Grid>
    )
}

export default Header;