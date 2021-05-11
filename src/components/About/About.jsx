import {makeStyles} from '@material-ui/core/styles'
import {useSpring , animated} from 'react-spring'
import Grid from '@material-ui/core/Grid'

import HomeBg from '../../Images/arcade_bg.jpg'

const useStyles = makeStyles((theme) => ({
  mainDiv : {
    backgroundColor : "#09090A",
    width: '100vw',
    minHeight: '100vh',
    padding: '30px',
    minHeight : "1000px"
  },
  textHead : {
    color: "#E72727",
    fontSize: '16px',
    fontWeight: '800',
    letterSpacing: "2px",
    borderBottom: '2px solid #E72727',
    padding: '10px'
  },
  textNormal : {
    color: "white",
    fontSize: "14px",
    fontWeight: "400",
    letterSpacing: "2px",
    padding: '10px',
    width: '100%'
  },
  textDiv : {
    display: 'flex',
    flexDirection: 'column',
    alignItems :"center",
    justifyContent: 'center',
    maxWidth: '600px',
  },
  normalHead:  {
    color: 'white',
    fontSize: '18px',
    fontWeight: '900',
    lineHeight: '25px',
    letterSpacing: '4px',
    padding: '10px',
    width: '100%',
    [theme.breakpoints.up('sm')] : {
      fontSize:"30px",
      lineHeight: '40px'
    }
  },
  mainGrid :{
    position: 'absolute',
    height: '100%',
    width: "100%",
    minHeight: '100vh',
    padding: '200px 0px',
    minHeight : "1000px"
  },
  img: {
    width: '90%',
    objectFit : 'cover',
    height: '500px',
    boxShadow : '3px 3px 6px black',
    borderRadius : "10px",
    filter: 'grayscale(50%) brightness(100%)',
    [theme.breakpoints.down('sm')] : {
      width: '100%',
      height: '300px'
    }
  }
}));

const About = (props) => {
  const classes = useStyles();
  
  const styles2 = useSpring({
    marginLeft: 0,
    opacity: 1,
    display: 'flex',
    alignItems :"center",
    justifyContent: 'center',
    width: "100%",
    from : {marginLeft: 100, opacity: 0},
    config: {duration : 600}
  })

  const styles1 = useSpring({
    marginRight: 0,
    opacity: 1,
    display: 'flex',
    alignItems :"center",
    justifyContent: 'center',
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
          <Grid item xs={12} container justify='center'>
            <animated.div style={styles1}>
              <div  className={classes.textDiv}>
                <span className={classes.textHead}>WHAT WE DO?</span>
                <span className={classes.normalHead}>PROVIDE OPPORTUNITIES TO EVERYONE.</span>
                <span className={classes.textNormal}>
                We provide best ESPORTS platform that focuses on 
                user development. We will provide you support in any way possible, we are here for you!
                </span>
                </div>
            </animated.div>
          </Grid>
          <Grid item xs={12} container justify='center'>
            <animated.div style={styles2}>    
              <img alt="arcade image" className={classes.img} src={HomeBg} />
            </animated.div>
          </Grid>
      </Grid>
    </>
   );
 };

export default About;