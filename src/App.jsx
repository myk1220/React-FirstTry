import React from 'react';
import Nav from './components/Nav'
import Comp from './components/component'
import MyForm from './components/myForm'
import FormDom from './components/formDom'
import Parent from './components/parent'
import Connect from './components/connect'
import api from './api/index'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state= {
        title:'first'
    }
  }

  // async componentDidMount(){
  //   api.indexMovement.getIndexMovement()
  //   .then((res) => { return res.json(); })
  //   .then((data) => {console.log(data)});
  //   api.indexOther.getOther()
  //   .then((res) => { return res.json(); })
  //   .then((data) => {console.log(data)})

  //   //setState 在控制内时属于异步，这时处理方案可以通过es6 async及await配合使用  
  //   //或者使用setState第二个参数，回调函数中进行下一步操作

  //   await this.setState({
  //      title : "change"
  //   })

  //   console.log(this.state.title);

  // }


  // 跨域问题处理方案：
  //     1、package.json文件中配置
  //         "proxy" : "URL"
  //     2、手动配置，首先安装依赖
  //        npm install http-proxy-middleware --save
  //        创建setupProxy.js文件并进行配置
  //  注意：创建的setupProxy.js文件要与运行主文件处于同一文件下

  componentDidMount(){
    fetch('/api/test')
    .then(res => res.json())
    .then(data => console.log(data))
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
