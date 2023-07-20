import { galleryAPI } from "../../API/api"
import { GET_GALLERY_DATA } from "../reducers/galleryReducer"
import { AppDispatch } from "../store/store"

export const getGalleryDataThunk = () => async (dispatch: AppDispatch) => {
    try {
        const response = await galleryAPI.getGallery()
        dispatch({ type: GET_GALLERY_DATA, gallery: response.data })
    } catch (e) {
        console.warn(e)
    }
}