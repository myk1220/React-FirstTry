import React from "react"

export default class FormDom extends React.Component{

    constructor(props){
        super(props)
        this.input = React.createRef();
        this.info = React.createRef();
    }

    getInfo(){
        console.log(this.input.current.value)
        console.log(this.info.current.value)
    }

    render(){
        return(
            <div>
                表单=>
                <input type="text" ref={ this.input } />
                <input type="text" ref={ this.info } />
                <button onClick={ this.getInfo.bind(this) }>获取输入值</button>
            </div>
        )
    }
}