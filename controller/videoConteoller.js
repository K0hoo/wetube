import { videos } from "../db";
export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
}

export const search = (req, res) => {
    const { query: { term: searchingBy } } = req;
    res.render("search", { pageTitle: "Search", searchingBy });
}

export const videoIndex = (req, res) => res.render("videos", { pageTitle: "Videos" });

export const videoUpload = (req, res) => res.render("uploadVideo", { pageTitle: "Upload Video" });

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });

export const videoEdit = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const videoDelete = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });