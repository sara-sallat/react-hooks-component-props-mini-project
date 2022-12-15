import React from "react";

import Article from "./Article";

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => {
        return (
          <Article
            title={post.title}
            preview={post.preview}
            date={post.date}
            key={post.id}
            minutes={post.minutes}
          />
        );
      })}
    </main>
  );
};

export default ArticleList;