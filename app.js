const urlNames = "https://api.nationalize.io?name=";
const name = prompt("insert name");

const countryNameResponse = async () => {
  const response = await fetch(`${urlNames}${name}`);
  const jsonResponse = await response.json();

  return jsonResponse;
};

const countries = async () => {
  if (name !== null) {
    try {
      const countries = await countryNameResponse();
      const map = countries.country.map((ans) => ans.country_id);
      console.log(map);
      alert(
        `La estadistica dice que lo mas probables es que ${name} exista en los sig. paises: ${map}`
      );
    } catch (error) {
      alert("hubo un error en el analisis");
      console.log(error);
    }
  }
};
countries();
