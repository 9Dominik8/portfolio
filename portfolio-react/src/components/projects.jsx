import './projects.css'

function MyProjects(){

    return(
        <>
        <div className='projects'>
            <h1>My Projects</h1>
            <div className='projects-cont container flex-container margin-TB-100'>
                <div className='projects-item'>
                    <h2>Player Registry</h2>
                    <p>Written in PhP the app is aiming to imporve overview over sold items.
                        It's designed for phones of tablets with ease of use for employees.
                        Everything running locally in our arena with import / export to MkSoft.
                        Basically it's simple ui for MkSoft with events and players tracking capabilities.
                    </p>
                    <div className='registry-img'></div>
                </div>

                <div className='projects-item'>
                    <h2>The Dominator</h2>
                    <p>From zero knowledge in C++ or C# it took 9 days to come up with first prototype. In that time it was only simple time or points counter. Fast forward few months and now it has wifi connectivity and ability to modify software running in our CQB Arena which opened up new possibilities such as new game modes or control multiple dominators via local server</p>
                    <div className='dominator-img'></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MyProjects