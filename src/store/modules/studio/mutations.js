const authenticate = (state, authData) => {
  state.jwt = authData.token
  state.user = authData.user.name
  state.isAuth = true
  const remainingMilliseconds = 60 * 60 * 1000;
  state.sessionExpiryDate = new Date(
    new Date().getTime() + remainingMilliseconds
  );

  localStorage.setItem('ut', state.jwt)
  localStorage.setItem('uexpiryd', state.sessionExpiryDate)
  localStorage.setItem('u', state.user)
}

const checkauthintecated = (state) => {
  const expiryDate = localStorage.getItem("uexpiryd");
  const jwtToken = localStorage.getItem("ut");
  const oneday = 60 * 60 * 24 * 1000
  if (new Date(expiryDate) <= oneday || !jwtToken) {
    state.isAuth = false;
  } else {
    state.jwt = jwtToken
    state.sessionExpiryDate = expiryDate
    state.isAuth = true
  }
}


const logout = (state) => {

  localStorage.removeItem('jwt')
  localStorage.removeItem('sessionExpiryDate')
  state.jwt = null
  state.isAuth = false

}

const setArticles = (state, articles) => {
  state.articles = articles;
};



const setProjects = (state, projects) => {
  state.projects = projects;
};
const updateReaction = (state, data) => {
  const exitem = state[data.item].find(i => i._id.toString() === data.id.toString())
  exitem.reactions = data.reactions
};

export default {
  setArticles, setProjects, updateReaction, authenticate, checkauthintecated, logout
};