import React from 'react';
import Button from './Button';

class HeadBar extends React.Component{
    render(){
      {/*heading,, text, buttonText*/}
      return(
        <div className="firstText">
          <span className="sample" >{this.props.heading}</span>
          <p style={{fontWeight:"normal",
          fontFamily:"sans-serif"}}>{this.props.text}
          </p>
          <Button text={this.props.buttonText}
                  buttonBackground="#428BCA"
                  color="white"
                  borderRadius="3px"
                  border="solid black 1px"
                  width="130px"
          />
          {/* <button className="buttCall">Call to action!</button> */}
      </div>
      );
    }
  }

  export default HeadBar; 