import React from "react"

export default class myForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            value:"placeholder"
        }
    }

    valueChange(e){
        this.setState({
            value:e.target.value
        })
    }

    getInfo(){
        console.log(this.state.value)
    }

    render(){
        return(
            <div>
                表单=>
                <input type="text" value={ this.state.value } onChange={ this.valueChange.bind(this) }/>
                <button onClick={ this.getInfo.bind(this) }>获取输入值</button>
            </div>
        )
    }
}