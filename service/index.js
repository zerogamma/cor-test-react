import datas from "../assets/resources.json";

export async function getResourcesUsingFetch() {
  console.info("Getting resources by url");
  try {
    const response = await fetch("../assets/resources.json");
    //response queda en pending porque no encuentra el resource de stackbliz el path lo remplaza con un url que no responde.
    const toJSon = await response.json();
    return toJSon;
  } catch (e) {
    console.info("problem while fetching switching to default access");
    return [];
  }
}

//acceso directo al archivo usando import el metodo getResourcesUsingFetch es para obtener por url.
export function getResources() {
  console.info("Getting resources");
  //aca deberia ir un fetch del assest pero stackblits no hace bien la conversion de response.json();
  try {
    return datas;
  } catch (e) {
    console.error("problem while fetching");
  }
}
