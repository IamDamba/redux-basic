import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import MapStateToProps from "../../components/MapStateToProps";

const Home = ({ posts }) => {
  const postData = posts.length ? (
    posts.map((post) => {
      return (
        <div className="base" key={post.id}>
          <Link to={`/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
        </div>
      );
    })
  ) : (
    <p>Aucun article pour le moment</p>
  );
  return (
    <div className="home">
      <h4>Home Page</h4>
      {postData}
    </div>
  );
};

export default connect(MapStateToProps)(Home);
