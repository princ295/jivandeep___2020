export function PostData(type, userData) {
    // let BaseURL = 'http://jivandeepapi.pythonanywhere.com/';
      let BaseURL = 'https://jivandeep.herokuapp.com/';
    //let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';

    return new Promise((resolve, reject) =>{

         
      console.log(userData)
        fetch(BaseURL+type, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}