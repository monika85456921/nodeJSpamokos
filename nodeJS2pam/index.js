const getProducts = () => {
  fetch(`http://localhost:5000/store/fruits/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      return response.json();
    })
    .then((prod) => {
      console.log(prod);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });

  // console.log(result);

  // const data = await result.json();
  // console.log(data);
};
getProducts();
