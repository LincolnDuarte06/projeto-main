interface Reserva{
    id: number,
    usuario_id: number,
    mesa_id: number,
    data: string,
    n_pessoas: number,
    status: boolean
}

const PerfilReserva: React.FC<{reserva:Reserva}> = ({reserva}) =>{
   return(
    <div>
       <h1>{reserva.id}</h1>
       <h2>{reserva.usuario_id}</h2>
       <h2>{reserva.mesa_id}</h2>
       <h2>{reserva.data}</h2>
       <h2>{reserva.n_pessoas}</h2>
       <h2>{reserva.status}</h2>
    </div>
   
   )
}

export default PerfilReserva;
