import React from 'react'

export default class Cell extends React.Component{
        constructor(props){
            super()
            this.state = {
                color: props.value
            }
        }

    changeColor = () => {
        console.log(`before setState: ${this.state.color}`)
        this.setState({color: '#333'})
    }

render(){
    return (
        <div className='cell' onClick={this.changeColor} style={{backgroundColor: this.state.color}} ></div>
    )
}

}