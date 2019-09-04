import React from 'react'

export default class Nav extends React.Component{

    outText(tx){
        console.log("打印数据为"+tx)
    }

    render(){
        return(
        <div>
            <p>{ this.props.title }</p>
            <button onClick={ (e) => this.outText("传递值",e)  }>点我获取</button>
            <ul>
                <li>导航一</li>
                <li>导航二</li>
                <li>导航三</li>
            </ul>
        </div>
        )
    }
}