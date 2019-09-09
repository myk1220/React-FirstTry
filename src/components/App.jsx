import React from 'react';
import Nav from './Nav'
import Comp from './component'
import MyForm from './myForm'
import FormDom from './formDom'
import Parent from './parent'
import Connect from './connect'
import api from '../api/index'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state= {
        title:'first'
    }
  }

  componentDidMount(){
    api.indexMovement.getIndexMovement()
    .then((res) => { return res.json(); })
    .then((data) => {console.log(data)})
  }

  clickHander = () => {
    this.setState({
      title:'change',
    })
  }

  render(){
    return (
      <div>
        {/* <Nav />
        <Nav title='地址'/> */}
        {/* <Comp title={ this.state.title }/>
        <button onClick={this.clickHander }>修改props</button> */}
        {/* <Parent /> */}
        {/* <Connect /> */}
      </div>  
  );}

}

export default App;
