import React from 'react'
import ReactDOM from 'react-dom'
import 'isomorphic-fetch'

import Header from '../components/Header'

export default class extends React.Component {
    render() {
        return (
            <div className="main-body">
                <Header />
            </div>
        )
    }
}