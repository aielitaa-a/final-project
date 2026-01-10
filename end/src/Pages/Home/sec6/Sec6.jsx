import React from 'react';
import './sec6.css';

function Sec6() {
  return (
    <section className='sec6-container'>
      <div className="container"> {/* Используем общий контейнер для центрирования */}
        <div className="econis-card">
          <h3 className='friendly'>Eco Friendly</h3>
          <h2 className='econis-store'>
            Econis is a Friendly <br /> Organic Store
          </h2>
          
          <div className="eco-item">
            <h4 className='start-company'>Start with Our Company First</h4>
            <p className='sed'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium 
              doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>

          <div className="eco-item">
            <h4 className='start-company'>Learn How to Grow Yourself</h4>
            <p className='sed'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium 
              doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec6;