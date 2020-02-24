import React from 'react'
function Header(){
    const Headerstyle={
        height: 100,
        backgroundColor: 'white',
        color: 'black',
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return( <header style={Headerstyle}></header>)
   
}
export default Header