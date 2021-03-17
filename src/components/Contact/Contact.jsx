import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  mainDiv : {
    backgroundColor : "#09090A",
    width: '100vw',
    minHeight: '100vh',
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
    padding: '20px',
    width: '100%',
    maxWidth: '500px'
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
    height: '100%',
    width: "100%",
    minHeight: '100vh',
    padding: '50px 0px',
  },
  regLink : {
    textDecoration: "none",
  },
  regBtn : {
    color: 'black',
    '&:hover' : {
      color : 'white',
      backgroundColor: "black"
    }
  },
  footer: {
    bottom:"0"
  },
  footText : {
    color: "white",
    fontWeight: "300",
    fontSize: "12px"
  }
}));

const Contact = (props) => {
  const classes = useStyles();
  
  return(
    <>
      <div className={classes.mainDiv}/>
      <Grid 
      container 
      className={classes.mainGrid}
      justify='center'
      spacing={3}
      >
          <Grid item xs={12} container justify='center'>
              <div  className={classes.textDiv}>
              <span className={classes.textHead} >CONTACT US</span>
              <span className={classes.textNormal} >
                  We are open to receive your ideas, suggestions and what you guys are 
                  hoping from us. Got something ? Just drop us a mail and we'll be more than 
                  happy to check out your ideas 💡. 
                  <p><strong>OUR HANDLE : eyudhgaming@gmail.com</strong></p>
                </span>
                </div>
          </Grid>
          <Grid item xs={12} container justify='center'>
          <div>
            <a href='mailto:eyudhgaming@gmail.com' className={classes.regLink}>
              <Button variant='contained' className={classes.regBtn}>SEND MAIL</Button>
            </a>
            </div>
          </Grid>
          
      <footer className={classes.footer} ><span className={classes.footText}> &#169; All rights reserved 2021.</span> </footer>
      </Grid>
    </>
   );
 };

export default Contact;
