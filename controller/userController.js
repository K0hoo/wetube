export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Log in" });
export const logout = (req, res) => res.render("logout", { pageTitle: "Log out" });

export const userIndex = (req, res) => res.render("users", { pageTitle: "Users" });
export const userEdit = (req, res) => res.render("editProfile", { pageTitle: "Edit profile" });
export const userChangePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User detail" })