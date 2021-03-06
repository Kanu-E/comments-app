import React from"react";


const CommentDetail =(props)=>{
    
    return(
        <div className="comment">          
            <a href="/" className="avatar">
                <img alt='avatar' src={props.image}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metaData">
                    <span className="date"> {props.time}</span>
                </div>
                <div className="text">
                   {props.content}
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default CommentDetail