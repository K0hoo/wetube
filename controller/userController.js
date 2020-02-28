import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
}

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("Join", { pageTitle: "Join" })
    } else {
        // To do: register user
        // To do: log user in
        res.redirect(routes.home);
    }
}

export const getLogin = (req, res) => res.render("login", { pageTitle: "Log in" });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    // To do: Processing Log out
    res.redirect(routes.home);
}

export const userIndex = (req, res) => res.render("users", { pageTitle: "Users" });
export const userEdit = (req, res) => res.render("editProfile", { pageTitle: "Edit profile" });
export const userChangePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User detail" })