export const goToLogin = (history) => {
  history.push("/")
}
export const goToSignup = (history) => {
  history.push("/signup")
}
export const goToFeed = (history) => {
  history.push("/feed")
}
export const goToPost = (history, id) => {
  history.push(`/post/${id}`)
}