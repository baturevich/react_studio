import React, { useEffect } from 'react'
import Header from './Header'
import { connect } from 'react-redux'

const HeaderContainer = ()=>{
    let onTrans = false
    window.addEventListener('scroll',()=>{
        let top = document.body.scrollTop || document.documentElement.scrollTop
       if(top > 50){
        onTrans = true
       }
    })
    useEffect(()=>{

    },[onTrans])
    return(
        <Header onTrans={onTrans}/>
    )
}
export default connect(null,null)(HeaderContainer)