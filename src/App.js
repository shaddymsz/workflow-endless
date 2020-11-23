import './App.css';
import Sidebar from './component/sidebar';
import Header from './component/header';
import Landing from './component/landing';
import React from 'react'
import Modal from './component/modal'

function App() {
  return (
    <div className="App"> 
        <Header />     
        <Sidebar/>
        
        <div className="mcw cv">
        <div className="tabs">
       <Tabs>
         <Tab label="Tab 1">
           <Modal />
         </Tab>
         <Tab label="Tab 2">
         <Modal />
         </Tab>
         <Tab label="Tab 3">
         <Modal />
         </Tab>
         <Tab label="Tab 4">
         <Modal />
         </Tab>
         <Tab label="Tab 5">
         <Modal />
         </Tab>
       </Tabs>
      </div>
      <Landing />
        </div>
    </div>
  );
}
class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };
  render(){
    
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
   
  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}


export default App;
