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
            const errors = [];
            Object.entries(response.errors).map(([key, val]) => {
               const value = Array.isArray(val)
                  ? val.reduce((acc, v) => acc + v, '')
                  : val;
               errors.push(`${key} ${value}`);
            });
            return Promise.reject(new Error(JSON.stringify(errors)));
         } else if (response.error) {
            return Promise.reject(new Error(JSON.stringify([response.error])));
         } else {
            return response;
         }
      });
}
