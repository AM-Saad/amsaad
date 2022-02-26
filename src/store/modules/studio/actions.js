
import Studio from '@/api/Studio';
import Auth from '@/api/auth';

const checkAuth = (res, dispatch) => {
  if (res.code == 401) {
    return dispatch('logout', null, { root: true });
  }
}


const fetchArticles = async ({ commit, state, rootState, dispatch }) => {
  const res = await Studio.fetchArticles(rootState.url)
  const blogArticles = await fetch(
    "https://abdelrahman-saad.cc/api/articles"
  );
  const blogArticlesJson = await blogArticles.json();
  res.json.forEach(i => {
    i.image = rootState.url + "/" + i.image;
    i.source = "server";
  });

  blogArticlesJson.articles.forEach(i => {
    i.image = "https://abdelrahman-saad.cc/" + i.image;
    i.source = "api";
  });
  console.log(blogArticlesJson)

  let allarticles = [...blogArticlesJson.articles, ...res.json];
  
  state.ready += 1
  commit('setArticles', allarticles)
  return res.json
};

const getAllProjects = async ({ commit, state, rootState, dispatch }) => {
  const res = await Studio.getAllProjects(rootState.url)
  checkAuth(res, dispatch)
  // !res.state && commit('msg', { msg: res.msg, type: 'warning' }, { root: true })
  res.state && commit('updateProjects', res.json.reverse())
  state.ready += 1
  return res.state ? true : false
};

const react = async ({ commit, state, rootState, dispatch }, { id, reaction }) => {
  const res = await Studio.react(id, reaction, rootState.url, state.jwt)
  checkAuth(res, dispatch)
  res.state && commit('updateReaction', { reaction: reaction, id: id, item: 'articles', reactions: res.json.reactions })
  return res.state ? true : res
}
const newview = async ({ rootState }, { id, item }) => {
  const res = await Studio.newview(id, item, rootState.url)
  return res.state ? true : res
}


const signup = async ({ rootState }, { data }) => {
  const res = await Auth.signup(data, rootState.url)
  return res.state ? true : false
}

const login = async ({ commit, rootState }, { data }) => {
  const res = await Auth.login(data, rootState.url)
  res.state && commit('authenticate', res.json)
  return res.state ? true : false
}


const setArticles = async ({ commit, rootState }, { articles }) => {
  return commit('setArticles', articles)

}

export default {
  fetchArticles,
  getAllProjects,
  react,
  signup,
  login,
  newview,
  setArticles
};