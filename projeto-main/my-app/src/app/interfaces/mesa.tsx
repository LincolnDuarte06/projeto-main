interface Mesa{
    id: number,
    codigo: string,
    n_lugares: number
}

const PerfilMesa: React.FC<{mesa:Mesa}> = ({mesa}) =>{
   return(
    <div>
       <h1>{mesa.id}</h1>
       <h2>{mesa.codigo}</h2>
       <h2>{mesa.n_lugares}</h2>
    </div>
   
   )
   }
export default PerfilMesa;