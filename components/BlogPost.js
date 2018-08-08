import React from 'react'


export default class BlogPost extends React.Component {
    render() {
        return (
            <div className="blog-post">
                <PostDate month={ this.props.post.date.substr(5, 2) } date={ this.props.post.date.substr(8, 2) } year={ this.props.post.date.substr(0, 4) }/>
                <Post
                    excerpt={ this.props.post.excerpt }
                    author= { this.props.post.author.first_name }
                    title={ this.props.post.title }
                    image= { this.props.post.thumbnail }
                    slug = { this.props.post.slug }
                    category= { this.props.post.categories[0].slug }
                    />
            </div>
        )
    }
}

function Post(props) {
    return (
        <div className='post'>
            <h1><a href={ props.slug }>{ props.title }</a></h1>
            <h5>Post about <a href={`/category/${props.category}`}>{ props.category }</a> by <a href="/aboutme" className='author red'>{ props.author }</a></h5>

            <div className='post-content'>
                <img className='featured-image' src={ props.image } />
                <div className="excerpt" dangerouslySetInnerHTML={{ __html: props.excerpt }}></div>
            </div>
        </div>
        )
}
function PostDate(props) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var month = props.month
    if (month < 10) {
        month = month.substr(1, 1)
    }
    var date = props.date
    return (
        <div className="post-date">
            <a href={`/${props.year}/${month}/${date}`}>
                <h4>{ months[month] }</h4>
                <h5>{ props.date }</h5>
            </a>
        </div>
    )
}