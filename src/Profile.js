import React, { Component } from 'react'
import me from './me.jpg'

import PR from './PR'





export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: "Slim Dridi",
            age: 22,
            profession: " Gamer",
            count: 0,


        }
    }


    componentDidMount() {
        setInterval(() => {
            let { count } = this.state;
            this.setState({
                count: count + 1

            })
        }, 1000)
    }



    render() {
        let { count } = this.state;

        return (

            <div >

                {count}

                <h1 style={{ color: 'blue' }}>Hello!!</h1>

                <h4>I'm {this.state.fullName}</h4>

                <p> I have {this.state.age} YO and i'm a {this.state.profession}</p>

                <img style={{ borderRadius: ' 50px', width: '20%' }} src={me} alt="my pic" />
                <br />



            </div>


        )
    }

}


export default Profile
