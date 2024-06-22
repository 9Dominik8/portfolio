import './intro.css'
import { Icon } from '@iconify-icon/react';


function Intro() {



    return (
        <>
            
            <div className="container border" style={{top:-50, paddingBottom:50}}>
                <div className='Profile-Pic'></div>
                <div className='icons'>
                    <a href="mailto:dominik.vdovjak@gmail.com"><Icon icon="akar-icons:linkedin-box-fill" width="48" height="48" /></a>
                    <a href="https://www.linkedin.com/in/dominik-vdovjak-a731b2296/" target="_blank"><Icon icon="akar-icons:google-fill" width="48" height="48" /></a>
                </div>
                <h2>Hi, i'm Dominik<br></br>
                    passionate self-taught<br></br>
                    programmer and web designer</h2>
                
            </div>
        </>
    )

}

export default Intro