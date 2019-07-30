const list = () => {
  return fetch("https://damp-shore-63132.herokuapp.com/api/article", {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const read = params => {
  return fetch(`https://damp-shore-63132.herokuapp.com/api/article/${params}`, {
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
