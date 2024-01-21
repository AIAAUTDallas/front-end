import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SpecialEventBanner({
  title,
  image,
  displayStart,
  displayEnd,
  id,
}) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const showSpecialEventBanner = localStorage.getItem(
      `AIAA_SPECIAL_${id}`,
    );

    const today = new Date();
    if (today < displayStart || today > displayEnd) {
      return;
    }

    if (localStorage.getItem(`AIAA_SPECIAL_${id - 1}`)) {
      localStorage.removeItem(`AIAA_SPECIAL_${id - 1}`);
    }

    if (showSpecialEventBanner === 'false') {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, [displayEnd, displayStart, id]);

  function onRegularClose() {
    setShowModal(false);
  }

  function onDoNotShowAgain() {
    localStorage.setItem(`AIAA_SPECIAL_${id}`, false);
    setShowModal(false);
  }

  if (!showModal) return null;
  return (
    <motion.div
      initial={{
        scale: 0,
        display: 'none',
      }}
      animate={{
        scale: 1,
        display: 'flex',
      }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-1/2 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full flex justify-center items-center"
    >
      <div className="relative w-full max-w-7xl">
        <div className="relative rounded-lg shadow h-[90svh] flex flex-col bg-[#0f172a]" style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }} >
          {/* modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
            <h3 className="font-semibold text-white text-xl md:text-3xl">
              {title}
            </h3>
            <button
              onClick={onRegularClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6 flex-grow-1 relative overflow-y-scroll">
            <div className="relative w-full h-full text-center">
              <Image
                className="object-contain"
                src={image}
                alt=""
                fill
              />
            </div>
          </div>

          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={onDoNotShowAgain}
              type="button"
              className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600/70 hover:bg-blue-700 focus:ring-blue-800"
            >
              Do not show again
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
