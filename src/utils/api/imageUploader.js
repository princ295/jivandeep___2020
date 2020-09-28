
import axios from "axios";

const baseUrl = 'https://api.cloudinary.com/v1_1/drvk8qbzb/image/upload';

export default{
    uploadImage : (postData) => axios.post(baseUrl, postData)
}



// const uploadImage = async e => {

  //   // https://api.cloudinary.com/v1_1/drvk8qbzb
  //   const res = await fetch('https://api.cloudinary.com/v1_1/drvk8qbzb/image/upload',
  //     {
  //       method: 'POST',
  //       body: data
  //     }
  //   )

  //   console.log('upload imgae  function calll.........................')
  //   console.log(res)
  //   const file = await res.json()

  //   console.log(file)
  //   console.log('----------------------------------------show image url-------------------------------------')
  //   console.log(file.url)
  //   // setImage(file.secure_url)
  //   // setLoading(false)
  // }
