import React from 'react';

const AboutUs = () => (
  <div>
    <section className="py-10">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
      <p className="text-gray-500">We offer the best platform to bring your ideas to life and connect with a supportive community.</p>
      <div className="flex flex-wrap justify-center">
        <div className="card w-80 bg-base-200 shadow-lg m-4">
          <div className="card-body">
            <h3 className="text-xl font-bold">Trusted Network</h3>
            <p className='text-gray-500'>Thousands of successful campaigns with verified contributors.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr className='w-[85%] mx-auto' />
  </div>
);

export default AboutUs;
