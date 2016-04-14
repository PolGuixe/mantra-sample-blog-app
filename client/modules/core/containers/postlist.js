import PostList from '../components/postlist.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('posts.list').ready()) {
    const posts = Collections.Posts.find().fetch();
    onData(null, {posts});
  }else{
    const posts = Collections.Posts.find().fetch();
    if(posts){
      onData(null, {posts});
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(PostList);
