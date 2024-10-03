import PerfilUsuario from "../interfaces/usuario";


const PaginaPerfil = () =>{
 const usuario = {
    nome:'José Lima',
    idade:20,
    email:'josélima@gmail.com'
 }

 return(
    <div>
        <h1>Pagina Perfil</h1>
        <PerfilUsuario usuario={usuario}/>
    </div>

 )

}


export default PaginaPerfil;