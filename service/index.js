import datas from "../assets/resources.json";

export async function getResources() {
  console.info("Getting resources");
  //aca deberia ir un fetch del assest pero stackblits no hace bien la conversion de response.json();
  return await datas;
}
