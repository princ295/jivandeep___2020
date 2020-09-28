
import { imageApi } from "./../../utils/api/";


const UploaderAction = {
   UploadData: (postdata) => {
    console.log('image api method calling........')
    return imageApi
      .uploadImage(postdata).then(res=>{
        console.log(res)
        return res
      })
  }
}

export default UploaderAction;