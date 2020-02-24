import React from "react"
import Grid from '@material-ui/core/Grid';
import {Eosdata} from '../helpers/helper'
import {  withStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import Eos from '../resources/Eos.svg'
import Eos2 from '../resources/Eos2.svg'
import DialogBox from "./Dialogbox";
import Progresstile from '../commoncomponents/progresstile'


const styles = () => ({
    todostyle : {
        backgroundColor: 'white',
        margin: 'auto',
        color: 'black',
        width: 500,
        height: 740,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #efefef',
        boxShadow: '0 1px 1px rgba(0,0,0,0.15)',
        padding: 30,
    } ,
    header:{
        marginLeft:'40%'
    },
    header2:{
        marginLeft:'45%'
    },
    gradient:{
        height:350,background:'linear-gradient(  #ff8a4f, #ffffff)'
    },
    top:{ 
        display:'flex',
        flexDirection:'row',
        fontSize: 40,
        color: 'ivory',
        justifyContent: 'center', 
        
    },
    eos1:{
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 35
    },
    dollar:{
        fontSize: 16,
        fontWeight: '300',
        color:'white',
        marginBottom: '35%',
        justifyContent:'center',
        marginLeft:'50%'
    },
    eos2:{
        fontSize: 31,
        fontWeight: '350',
        marginTop: 44
    },
    eosicon:{
        height: 30, 
        width: 20,
        marginTop: 48,
        marginLeft: 5
    },
    buttonstyle:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight:25
    },
    textstyle1:{
        marginLeft: 25,
        fontSize: 12,
        color:'#a8abad'
    },
    textstyle2:{
        fontSize: 18,
        color:'#5a90c6'
    },
    textstyle3:{display:'flex',flexDirection:'column',float:'right',marginRight:12},
    textstyle4:{fontSize: 14,color: 'darkgoldenrod',fontWeight: 600},
    textstyle5:{display:'flex',flexDirection:'row'},
    textstyle6:{height:20,width:15},
    textstyle7:{marginLeft: 20,marginBottom: 20},
    textstyle8:{fontSize: 14,color: 'darkgoldenrod',fontWeight: 600},
    template:{height:612,background:'linear-gradient(  #ff8a4f, #ffffff)'},
    navigations:{display: 'flex',flexDirection: 'row',justifyContent: 'space-around'}

})
const StyledButton = withStyles({
    root: {
      background: 'white',
      borderRadius: 3,
      border: 0,
      color: 'black',
      width: 140,
      height:40,
      boxShadow: '1px 1px 1px 1px rgba(135, 130, 130,0.5)',
    },
    label: {
      textTransform: 'capitalize',
      fontSize: 14,
      fontWeight: 'bold'
    },
  })(Button);
class MainComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            apidata: {},
            isOpenPop: false,
            message: '',
            settings:false,
            wallet:true,
            home:false,
            navigate:false,
            color:'primary'
        }
    }
    componentDidMount() {

    Eosdata({account_name: "genialwombat"})
            .then(data=>{
                console.log(data)
                this.setState({
                    apidata:data.data
                  })
            }             
            ).catch()
              
    }
    buybutton=()=>{
        this.setState({
            isOpenPop: true,
            message: 'Successfully bought !'
        });

    }
    sendbutton=()=>{
        this.setState({
            isOpenPop: true,
            message: 'Successfully Sent !'
        });

    }
    receivebutton=()=>{
        this.setState({
            isOpenPop: true,
            message: 'Successfully received !'
        });

    }
    settings=()=>{
        this.setState({
            settings:true,
            wallet:false,
            home:false,
            navigate:false
        })
    }
    home=()=>{
        this.setState({
            settings:false,
            wallet:false,
            home:true,
            navigate:false
        })
    }
    navigate=()=>{
        this.setState({
            settings:false,
            wallet:false,
            home:false,
            navigate:true
        })
    }
    wallet=()=>{
        this.setState({
            settings:false,
            wallet:true,
            home:false,
            navigate:false
        })

    }
    
    closePopup = () => {
        this.setState({
            isOpenPop: false,
            message: ''
        });
        }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.todostyle}>
                {this.state.isOpenPop && (
                    <DialogBox
                        value={this.state.isOpenPop}
                        res={this.state.message}
                        closePopup={this.closePopup}
                    />
                )}             
                <Grid container >
                    <Grid item xs={12}>
                        <h4 className={classes.header}>{this.state.apidata? this.state.apidata.account_name: null}</h4>     
                    </Grid>
                    {this.state.wallet && (
                        <>
                    <Grid item xs={12}>
                        <div className={classes.gradient}>
                            <div className={classes.top}>
                                <span className={classes.eos1}>{this.state.apidata.core_liquid_balance?this.state.apidata.core_liquid_balance.split('.')[0]:null}. </span>
                                <span className={classes.eos2}>{this.state.apidata.core_liquid_balance?this.state.apidata.core_liquid_balance.split(' ')[0].split('.')[1]:null}</span>
                                <img className={classes.eosicon}src={Eos}  alt ='EOS'/>
                            </div>
                            <div className={classes.dollar}>
                                <span >= 39.60 $ </span>                              
                            </div>
                           
                            <div className={classes.buttonstyle}>
                                <StyledButton onClick={this.buybutton}>BUY</StyledButton>
                                <StyledButton onClick={this.sendbutton}>SEND</StyledButton>
                                <StyledButton onClick={this.receivebutton}>RECEIVE</StyledButton>
                            </div>
                            <div>
                                <span className={classes.textstyle1}>with </span>
                                <span className={classes.textstyle2}>coinbase</span>
                            </div>
                            <div className={classes.textstyle3} >
                                <span className={classes.textstyle4} >
                                    STAKED
                                </span>
                                <div className={classes.textstyle5}>
                                    <span > 1.0000 </span>
                                    <img src={Eos2} className={classes.textstyle6} alt ='EOS'/>                                           
                                </div>                              
                            </div> 
                            
                              
                            
                        </div>
                        
                       
                    </Grid>
                    <Grid item xs={12} className={classes.textstyle7}>
                        <span className={classes.textstyle8}>RESOURCES</span>
                   
                        <Progresstile  progress={{staked:'0.2000',name:'NET',ram:this.state.apidata.net_limit?this.state.apidata.net_limit.used:null ,ram2:this.state.apidata.net_limit?this.state.apidata.net_limit.available:null,percentage:Math.round(this.state.apidata.net_limit?this.state.apidata.net_limit.used/this.state.apidata.net_limit.available*100:null),value:this.state.apidata.net_limit?this.state.apidata.net_limit.used/this.state.apidata.net_limit.available*100:null}}></Progresstile>
                        <Progresstile  progress={{staked:'0.8000',name:'CPU',ram:this.state.apidata.cpu_limit?this.state.apidata.cpu_limit.used:null ,ram2:this.state.apidata.cpu_limit?this.state.apidata.cpu_limit.available:null,percentage:Math.round(this.state.apidata.cpu_limit?this.state.apidata.cpu_limit.used/this.state.apidata.cpu_limit.available*100:null),value:this.state.apidata.cpu_limit?this.state.apidata.cpu_limit.used/this.state.apidata.cpu_limit.available*100:null}}></Progresstile>
                        <Progresstile  progress={{staked:'',name:'RAM',ram:this.state.apidata.ram_usage?this.state.apidata.ram_usage:null ,ram2:this.state.apidata.ram_quota?this.state.apidata.ram_quota:null,percentage:Math.round(this.state.apidata.ram_quota?this.state.apidata.ram_usage/this.state.apidata.ram_quota*100:null),value:this.state.apidata.ram_quota?this.state.apidata.ram_usage/this.state.apidata.ram_quota*100:null}}></Progresstile>
                    </Grid>
                    </>)}
                    {this.state.settings && (
                         <Grid item xs={12}>
                            <div className={classes.template}>
                                <h1> Settings</h1>
                            </div>
                         </Grid>
                     )}
                     {this.state.home && (
                         <Grid item xs={12}>
                            <div className={classes.template}>
                                <h1> Home</h1>
                            </div>
                         </Grid>
                     )}
                     {this.state.navigate && (
                         <Grid item xs={12}>
                            <div className={classes.template}>
                                <h1> Navigate</h1>
                            </div>
                         </Grid>
                     )}
                    <Grid item xs={12}>
                        <div className={classes.navigations}>
                           <SettingsIcon fontSize='large' color={this.state.settings===true?'secondary':'disable'} cursor='pointer' onClick={this.settings}></SettingsIcon>
                           <AccountBalanceWalletIcon fontSize='large'  color={this.state.wallet===true?'secondary':'disable'} cursor='pointer' onClick={this.wallet}></AccountBalanceWalletIcon>
                           <HomeIcon fontSize='large' color={this.state.home===true?'secondary':'disable'} cursor='pointer' onClick={this.home} ></HomeIcon>
                           <ExploreIcon fontSize='large' color={this.state.navigate===true?'secondary':'disable'} cursor='pointer' onClick={this.navigate}></ExploreIcon>
                        </div>
                    </Grid>
                 
                </Grid>              
            </div>
        )
    }
}

export default withStyles(styles)(MainComponent)