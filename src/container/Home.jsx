import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Games from '../components/Games/Games'
import Head from '../components/Head/Head'
import eyudhLogo from '../Images/eyudh_logo.png'
import eyudhName from '../Images/eyudh_name.png'


const useStyles = makeStyles({
    mainDiv : {
        width :'100%',
        backgroundColor : '#0b0b0b',
        minHeight : "800px"
    },
    navBar : {
        backgroundColor : '#0b0b0b',
        boxShadow: 'none'
    },
    logo : {
        height: '35px',
        padding: '10px'
    },
    logoText : {
        height: '12px',
        padding: '10px'
    }
});

const Home = (props) => {
    const classes = useStyles();
    return (
        <>
        <div >
        <AppBar position='static' className={classes.navBar}>
            <Toolbar>
                    <img src={eyudhLogo} alt='eyudh icon' className={classes.logo} />
                    <img src={eyudhName} alt='eyudh' className={classes.logoText} />
            </Toolbar>
        </AppBar>
            <Grid container justify='center' direction='column' >
                <Grid item container justify='center' xs={12}>
                    <Head />
                </Grid>
                <Grid item container justify='center' xs={12}>
                    <About />
                </Grid>
                <Grid item container justify='center' xs={12}>
                    <Games />
                </Grid>
                <Grid item container justify='center' xs={12}>
                    <Contact />
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default Home;