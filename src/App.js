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

  render(){
    return(
      <div className="mainClass">
        <div className="navBar">
          <ul id ="navList">
            <li ><a className="firstElement" href="#">Layout 3</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>   

        <div>
      <div className="marginAll">
        <div className="firstText">
          <h1 className="sample" style={{fontFamily:'sans-serif',fontWeight:'200'}}>Sample heading</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elt. lpsa, ipsam, eligendi, in quo sunt possimus non
            incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat. 
          </p>
          <button>Call to action!</button>
        </div>
      </div>
      <div className="line">
        <div className="heading"><p>Latest Features</p></div>
      </div>
          {this.state.cardInfo.map((card, index)=>{
            return(
                <div className="row">
                  <div className="column">
                    <div className="cards">
                      <div className="imageClass" style={{fontSize:'larger'}}>
                        <span >800X500</span>
                      </div>
                      <h3 style={{fontSize:"large",fontFamily:'sans-serif'}}>Feature Label</h3>
                      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <button className="buyNow">Buy now</button>
                      <button className="moreInfo">More info</button>
                    </div>
                  </div>
                </div>
            )
        })}
          <hr style={{width:'88%',color:'#c0c0c0',marginLeft:'6%',marginTop:"30%"}}></hr>
          <p className="copyright"> Copyright @your Website 2014</p>
        </div>
      </div>
    );
  }
}

export default App; 