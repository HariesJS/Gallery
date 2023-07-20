import { AnyAction } from "redux";

export const GET_GALLERY_DATA = 'GalleryPage/galleryReducer/GET_GALLERY_DATA';

const initialState = {
    gallery: null,
}

export const galleryReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case GET_GALLERY_DATA: return {
            ...state,
            gallery: action.gallery
        }
        default:
            return state;
    }
}