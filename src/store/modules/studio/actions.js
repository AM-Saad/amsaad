
import Studio from '@/api/Studio';
import Auth from '@/api/auth';

const checkAuth = (res, dispatch) => {
  if (res.code == 401) {
    return dispatch('logout', null, { root: true });
  }
}


const fetch_articles = async ({ commit, state, rootState }) => {
  try {

    const res = await Studio.fetch_articles(rootState.url)

    // Fetch articles from the my blog
    const blogArticles = await fetch(
      "https://abdelrahman-saad.cc/api/articles"
    );

    const { articles } = await blogArticles.json();
    if (res.json.length > 0) {
      res.json.forEach(i => {
        i.image = rootState.url + "/" + i.image;
        i.source = "server";
      });
    }

    if (articles.length > 0) {
      articles.forEach(i => {
        i.image = "https://abdelrahman-saad.cc/" + i.image;
        i.source = "api";
      });
    }


    let allarticles = [...articles, ...res.json];

    state.ready += 1
    commit('setArticles', allarticles)
    return res.state ? true : false
  } catch (err) {
    return false
  }


};

const fetch_projects = async ({ commit, state, rootState, dispatch }) => {

  const res = await Studio.fetch_projects(rootState.url)
  checkAuth(res, dispatch)
  res.state && commit('setProjects', res.json.reverse())
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




export default {
  fetch_articles,
  fetch_projects,
  react,
  signup,
  login,
  newview,
};