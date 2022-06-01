import { ERROR_PHOTO, ERROR_TODOS, GET_PHOTOS, GET_TODOS, LOADING_PHOTOS, LOADING_TODOS } from "./actionsType"

export const getTodos = (data)=> ({
    type: GET_TODOS,
    payload: data
});

export const setLoading = ()=> ({
    type: LOADING_TODOS
});

export const errorTodos = (error) => ({
    type: ERROR_TODOS,
    payload: error.toString()
});

export const getPhotos = (data) => ({
    type: GET_PHOTOS,
    payload: data,
});

export const setLoadingPhoto = () => ({
    type: LOADING_PHOTOS,
});

export const errorPhoto = (error) => ({
    type: ERROR_PHOTO,
    payload: error.toString()
})