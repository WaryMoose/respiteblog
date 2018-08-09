import React from 'react'
import HEAD from 'next/head'
import Link from 'next/link'

export default class Header extends React.Component {
    render(){
        return (
            <div>
                <HEAD >
                    <meta charSet='UTF-8' />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>This is title</title>
                    <link href="https://fonts.googleapis.com/css?family=Bad+Script|Nothing+You+Could+Do|Euphoria+Script|Roboto|Roboto+Mono|PT+Sans|Quicksand" rel="stylesheet" />
                    <link rel='stylesheet' href='static/build/css/index.css' />
                </HEAD>
                <nav>
                    <Link href='/'><a>home</a></Link>
                    <Link href='/aboutme'><a>bio</a></Link>
                    <Link href='/categories'><a>categories</a></Link>
                    <Link href='/tags'><a>tags</a></Link>
                </nav>
                <div className="brand-logo">
                    <h2 className='logo'><Link href='/'><a>OSHAN</a></Link></h2>
                </div>
            </div>
        )
    }
}