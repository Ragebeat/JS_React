import React from 'react'
import loading from "../../images/loading.gif";

const Preloader = (props) =>{
    return props.isFetching ? <div style={{textAlign:"center"}}><img src={loading} alt=""/></div>:null
}
export default Preloader