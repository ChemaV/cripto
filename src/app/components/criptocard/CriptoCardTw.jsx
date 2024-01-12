'use client';
import Image from 'next/image';
import styles from './criptocard.module.css';

export default function CriptoCardTw() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Criptomoneda</h2>
            <p className="text-gray-600">Cambio Diario: <span className="font-semibold text-green-500">6.7%</span></p>
            <p className="text-gray-600">Market Cap: <span className="font-semibold text-gray-900">396.7B</span></p>
            <p className="text-gray-600">Precio: <span className="font-semibold text-gray-900">46.7 K</span></p>
          </div>
          <div className="w-24 h-24 bg-gray-300 rounded-full">
            <Image src="/" alt="Criptomoneda" width={68} height={68} />
          </div>
        </div>
      </div>
    </div>
  );
}
