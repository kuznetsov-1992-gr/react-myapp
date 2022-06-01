
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPhotos, } from "../redux/reducers/photosReducer";
import { loadingPhotosSelector, photosSelector } from "../redux/selectors";


const PhotosApi = () =>{
    const photos = useSelector(photosSelector);
    const loading = useSelector(loadingPhotosSelector);
    const error = useSelector(state => state.photos.error)
    
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPhotos())
    },[]);
    
    const apdete = () => {
        dispatch(loadPhotos())
    }
  
    if(loading){
      return(
        <div>LOADING</div>
      )
        
    }
    if(error){
        <div>
        <h3>{error}</h3>
        <button onClick={apdete}>update</button>
        </div>
    }

    return(
        <div>
            {photos.map(photo => (
                <div key={photo.id}>
                    <h3>{photo.title}</h3>
                    {console.log(photo.url)}
                    <img src={photo.url} alt="photo" />
                </div> 
            ))}
        </div>
        
    )
}

export default PhotosApi;