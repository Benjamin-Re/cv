import React from 'react'
import './Canvas.css'

function Canvas(props) {
    return (
        <>  
            <ul>
                {Object.entries(props.content).map(([key, value]) => (
                    <React.Fragment key={key}>
                        <li>{key}: {value}</li>
                    </React.Fragment>
                ))}
            </ul>
        </>
    ) 
}

function SubCanvas (props) {
    return (
        <>
            <h3>{props.title}</h3>
            <Canvas {...props}></Canvas>
        </>
    )
}

function HeaderCanvas (props) {
    return (
        <div id='header-container'>
            <h1>{props.content.name}</h1>
            <div id='header'>
                <div>{props.content.email}</div>
                <div>{props.content.town}</div>
            </div>
        </div>
    )
}

export { Canvas, HeaderCanvas, SubCanvas };


