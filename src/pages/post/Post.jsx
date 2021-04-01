import React from "react";
import { connect } from "react-redux";

import MapStateToProps from "../../components/MapStateToProps";
import MapDispatchToProps from "../../components/MapDispatchToProps";

const Post = ({ post, deletePost, history }) => {
  const handleDelete = () => {
    deletePost(post.id);
    history.push('/');
  };

  return (
    <div className="post">
      {post ? (
        <div className="post_content">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={handleDelete}>Delete article</button>
        </div>
      ) : (
        <p>L'article n'existe pas</p>
      )}
    </div>
  );
};

export default connect(MapStateToProps, MapDispatchToProps)(Post);
