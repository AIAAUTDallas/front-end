import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../styles/Member.module.css';
import Image from 'next/image';

const MemberCard = ({img, name, title, description}) => {
  return (
    <div className="card w-80 flex flex-col">
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
      <div className="bg-[#0f172a] card-body text-white z-10 rounded-md">
        <h2 className="card-title">{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default MemberCard;
