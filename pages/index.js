import React from 'react'
import ReactDOM from 'react-dom'
import 'isomorphic-fetch'

import Config  from '../components/Config'

import Header  from '../components/Header'
import BlogPost  from '../components/BlogPost'

export default class extends React.Component {

    static async getInitialProps() {
        const data = await fetch(`${Config.serverUrl}?json=1`)
        const res = await data.json()
        return { res }
    }
    
    
    render() {
        return (
            <div className="main-body">
                <Header />
                <BlogPost />
            </div>
        )
    }
}