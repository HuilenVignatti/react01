
import "./home.css"
export const Home = () => {


    let mascota = {
        nombre :  " jack",
        edad : 2
    }


  return (
    <div className="container">Home
        <h1>este es el {mascota.nombre} </h1>
    </div>
  )
}
