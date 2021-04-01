const MapStateToProps = (store, onwProps) => {
  let id = onwProps.match.params.post_id;
  return {
    posts: store.posts,
    post: store.posts.find(post => post.id === id)
  }
}

export default MapStateToProps;
