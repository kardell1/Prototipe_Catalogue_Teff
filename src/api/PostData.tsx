import type { TProdCard } from "../components/TProd.ts";

export const FetchDataPost = async ({ id, product, price }: TProdCard) => {
  /**un fetching de datos  esta compuesto por :
   * una url
   * ,{ method sirve para especificar que hace el fetch : Get post delete patch put
   *  headers sirve para decir el contenido de lo que enviamos
   *  : {content-Type :  aplicaction/json}
   * body el cuerpo de la informacion, los datos:
   * }
   */
  console.log("los datos recuperados son  : " + id);
  console.log("los datos recuperados son  : " + product);
  console.log("los datos recuperados son  : " + price);

  const urlServer = "http://localhost:3000/order";
  try {
    const response = await fetch(urlServer, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        product: product,
        price: price,
      }),
    }).then((res) => res.json());
    return response;
  } catch (error) {
    return "error al conectarse al servidor";
  }
};
