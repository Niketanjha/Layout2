import React from 'react';
import './App.css';
import Cards from './Components/Cards';
import HeadBar from './Components/Headbar';
import NavBar from './Components/NavBar';;

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
        <NavBar mainText="Layout 3" text1="About" text2="Services" text3="Contact"
        backgroundColor="#222222" color="#70706E" />

      <div>
        <div className="marginAll">      
          <HeadBar heading="Sample Heading"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elt. lpsa, ipsam, eligendi, in quo sunt possimus non
          incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat. "
          buttonText="Call to action!" />
        </div>
        
        <div className="line">
          <div className="heading"><p>Latest Features</p></div>
        </div>
        {this.state.cardInfo.map((card, index)=>{
          return(
              <div className="row">
                <div className="column">
                  <Cards 
                    cardImageText="800 x 500" cardName="Feature Label"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    button1="Buy now!" button2="More info"/>
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

export default App; 