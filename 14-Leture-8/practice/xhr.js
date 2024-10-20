// const request = "https://jsonplaceholder.typicode.com/users";

// function sendRequest(method, url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open(method, url);

//     xhr.responseType = "json";

//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       }
//       resolve(xhr.response);
//     };

//     xhr.onerror = () => {
//       reject(xhr.response);
//     };

//     xhr.send();
//   });
// }

// sendRequest("GET", request)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const request = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      }
      resolve(xhr.response);
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    xhr.send(JSON.stringify(body));
  });
}

const body = {
  name: "Vladin",
  age: 18,
};

sendRequest("POST", request, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
