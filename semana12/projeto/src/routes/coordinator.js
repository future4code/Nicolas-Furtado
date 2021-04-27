export const goToLogin = (history) => {
  history.push("/login")
}
export const goToSignup = (history) => {
  history.push("/signup")
}
export const goToFeed = (history) => {
  history.push("")
}
export const goToPost = (history, id) => {
  history.push(`/post/${id}`)
}