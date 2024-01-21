import Image from 'next/image';
import KickOff from '../../public/FallKickoff_5Physical.png';
import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

export default function SpecialEventBanner() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const showSpecialEventBanner = localStorage.getItem(
      'showSpecialEventBanner',
    );
    if (showSpecialEventBanner === 'false') {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, []);

  function onRegularClose() {
    setShowModal(false);
  }

  function onDoNotShowAgain() {
    localStorage.setItem('showSpecialEventBanner', false);
    setShowModal(false);
  }

  if (!showModal) return null;
  return (
    <motion.div
      initial={{y: '-100svh'}}
      animate={{y: '0'}}
      transition={{duration: 0.6}}
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full flex justify-center items-center bg-black/50"
    >
      <div class="relative w-full max-w-7xl">
        <div class="relative rounded-lg shadow h-[90svh] flex flex-col bg-[#0f172a]">
          {/* modal header */}
          <div class="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
            <h3 class="font-semibold text-white text-3xl">
              Special Event - AIAA KICKOFF
            </h3>
            <button
              onClick={onRegularClose}
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6 flex-grow-1 relative overflow-y-scroll">
            <div className="relative w-full h-full text-center">
              <Image
                className="object-contain"
                src={KickOff}
                alt="KickOff event"
                fill
              />
            </div>
          </div>

          <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={onDoNotShowAgain}
              data-modal-hide="defaultModal"
              type="button"
              class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600/70 hover:bg-blue-700 focus:ring-blue-800"
            >
              Do not show again
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
