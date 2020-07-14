import React from 'react';
import './InfoCard.css';

interface InfoCardInterface {
  icon?: string,
  title?: string
};

const InfoCard: React.FC<InfoCardInterface> = ({ icon, title, children }) => (
  <div className='card-info'>
    <div className='icon'>
      {(icon) && <img src={icon} alt="icon"/>}
    </div>
    <div className='body'>
      {title && <h1>{title.split('\\n').map((item) => {
        return <p>{item.replace('\\n', '')}</p>
      })}</h1>}
      <div className='description'>
        {children}
      </div>
    </div>
  </div>
);

export default InfoCard;