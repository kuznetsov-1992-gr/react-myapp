import { errorPhoto, setLoadingPhoto, getPhotos } from "./actions"
import { ERROR_PHOTO, GET_PHOTOS, LOADING_PHOTOS } from "./actionsType"

const initialState = {
    photos: [],
    loading: false,
    error: null
}

export const photosReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOADING_PHOTOS:
            return{
                ...state,
                loading: true
            }

        case GET_PHOTOS:
            return{
                ...state,
                photos: action.payload,
                loading: false,
            }
           case ERROR_PHOTO:
               return{
                   ...state,
                   loading: false,
                   error: action.payload

               }

        default:
            return state
    }
}

export const loadPhotos = () =>{
    return async dispatch => {
        dispatch(setLoadingPhoto())
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5')
            const data = await response.json()
            
            dispatch(getPhotos(data))
        }catch(error){
            dispatch( errorPhoto(error) )
        }
    }
}