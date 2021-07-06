import React from 'react' 
class Button extends React.Component{
    render(){
      const buttonBackground=this.props.backgroundColor;
      return(
        <>
          <button style={{
            backgroundColor:this.props.backgroundColor,
            height:this.props.height,
            width:this.props.width,
            border:this.props.border,
            borderRadius:this.props.borderRadius,
            color:this.props.color
            }}>{this.props.text}</button>
        </>
      );
    }
  }

  export default Button; 