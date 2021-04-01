const initState = {
  posts: [
    {
      id: '1',
      title: 'Je suis le premier article',
      body: 'Voici le contenue du premier article'
    },
    {
      id: '2',
      title: 'Je suis le deuxieme article',
      body: 'Voici le contenue du deuxieme article'
    },
    {
      id: '3',
      title: 'Je suis le troisieme article',
      body: 'Voici le contenue du troisieme article'
    },
    {
      id: '4',
      title: 'Je suis le quatrieme article',
      body: 'Voici le contenue du quatrieme article'
    }
  ]
}

const rootReducer = (state = initState, action)=>{
  if(action.type === "DELETE_POST"){
    let newPost = state.posts.filter(post =>{
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPost
    }
  }
  return state;
}

export default rootReducer;