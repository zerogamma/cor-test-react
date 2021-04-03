import datas from "../assets/resources.json";

// export async function getResources() {
//   console.info("Getting resources");
//   //aca deberia ir un fetch del assest pero stackblits no hace bien la conversion de response.json();
//   try {
//     return await datas;
//   } catch (e) {
//     console.error("problem while fetching");
//   }
// }

export function getResources() {
  console.info("Getting resources");
  //aca deberia ir un fetch del assest pero stackblits no hace bien la conversion de response.json();
  try {
    return datas;
  } catch (e) {
    console.error("problem while fetching");
  }
}
