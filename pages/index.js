import React from 'react'
import ReactDOM from 'react-dom'
import 'isomorphic-fetch'

import _config  from '../components/Config'

import Header  from '../components/Header'
import BlogPost  from '../components/BlogPost'

export default class extends React.Component {

    static async getInitialProps() {
        const data = await fetch(`${_config.serverUrl}?json=1`)
        const res = await data.json()
        return { res }
    }
    
    
    render() {
        return (
            <div className="main-body">
                <Header />
                {
                    this.props.res.posts.map((item, i) => {
                        return <BlogPost key={ i } post={ item }/>
                    })
                }
            </div>
        )
    }
}