
import { imageApi } from "./../../utils/api/imageUploader";


const UploaderAction = {
  UploadData: () => dispatch => {
    console.log('image api method calling........')
    imageApi
      .uploadImage().then(res=>{
          console.log(res)
      })
  }
}

export default UploaderAction;