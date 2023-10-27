import React from 'react'

export default function page({params}) {
  return (
    <div className="w-full">
      <div className="bg-[url(/branchLogos/aiaa.png)] bg-cover bg-center bg-no-repeat h-64 w-auto flex text-center items-center">
        <div className="w-full">
          <h1>{params.branch}</h1>
        </div>
      </div>
      <div className="flex flex-col items-center text-center w-full gap-y-5 bg-[#0a2647] py-8">
        <h2 className='text-white'>About</h2>
        <p className='m-0 max-w-3xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet
          turpis eget neque lobortis faucibus. Duis eu magna imperdiet urna
          maximus suscipit non eget leo. Integer viverra libero quis magna
          congue, a placerat est fringilla. Vivamus semper metus semper,
          efficitur turpis ut, fringilla libero. Sed condimentum pharetra
          ligula, quis vehicula eros viverra non. Suspendisse sodales ipsum at
          tortor pellentesque tempus.
        </p>
      </div>
    </div>
  );
}
