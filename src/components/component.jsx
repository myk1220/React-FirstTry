import React from "react"

export default class Comp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:10
        }
    }
    
    clickhander(){
        this.setState({
            num:this.state.num+1,
        })
    }

    componentWillMount(){
        console.log('组件渲染之前：'+'componentWillMount')
    }

    componentDidMount(){
        console.log('组件渲染之后：'+'componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('是否重新渲染：'+'shouldComponentUpdate')
        if(nextProps.title!=this.props.title||nextState.num!=this.state.num){
            return true
          }
          return false
    }

    componentWillReceiveProps(){
        console.log('父组件props修改、重新渲染：'+'componentWillReceiveProps')
    }

    componentWillUpdate(){
        console.log('数据重新渲染之前：'+'componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('数据重新渲染之后：'+'componentDidUpdate')
    }

    render(){
        return(
            <div>
            <div>stats:{ this.state.num }</div>
            <button onClick={ this.clickhander.bind(this) }>修改stats</button>
            <div>{ this.props.title }</div>
            </div>
        )
    }
}