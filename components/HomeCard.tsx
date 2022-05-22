import { useState } from 'react';
import { formatNumber } from '../utils/formatNumber';
import { Modal } from './Modal'

export const HomeCard = (home: Home) => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false)

  return (
    <>
      <Modal title="Home details" isVisible={isModalDisplayed} onClose={() => setIsModalDisplayed(false)}>
        <div className="">
          <div className="flex justify-between w-full pb-3">
            <div className="flex flex-row justify-between w-full">
              <span className="text-sm font-bold">{home.address}</span>
              <span className="text-sm font-bold text-blue-900">
                {formatNumber(home.price, home.currency)}
              </span>
            </div>
          </div>
          <img className="w-full bg-cover h-96" src={home.picture} alt="home picture" />

          <div className="pt-3">
            <div className="mb-2 text-sm">
              <span className="mr-2 font-medium">Adresse:</span> {home.address}<br/>
              <span className="mr-2 font-medium">Surface:</span> {home.surface} m²<br/>
              <span className="mr-2 font-medium">Étage:</span> {home.floor}<br/>
              <span className="mr-2 font-medium">Nombre de pièces:</span> {home.rooms}<br/>
              <span className="mr-2 font-medium">Propriétaire:</span> {home.owner}<br/>
              {home?.year && <><span className="mr-2 font-medium">Année de construction:</span> {home.year}</>}<br/>
              <span className="mr-2 font-medium">Prix:</span> 
              {formatNumber(home.price, home.currency)}
              <br/>


            </div>
          </div>
        </div>
        
      </Modal>

      <div 
        className="w-full p-4 mb-1 overflow-hidden bg-white border rounded shadow-xl hover:cursor-pointer"
        onClick={() => setIsModalDisplayed(true)}
      >
        <div className="flex justify-between w-full pb-3">
          <div className="flex flex-row justify-between w-full">
            <span className="text-sm font-bold">{home.address}</span>
            <span className="text-sm font-bold text-blue-900">
              {formatNumber(home.price, home.currency)}
            </span>
          </div>
        </div>
        <img className="w-full h-48 bg-cover" src={home.picture} alt="home picture" />
        <div className="pb-2">
          <div className="pt-2">
            <i className="cursor-pointer far fa-heart"></i>
            <span className="text-sm font-medium text-gray-400">{home.owner}</span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="mr-2 font-medium">Surface:</span> {home.surface} m²
            </div>
          </div>
        </div>
      </div>
    </>
   
    
  );}
  
