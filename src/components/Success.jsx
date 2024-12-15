import React from 'react';

const Success = () => (
  <section className="py-10">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
      <p className='text-lg text-gray-500 mb-4'>See how others have transformed their ideas into reality.</p>
      <div className="flex flex-wrap justify-center">
        <div className="card w-80 bg-base-200 shadow-lg m-4">
          <div className="card-body">
            <h3 className="text-xl font-bold">Inspiring Project</h3>
            <p className='text-gray-500'>How one campaign raised over $1M in just a few months!</p>
            <button className='btn btn-warning text-white'>Tap to know</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Success;
