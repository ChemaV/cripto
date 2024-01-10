import { NextPage } from 'next'
import Image from 'next/image'

const SideMenuTw: NextPage = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center">
        <p className="font-bold">Contacto</p>
        <Image src="/icContacto.svg" alt="Contacto" width={50} height={50} />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold">Noticias</p>
        <Image src="/icNoticias.svg" alt="Noticias" width={50} height={50} />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold">Estadísticas</p>
        <Image src="/Vector 19.svg" alt="Estadísticas" width={50} height={50} />
      </div>
      <Image src="/Intercambios.png" alt="Intercambios" width={100} height={100} />
      <div className="flex flex-col items-center">
        <p className="font-bold">Criptomonedas</p>
        <Image src="/icCriptomonedas.svg" alt="Criptomonedas" width={50} height={50} />
      </div>
      <div className="flex flex-col items-center">
        <Image src="/letras.svg" alt="Logo letras" width={100} height={100} />
        <Image src="/imagotipo.svg" alt="Logo imagotipo" width={100} height={100} />
      </div>
    </div>
  )
}

export default SideMenuTw
