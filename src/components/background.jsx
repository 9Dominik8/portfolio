import React, {  useEffect } from "react";
import './background.css'

function Background(){

    useEffect(() => {

        const bubbles = document.getElementsByClassName(["bubble"])

        for (let i = 0; i <bubbles.length; i++) {
            let Left = (Math.floor(Math.random() * (100 - 0) + 0)+"%");
            let Duration = (Math.floor(Math.random() * (8 - 4) + 4)+"s");
            let Delay = (Math.floor(Math.random() * (3000 - 100) + 6)+"ms");
            let Anim = Math.floor(Math.random() * (3 - 1) + 1);
            
            bubbles[i].style.setProperty("--left", Left);
            bubbles[i].style.setProperty("--delay", Delay);
            bubbles[i].style.setProperty("--duration", Duration);
            
            switch(Anim) {
                case 1:
                    bubbles[i].style.setProperty("--animation", "float");
                break;
                case 2:
                    bubbles[i].style.setProperty("--animation", "float-right");
                break;
                case 3:
                    bubbles[i].style.setProperty("--animation", "float-left");
                break;
            }          
        }

    }, []);


    return (
        <>
            <div className="wrapper">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
        </>
    )

}

export default Background