import React, { Component } from 'react'
import '../materialize/css/materialize.css'
import '../styles/home.css'
import '../fonts/Arvo/Arvo-Bold.ttf'
import portrait from '../IMG_5300.png'

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
                        <div className="auto-height">
                            <div className="row no-margin">
                                <div className="col l12 m6 s12">
                                    <h4 className="col offset-s1 s10">Abby Querry</h4>
                                    <br />
                                    <h6 className="col offset-s2 s8 italic">Class of 2019</h6>
                                </div>
                                <div className="col l12 m6 s12 half-height">
                                    <img className="full-height portrait" src={portrait}/>
                                </div>
                            </div>
                        </div>
                        <div className="half-height">
                            <div className="row full-height content-wrapper">
                                <div className="scrollable content full-height">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home