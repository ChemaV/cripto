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
        <Image src="/menuicons/iconoticias.svg" alt="Noticias" width={50} height={50} />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold">Estadísticas</p>
        <Image src="/menuicons/icostats.svg" alt="Estadísticas" width={50} height={50} />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold">Intercambios</p>
        <Image src="/menuicons/icointercambios.svg" alt="Intercambios" width={50} height={50} />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold">Criptomonedas</p>
        <Image src="/menuicons/icocriptomonedas.svg" alt="Criptomonedas" width={50} height={50} />
      </div>
      <div className="flex flex-col items-center">
        <Image src="/menuicons/letras.svg" alt="Letras All Blocks" width={100} height={100} />
        <Image src="/menuicons/imagotipo.svg" alt="Imagotipo All Blocks" width={100} height={100} />
      </div>
    </div>
  )
}

export default SideMenuTw
