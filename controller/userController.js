export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");

export const userIndex = (req, res) => res.render("users");
export const userEdit = (req, res) => res.render("editProfile");
export const userChangePassword = (req, res) => res.render("changePassword");
export const userDetail = (req, res) => res.render("userDetail")