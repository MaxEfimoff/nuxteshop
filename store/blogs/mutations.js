function SET_BLOG_POSTS(state, {resource, blogs}) {
  state.blogs[resource] = blogs
}

function SET_BLOG_POST(state, blog) {
  state.blog = blog;
}

export {
  SET_BLOG_POSTS,
  SET_BLOG_POST
};