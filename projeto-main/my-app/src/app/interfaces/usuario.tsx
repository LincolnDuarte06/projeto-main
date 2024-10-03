interface Usuario{
    nome:string;
    idade:number;
    email?:string;
}
const PerfilUsuario: React.FC<{usuario:Usuario}> = ({usuario}) =>{
return(
 <div>
    <h1>{usuario.nome}</h1>
    <h2>{usuario.idade}</h2>
    <h2>{usuario.email}</h2>
 </div>

)}
export default PerfilUsuario;
