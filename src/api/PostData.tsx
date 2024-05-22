
type Tpost={
  name : string,
  cellphone : string,
  price : number,
  email : string,
  amount : number,
  code : string|null
}


export const FetchDataPost = async ({ name, cellphone, price , email , amount , code }:Tpost ) => {
  /**un fetching de datos  esta compuesto por :
   * una url
   * ,{ method sirve para especificar que hace el fetch : Get post delete patch put
   *  headers sirve para decir el contenido de lo que enviamos
   *  : {content-Type :  aplicaction/json}
   * body el cuerpo de la informacion, los datos:
   * }
   */
  // console.log("los datos recuperados son  : " + name);
  // console.log("los datos recuperados son  : " + cellphone);
  // console.log("los datos recuperados son  : " + price);

  const urlServer = "http://192.168.0.167:3000/order";
  try {
    const response = await fetch(urlServer, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name :name , 
        cellphone :cellphone , 
        email :email, 
        amount :amount,
        price: price,
        code : code
      }),
    }).then((res) => res.json());
    return response;
  } catch (error) {
    return "error al conectarse al servidor";
  }
};
