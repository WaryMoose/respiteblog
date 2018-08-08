import React from 'react'


export default class BlogPost extends React.Component {
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    render() {
        return (
            <div className="blog-post">
                <PostDate month={ this.months[5] } date={ 30 } year={ 2018 }/>
                <Post />
            </div>
        )
    }
}

function Post(props) {
    return (
        <div className='post'>
            <h1><a href="#">This is a sample title.</a></h1>
            <h5>Post by <a href="/aboutme" className='author red'>Oshan</a></h5>

            <div className='post-content'>
                <img className='featured-image' src='static/images/image1.jpg' />
                <p className="excerpt">
                    Lorem ipsum dolor sit amet, et sonet
                    debitis iudicabit mel. Sit ea congue eripuit assueverit, vim agam
                    epicuri officiis an. Sit at impetus voluptua, duo at atqui
                    accusamus principes. Ludus consul euripidis his ad, te natum mutat ignota nec.
                </p>
            </div>
            
        </div>
        )
}
function PostDate(props) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var month = months.indexOf(props.month)
    var date = props.date
    if (month < 10) {
        month =  "0" + month
    }
    if (date < 10) {
        date =  "0" + date
    }
    return (
        <div className="post-date">
            <a href={`/${props.year}/${month}/${date}`}>
                <h4>{ props.month }</h4>
                <h5>{ props.date }</h5>
            </a>
        </div>
    )
}