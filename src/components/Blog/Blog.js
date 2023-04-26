import React from 'react'

function Blog() {
    let style = {
        width: "100%",
        height: "100vh",
        background: "pink",
        paddingTop: "100px"
    }
    return (
        <div style={style} id='blog' className='blog'>
            <h1>Blog</h1>
        </div>
    )
}

export default Blog