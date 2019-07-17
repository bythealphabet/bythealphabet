const list = () => {
  return fetch("/api/article/", {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const create = (credentials, data )=> {
  return fetch("/api/article/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credentials.t
    },
    body: JSON.stringify(data.article)
  })
    .then(response => {
      console.log("succes article created");
      return response.json();
    })
    .catch(err => console.log(err));
};

const read = params => {
  return fetch(`/api/article/${params.articleId}`, {
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

const update = (params, credentials, data) => {
  return fetch(`/api/article/${params.articleId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credentials.t
    },
    body: JSON.stringify(data.article)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

const remove = (params) => {
  return fetch(`/api/article/${params.articleId}`, {
    method: "DELETE",
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

export { list, create, read, update, remove };
