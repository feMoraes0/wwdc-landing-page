import React from 'react';
import './InfoCard.css';

interface InfoCardInterface {
  icon?: string,
  title: string
};

const InfoCard: React.FC<InfoCardInterface> = ({ icon, title, children }) => (
  <div className='card-info'>
    <div className='icon'>
      {(icon) && <img src={icon} alt="icon"/>}
    </div>
    <div className='body'>
      <h1>{title}</h1>
      <div className='description'>
        {children}
      </div>
    </div>
  </div>
);

export default InfoCard;