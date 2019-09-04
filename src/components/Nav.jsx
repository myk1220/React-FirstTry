import React from 'react'

export default class Nav extends React.Component{


    outText(tx){
        console.log("打印数据为"+tx)
    }

    outTextX = () => {
        console.log(this)
    }

    render(){
        const info = [
            {
                id:1,
                name:"mic",
                age:10
            },
            {
                id:2,
                name:"bai",
                age:20
            },
            {
                id:3,
                name:"skime",
                age:30
            }
        ]
        const flag = true;
        return(
            <div>
                <p>{ this.props.title }</p>
                <button onClick={ (e) => this.outText("传递值",e)  }>点我获取</button>
                <button onClick={ this.outTextX }>点我获取二</button>
                { flag ? <div>渲染成功</div> : <div>等待数据中...</div> }
                { info.map((element,index) => {
                return(    
                    <ul key={element.id}>
                    <p>{ element.name }</p>
                    <p>{ element.age }</p>
                    </ul>
                )
                }) }
            </div>
        )
    }
}