import React from 'react'

export default class Nav extends React.Component{
    render(){
        return(
        <div>
            <p>{ this.props.title }</p>
            <ul>
                <li>导航一</li>
                <li>导航二</li>
                <li>导航三</li>
            </ul>
        </div>
        )
    }
}