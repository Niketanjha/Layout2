import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={cardInfo:[
      {id:'1', item:''},
      {id:'2', item:''},
      {id:'3', item:''},
      {id:'4', item:''},
     ]};
  }
  myFunction=()=> {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    console.log(x);
  }  

  render(){
    return(
      <div className="mainClass">
        <div className="topnav" id="myTopnav">
          <a href="#home" className="active">Layout 3</a>
          <a href="#news">About</a>
          <a href="#contact">Services </a>
          <a href="#about">Contact</a>
          <a href="#"  className="icon" onClick={this.myFunction}>
            <i className="fa fa-bars"></i>
          </a>
        </div>

        {/* <div className="navBar">
          <ul id ="navList">
            <li ><a className="firstElement" href="#">Layout 3</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>    */}

    <div>
      <div className="marginAll">
        <HeadBar heading="Sample Heading"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elt. lpsa, ipsam, eligendi, in quo sunt possimus non
        incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat. "
        buttonText="Call to action!" />
        {/* <div className="firstText">
          <span className="sample" >Sample Heading</span>
          <p style={{fontWeight:"normal",fontFamily:"sans-serif"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elt. lpsa, ipsam, eligendi, in quo sunt possimus non
            incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat. 
          </p>
          <Button text="Call to action!"
                  buttonBackground="#428BCA"
                  color="white"
                  borderRadius="3px"
                  border="solid black 1px"
                  width="130px"
          />
           <button className="buttCall">Call to action!</button> 
        </div> */}
      </div>
      <div className="line">
        <div className="heading"><p>Latest Features</p></div>
      </div>
          {this.state.cardInfo.map((card, index)=>{
            return(
                <div className="row">
                  <div className="column">
                    <div className="cards">
                      <div className="imageClass" style={{fontSize:'larger',display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <span style={{color:"#A7A7A7",fontWeight:"bold" ,fontSize:"x-large"}}>800 x 500</span>
                      </div>
                      <h3 style={{fontSize:"larger",fontFamily:'sans-serif'}}>Feature Label</h3>
                      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <Button text="Buy now!"  border="solid black 1px"/>
                      <Button text="More info" border="solid black 1px" backgroundColor="white" 
                              color="black"/>
                      {/* <button className="buyNow">Buy now!</button>
                      <button className="moreInfo">More info</button> */}
                    </div>
                  </div>
                </div>
            )
        })}
          <hr className="hrLine"></hr>
          <p className="copyright"> Copyright &copy; Your Website 2014</p>
        </div>
      </div>
    );
  }
}
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


export default App; 