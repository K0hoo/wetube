import routes from "../routes";
import Video from "../models/Video"

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        throw Error("lala");
        res.render("home", { pageTitle: "Home", videos });
    } catch(error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
}

export const search = (req, res) => {
    const { query: { term: searchingBy } } = req;
    res.render("search", { pageTitle: "Search", searchingBy });
}

export const videoIndex = (req, res) => {
    res.render("videos", { pageTitle: "Videos" });
}

export const getUpload = (req, res) => res.render("uploadVideo", { pageTitle: "Upload Video" });

export const postUpload = async (req, res) => {
    const { body, file } = req;
    console.log(body, file);
    /*
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    */
    res.render("uploadVideo", { pageTitle: "Upload Video" });
    // To do: Upload and Save video
    // res.redirect(routes.videoDetail(newVideo.id));
}

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });

export const videoEdit = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const videoDelete = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });