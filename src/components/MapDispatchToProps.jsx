import { deletePost } from "../actions/postActions";

const MapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default MapDispatchToProps;
