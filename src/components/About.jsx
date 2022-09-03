import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#53555a] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Noor, Welcome to my portfolio. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionet for building new software enginnering projects and implement new ideas,
                  I have a BSc in Materila engineering department and worked for couple of years, then desided to shift my career and I don't regret it</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;