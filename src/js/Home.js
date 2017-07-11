import React, { Component } from 'react'
import '../materialize/css/materialize.css'
import '../styles/home.css'

const imgs = require.context("../../public", true, /^\.\/home\/.*\.jpg$/)

const rightImgs = imgs.keys()
const leftImgs = rightImgs.splice(0, Math.ceil(rightImgs.length / 2))

class Home extends Component {
    render() {
        return (
            <div>
                <div className="background row">
                    <div className={"banner outer-pic-wrapper col m3 hide-on-small-only offset-l1"}>
                        <div className={"inner-pic-wrapper"}>
                            <img className={"full-height"} src={leftImgs[0]}/>
                        </div>
                    </div>
                    <div className={"banner outer-pic-wrapper col m3 hide-on-small-only offset-l4 offset-m6"}>
                        <div className={"inner-pic-wrapper"}>
                            <img className={"full-height"} src={rightImgs[0]}/>
                        </div>
                    </div>
                </div>
                <div className="foreground row">
                    <div className={"center-piece col l4 m6 s10 blue darken-2 offset-l4 offset-m3 offset-s1"}>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home