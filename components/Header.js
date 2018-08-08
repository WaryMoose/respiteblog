import React from 'react'
import HEAD from 'next/head'

export default class Header extends React.Component {
    render(){
        return (
            <div>
                <HEAD >
                    <meta charSet='UTF-8' />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>This is title</title>
                    <link rel='stylesheet' href='static/build/css/index.css' /><link href="https://fonts.googleapis.com/css?family=Bad+Script|Nothing+You+Could+Do|Qwigley|Roboto|Roboto+Mono|PT+Sans|Quicksand" rel="stylesheet" />
                </HEAD>
                <nav>
                    <a href='/'>home</a>
                    <a href='/aboutme'>bio</a>
                    <a href='/categories'>categories</a>
                    <a href='/tags'>tags</a>
                </nav>
                <div className="brand-logo">
                    <h2 className='logo'><a href='/'>OSHAN</a></h2>
                </div>
            </div>
        )
    }
}