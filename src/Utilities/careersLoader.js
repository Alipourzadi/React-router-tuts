async function careersLoader() {
  const response = await fetch("http://localhost:4000/careers")
    .then((res) => res.json())
    .catch((error) => {
      throw Error(error);
    });

  return response;
}

export default careersLoader;
