import {makeStyles} from '@material-ui/core/styles'
import {useSpring, animated} from 'react-spring'
import Grid from '@material-ui/core/Grid'

import HomeBg from '../../Images/home_bg.jpg'
import HomePic from '../../Images/gameboyyyy.gif'

const useStyles = makeStyles((theme) => ({
  mainDiv : {
    width: '100vw',
    height: '100vh',
    backgroundAttachment: 'fixed',
    backgroundImage: 'linear-gradient(90deg,black,transparent), url('+HomeBg +')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: '-10',
    filter : 'grayscale(100%)',
    objectFit: 'cover'
  },
  textHead : {
    color: "#E72727",
    fontSize: '16px',
    fontWeight: '800',
    letterSpacing: "2px",
    width : '100%',
    borderBottom: '2px solid #E72727',
    padding: '10px'
  },
  textNormal : {
    color: "white",
    fontSize: "12px",
    fontWeight: "400",
    letterSpacing: "2px",
    padding: '10px'
  },
  textDiv : {
    display: 'flex',
    flexDirection: 'column',
    alignItems :"flex-start",
    justifyContent: 'center',
    width: '80%',
  },
  normalHead:  {
    color: 'white',
    fontSize: "18px",
    fontWeight: '900',
    lineHeight: '25px',
    letterSpacing: '4px',
    padding: '10px',
    [theme.breakpoints.up('sm')] : {
      fontSize:"30px",
      lineHeight: '40px'
    }
  },
  mainGrid :{
    position: 'absolute',
    height: '100%',
    width: "80vw"
  },
  img: {
    height: "500px",
    filter: 'grayscale(30%) brightness(100%)',
    objectFit : 'cover',
    zIndex : '10',
    borderRadius : "10px",
    [theme.breakpoints.down('sm')] : {
      height: '250px',
      width: '100%'
    }
  },
}));

const Home = (props) => {
  const classes = useStyles();
  
  const styles2 = useSpring({
    marginLeft: 0,
    opacity: 1,
    backdropFilter: "blur(500px) ",
    from : {marginLeft: 100, opacity: 0},
    config: {duration : 600}
  })

  const styles1 = useSpring({
    marginRight: 0,
    opacity: 1,
    from : {marginRight: 100, opacity: 0},
    config: {duration : 600}
  })

  return(
    <>
      <div className={classes.mainDiv}/>
      <Grid 
      container 
      className={classes.mainGrid}
      justify='center'
      alignItems='center'
      spacing={3}
      >
          <Grid item xs={12} md={4} container justify='center'>
            <animated.div style={styles1}>
              <div  className={classes.textDiv}>
                <span className={classes.textHead}>E-YUDH 1.0</span>
                <span className={classes.normalHead}> HOME FOR PASSIONATE GAMERS. </span>
                <span className={classes.textNormal}>E-YUDH is coming soon .</span>
                </div>
            </animated.div>
          </Grid>
          <Grid item xs={12} md={4} container justify='center'>
            <animated.div style={styles2}>    
              <img className={classes.img} src={HomePic} />
              </animated.div>
          </Grid>
      </Grid>
    </>
   );
 };

export default Home;