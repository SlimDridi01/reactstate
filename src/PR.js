import React, { Component } from 'react'
import Profile from './Profile'
export class PR extends Component {


    constructor(props) {
        super(props)
        this.state = {
            btn: false

        }
    }
    handleToggle = () => this.setState({ btn: !this.state.btn })
    render() {
        return (
            <div>
                <button onClick={this.handleToggle}> Toggle</button>
                {
                    this.state.btn ? <Profile /> : null

                }
            </div>
        )
    }
}

export default PR
