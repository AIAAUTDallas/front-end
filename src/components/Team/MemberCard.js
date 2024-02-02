import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../styles/Member.module.css';
import Image from 'next/image';

const MemberCard = ({img, name, title, description}) => {
  return (
    <div className="card w-40 md:w-80 min-h-[10vh] flex flex-col bg-transparent justify-between mt-2 pt-4">
      {img && (
        <figure className="aspect-square">
          <Image
            priorty={true}
            placeholder={'empty'}
            src={img}
            className="w-full object-cover rounded-lg z-0"
            alt={name}
            fill
          />
        </figure>
      )}
      <div className="bg-[#0f172a] card-body text-white z-[1] rounded-md flex flex-col items-center justify-center p-1 md:p-4">
        <h2 className="card-title text-[3vw] md:text-lg m-0 h-fit leading-none">
          {name}
        </h2>
        <h3 className="m-0 h-fit text-[2vw] md:text-[1vw]">{title}</h3>
      </div>
    </div>
  );
};

export default MemberCard;
