import { NextPage } from 'next'
import Image from 'next/image'

const LogoAllBlocksVTw: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="../assets/images/logo/letras.svg"
        alt="Logo letras"
        width={500}
        height={300}
      />
      <Image
        src="../assets/images/logo/imagotipo.svg"
        alt="Logo imagotipo"
        width={500}
        height={300}
      />
    </div>
  )
}

export default LogoAllBlocksVTw
