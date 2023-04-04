async function careersDetailLoader({ params }) {
  const { id } = params;
  const response = await fetch("http://localhost:4000/careers/" + id).then(
    (res) => {
      if (!res.ok) {
        throw Error("Could not Find career detail page!");
      }
      return res.json();
    }
  );

  return response;
}

export default careersDetailLoader;
