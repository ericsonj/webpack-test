import React from 'react'
import style from './style.css'

function Raw() {
    return (
        <div className="container">
            <div className="navbar">
                <div className="item">
                    <span>Logo</span>
                </div>
                <div className="v-navbar">
                    <dev className="item">
                        <span>Title</span>
                    </dev>
                    <dev className="item">
                        <span>Version</span>
                    </dev>
                    <dev className="item">
                        <span>more info</span>
                    </dev>
                </div>
            </div>
        </div>
    )
}

export default Raw;