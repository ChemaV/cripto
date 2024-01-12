'use client';
import Image from 'next/image';

export default function LogoAllBlocksVTw() {
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