import Item from "./Item"
import datos from "./data.json"

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

const informacion = datos;
export default function Listado(props) {
  
  return (
    <div className='container'>
      {
      informacion.map( datos=> {
        return(
          <Item 
            key={datos.id}
            nombre={datos.producto.nombre}
            descripcion={datos.producto.descripcion}
            stock={datos.stock}
            contador={props.contador}>
          </Item>
      )
      } )
      }
    </div>
  )
}