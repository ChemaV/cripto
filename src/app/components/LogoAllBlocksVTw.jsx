import { NextPage } from 'next'
import Image from 'next/image'

const LogoAllBlocksVTw: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/logoallblocks.svg"
        alt="Logo All Blocks"
        width={62}
        height={141}
      />
    </div>
  )
}

export default LogoAllBlocksVTw
