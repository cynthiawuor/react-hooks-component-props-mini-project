import React from "react";
import Article from "./Article";
function ArticleList (props) {
    let Articles= props.posts.map((post)=> (
        <article
        key={post.id}
        title={post.tittle}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
        />
        
    ))
    return (

        <main>
            {Articles}
        </main>
    );
}
export default ArticleList;