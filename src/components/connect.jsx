import React from "react";

export default class Connect extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:{},
        }
    }

    componentDidMount(){
        fetch('http://iwenwiki.com/api/blueberrypai/getIndexMovement.php')
        .then(res => {
           return res.json()
        })
        .then(data => {
            this.setState({
                list:data
            })
            console.log(this.state.list.movement)
        })
    }

    render(){
        return(
            <div>
                    {   
                        this.state.list.movement ?
                        <ul>
                            {
                                this.state.list.movement.map((data,index) => {
                                return (
                                    <li key={ index }>
                                        <h3>{ data.title }</h3> 
                                        <p>{ data.writer }</p>
                                        <p>{ data.content }</p>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                        : <div>数据加载中...</div> 
                    }
            </div>
        )
    }
}