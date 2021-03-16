import {useState, useCallback} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {useSpring , animated, useTransition} from 'react-spring'
import Grid from '@material-ui/core/Grid'

import csgoBg from '../../Images/csgo_bg.jpg'
import valorantBg from '../../Images/valorant_bg.jpg'
import freefireBg from '../../Images/freefire_bg.jpg'
import codBg from '../../Images/cod_bg.jpeg'

const useStyles = makeStyles((theme) => ({
  mainDiv : {
    backgroundColor : "#09090A",
    width: '100vw',
    minHeight: '100vh',
  },
  textHead : {
    color: "#E72727",
    fontSize: '16px',
    fontWeight: '800',
    letterSpacing: "2px",
    borderBottom: '2px solid #E72727',
    padding: '10px',
    width: '100%'
  },
  textNormal : {
    color: "white",
    fontSize: "14px",
    fontWeight: "400",
    letterSpacing: "1px",
    padding: '10px',
    width: '100%'
  },
  textDiv : {
    display: 'flex',
    flexDirection: 'column',
    alignItems :"center",
    justifyContent: 'center',
    width: '70%',
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
    minHeight: '100vh',
    width: "80vw",
    padding: '200px 0px'
  },
  img: {
    width: '500px',
    [theme.breakpoints.down('sm')] : {
      width: '100%'
    }
  },
  gameBg : {
    width: '400px',
    height: '400px', 
    objectFit : 'cover', 
    cursor: "pointer",
    boxShadow : '3px 3px 6px black',
    borderRadius : "10px",
    [theme.breakpoints.down('sm')] : {
    width: '100%',
    height: '300px', 
    }
  }
}));



const Games = (props) => {
  const classes = useStyles();
  
  const styles1 = useSpring({
    marginRight: 0,
    opacity: 1,
    display: 'flex',
    alignItems :"flex-start",
    justifyContent: 'flex-start',
    from : {marginRight: 100, opacity: 0},
    config: {duration : 600}
  })

  const games = [
    ({ style }) => (<animated.div style={{...style}} > <img style={{...style}} className={classes.gameBg} src={csgoBg} /> </animated.div>),
    ({ style }) => (<animated.div style={{...style}} > <img style={{...style}} className={classes.gameBg} src={valorantBg} /> </animated.div>),
    ({ style }) => (<animated.div style={{...style}} > <img style={{...style}} className={classes.gameBg} src={codBg} /> </animated.div>),
    ({ style }) => (<animated.div style={{...style}} > <img style={{...style}} className={classes.gameBg} src={freefireBg} /> </animated.div>),
    
  ]

  const [index,setIndex] = useState(0);

  const onClick = useCallback(() => setIndex(index => (index + 1) % games.length), [])

  const transition = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(10%,0,0)',position: 'absolute', },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)', position: 'static' },
    leave: { opacity: 0, transform: 'translate3d(-10%,0,0)',position: 'absolute' },
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
          <Grid item xs={12} md={5} container justify='center'>
            <animated.div style={styles1}>
              <div  className={classes.textDiv}>
                <span className={classes.textHead}>SUPPORTED GAMES</span>
                <span className={classes.normalHead}>YOU GUYS DECIDE.</span>
                <span className={classes.textNormal}>
                You are our priority, the gaming community of India. We are always open for suggestions
                from you people on our social handles and try our best to keep up.
                </span>
                </div>
            </animated.div>
          </Grid>
          <Grid item xs={12} md={5} container justify='center'>
            <div onClick={onClick}>    
            {
                transition.map(({item,props,key}) => {
                  const Game = games[item]
                  return <Game key={key} style={props} />
                })
              }
            </div>
          </Grid>
      </Grid>
    </>
   );
 };

export default Games;