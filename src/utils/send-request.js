export function sendRequest({
   pathname,
   params = {},
   body = null,
   method = 'GET',
}) {
   const undefinedPredicate = ([, value]) => value != undefined;
   const filterdParams = Object.entries(params).filter(undefinedPredicate);
   const paramString = String(new URLSearchParams(filterdParams));
   const apiUrl = `${process.env.API_URL}/${pathname}?${paramString}`;
   const token = localStorage.getItem('jwt-token');

   console.log({ apiUrl });

   const headers = new Headers({
      'Content-Type': 'application/json',
   });

   if (token) {
      headers.append('Authorization', `Token ${token}`);
   }

   let requestOptions = {
      method,
      headers,
   };

   if (method == 'POST') {
      requestOptions.body = JSON.stringify(body);
   }

   return fetch(String(apiUrl), requestOptions)
      .then(response => response.json())
      .then(response => {
         if (response.errors) {
            return Promise.reject(JSON.stringify(response.errors));
         } else {
            return response;
         }
      });
}
