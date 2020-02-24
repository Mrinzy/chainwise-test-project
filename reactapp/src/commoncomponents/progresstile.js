import React from 'react'
import { Grid } from '@material-ui/core'
import {  withStyles, lighten } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Eos2 from '../resources/Eos2.svg'


const  textinfo ={
    marginBottom: 10,
    marginTop: 10 ,
    fontFamily: 'sans-serif'
}
const imagestyle={
  height:20,
  width:15,
  float:'right'
}
const text1={
  fontSize: 22,
  fontWeight: 600,
}
const text2={
  fontSize: 16,
  fontWeight: 300,
}
const text3={
  fontSize: 16,
  fontWeight: 300,
  float:'right'
}
const container={margin:10}
const BorderLinearProgress = withStyles({
    root: {
      height: 5,
      margin: 7,
      backgroundColor: lighten('#292525', 0.9),
    },
    bar: {
      backgroundColor: '#292525',
    },
  })(LinearProgress);
function Progresstile(props){
    return(
        <div style={container}>
        <div style={textinfo}>
          <span style={text1}>{props.progress.name} </span>
          <span style={text2}>{props.progress.ram} KB / {props.progress.ram2} KB </span>
          {props.progress.staked>0&&<img src={Eos2} style={imagestyle} alt ='EOS'/>}
          
          <span style={text3}>{props.progress.staked} </span>
         
        </div>
        <Grid container>
            <Grid item xs={1}>
            <span>{props.progress.percentage}%</span>
            </Grid>
            <Grid item xs={11}>
            <BorderLinearProgress 
            variant="determinate"                          
            value={props.progress.value}
            />
            </Grid>
        </Grid>
        </div>
    )
}
export default Progresstile