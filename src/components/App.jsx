import React from 'react';
import Nav from './Nav'
import Comp from './component'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state= {
        title:'first'
    }
  }

  clickHander = () => {
    this.setState({
      title:'change',
    })
  }

  render(){
    return (
      <div>
        {/* <Nav title='音乐'/>
        <Nav title='地址'/> */}
        <Comp title={ this.state.title }/>
        <button onClick={this.clickHander }>修改props</button>
      </div>  
  );}

}

export default App;
