import { serverUrl } from "./ServerUrl";
import { commonApi } from "./CommonApi";

// Api call for upload video

export const uploadVideo = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/videos`, reqBody)
}

// get all video
export const getAllVideo = async () => {
    return await commonApi("GET", `${serverUrl}/videos`, "")
}

// delete Video
export const deleteVideo = async (id) => {
    return await commonApi("DELETE", `${serverUrl}/videos/${id}`, "")
}

// to add watch History
export const addToHistory = async (reqBody) => {
    return await commonApi("POST", `${serverUrl}/history`, reqBody)
}

// To get Watch history
export const getWatchHistory = async () => {
    return await commonApi('GET', `${serverUrl}/history`, "")
}

// to delete Watch History
export const deletehistory = async (id) => {
    return await commonApi("DELETE", `${serverUrl}/history/${id}`, "")
}

// To add Category
export const addcategory = async (reqBody) => {
    return await commonApi("POST", `${serverUrl}/category`, reqBody)
}

// to get all category
export const getAllCategory = async () => {
    return await commonApi("GET", `${serverUrl}/category`, "")
}

export const deleteCategory = async(id)=>{
    return await commonApi("DELETE", `${serverUrl}/category/${id}`,"")
}
// get video details by id
export const getVideoDetailsById = async(id)=>{
    return await commonApi("GET", `${serverUrl}/videos/${id}`,"")
}

// update category
export const setVideoDetailsById = async(id, data)=>{
    return await commonApi("PUT", `${serverUrl}/category/${id}`,data)
}