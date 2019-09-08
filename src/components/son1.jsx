import React from "react"

export default class Son1 extends React.Component{

    constructor(props){
        super(props)
        this.state={
            num:10
        }
    }

    costMoney(){
        this.props.changeMoney(this.state.num)
    }



    render(){
        return(
            <div>
                Money:
                <div>{ this.props.money }</div>
                <button onClick={this.costMoney.bind(this)}>son1花钱</button>
            </div>
        )
    }
}