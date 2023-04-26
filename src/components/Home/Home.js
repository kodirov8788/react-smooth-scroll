import React from 'react'

function Home() {

    let style = {
        width: "100%",
        height: "100vh",
        background: "cadetblue",
        paddingTop: "100px"
    }
    return (
        <div style={style} id='home' className='home'>
            <h1>Home</h1>
        </div>
    )
}

export default Home