import './about.css'
import React, { useRef } from "react";

function About() {


    return (
        <>
            <h1>Something about me</h1>
            <div className="container border">
                <div className='about-me'>
                    <p>
                        I started learning HTML, CSS and JavaScript through The Odin Project which which wasn't bad but it isn't my style of learning. I'm more of a reverse engineer guy which contributes to the ability to adapt quickly in new code environments because i'm more interested in how things work and why they work that way.
                    </p>
                    <h2>
                        What happens when you combine your hobbies?
                    </h2>
                    <p>
                        As a part of an airsoft community our team wanted to airsoft better known and more accessible to general public. In addition to organizing public events our team rented old manufactory which we rebuilt into indoor airsoft field. Then I started developing "Dominator" with the help of my brother putting together hardware. 
                    </p>
                    <a href="https://www.facebook.com/www.cqbsl.sk" target="_blank" className='border btn-st'>Check out our arena</a>
                </div>
            </div>
        </>
    )

}

export default About