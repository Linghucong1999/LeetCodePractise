const authorization = function (e, t) {
    return t.isLoggedIn ? e.authenticationType + " " + e.accessToken : ""
}