import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
type Props = {
  description: string,
  setShowModal: (showModal: string) => void
};

const Modal = ({ description, setShowModal }: Props) => {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 px-2 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between px-4 pt-4">
              <h3 className="text-xl font-semibold text-gray-900">
                <FontAwesomeIcon icon={faExclamationTriangle} className='text-orange-300 pr-4' />Whoopsie Daisy
              </h3>
            </div>
            <div className="relative p-4 flex-auto">
              <p className="text-slate-500 text-lg leading-relaxed">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-end p-2">
              <button
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                type="button"
                onClick={() => setShowModal("")}
              >
                Okie Dokie
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Modal