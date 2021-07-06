import React from 'react';
import Button from './Button';

export default class Cards extends React.Component{
    render(){
        return(
            <div className="cards">
                <div className="imageClass" style={{fontSize:'larger',display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <span style={{color:"#A7A7A7",fontWeight:"bold" ,fontSize:"x-large"}}>{this.props.cardImageText}</span>
                </div>
                <h3 style={{fontSize:"larger",fontFamily:'sans-serif'}}>{this.props.cardName}</h3>
                <p> {this.props.text}</p>
                <Button text={this.props.button1}  border="solid black 1px"/>
                <Button text={this.props.button2} border="solid black 1px" backgroundColor="white" 
                        color="black"/>
                {/* <button className="buyNow">Buy now!</button>
                <button className="moreInfo">More info</button> */}
            </div>
        );
    }
}
