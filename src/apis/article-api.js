const list = () => {
  return fetch("/api/article", {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const read = params => {
  return fetch(`/api/article/${params}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


export { list, read };
