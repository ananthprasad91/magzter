export const isUserLoggedIn = () => {
    return localStorage.getItem("isAuthenticated")
}