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

  async componentDidMount(){
    api.indexMovement.getIndexMovement()
    .then((res) => { return res.json(); })
    .then((data) => {console.log(data)});
    api.indexOther.getOther()
    .then((res) => { return res.json(); })
    .then((data) => {console.log(data)})

    //setState 在控制内时属于异步，这时处理方案可以通过es6 async及await配合使用  
    //或者使用setState第二个参数，回调函数中进行下一步操作
    
    await this.setState({
       title : "change"
    })

    console.log(this.state.title);

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
