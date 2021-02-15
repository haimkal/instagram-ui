  
import React from 'react'
import './PhotoAnimation.scss'
import pic1 from '../Assets/images/login1s.jpg'
import pic2 from '../Assets/images/login2s.jpg'
import pic3 from '../Assets/images/login3s.jpg'

function Animation() {
    return (
        <div className="Animation">
            <img className="pic1" src={pic1} style={{width:"250px"}} alt="img"/>
            <img className="pic2" src={pic2} style={{width:"240px"}} alt="img"/>
            <img className="pic3" src={pic3} style={{width:"300px"}} alt="img"/>
        </div>
    )
}

export default Animation