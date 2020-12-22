import './App.css';
import Sidebar from './component/sidebar';
import Header from './component/header';
import Landing from './component/landing';
import React from 'react'
import Modal from './component/modal'
import OnBording from './component/templates/onBording'
import Nurture from './component/templates/nurture';
import ReEngagement from './component/templates/reengagement';
import CustomerRetention from './component/templates/customerRetention';
import Ecommerce from './component/templates/eCommerce';

function App() {
  return (
    <div className="App"> 
        <Header />     
        <Sidebar/>
        
        <div className="mcw cv">
        <div className="tabs">
       <Tabs>
         <Tab label="All">
           <Modal />
         </Tab>
         <Tab label="Welcome and on-boarding">
         <OnBording />
         </Tab>
         <Tab label="Nurture series">
         <Nurture />
         </Tab>
         <Tab label="Re-engagement">
         <ReEngagement />
         </Tab>
         <Tab label="Customer Retention">
         <CustomerRetention />
         </Tab>
         <Tab label="E-Commerce">
         <Ecommerce />
         </Tab>
         <Tab label="Conditional">
         <Landing/>
         </Tab>
       </Tabs>
      </div>
      
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
