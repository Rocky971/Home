import React from 'react';
import './FirstSection.css'
import childVideo from '../../assets/child help/videoChild.jpg';
import background from '../../assets/backgroundImage/background.png';
const FirstSection = () => {
    const video = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>

    return (
        <div className='grid mt-[600px] items-center gap-5 p-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[90%] bg-[#26ff9a]  mx-auto mb-[150px] custom-radius'
            style={{
                backgroundImage: `linear-gradient(#0b0b0b93,#0b0b0b93),url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",

            }}
        >
            <div className="indicator">
                <span className="indicator-item cursor-pointer left-[180px] right-0 h-[25%] rounded-full indicator-middle badge bg-[#02a95c] hover:bg-[#202124] hover:text-[white] text-black">{video}</span>
                <div className="grid w-[30%] readius-child  place-items-center">
                    <img className='rounded-full' src={childVideo} alt="" />
                </div>
            </div>
            <div className="">
                <h2 className='text-white text-3xl'>
                    We’re worldwide non-profit charity ogranization.
                </h2>
            </div>
            <div className=""

            >
                <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo perferendis tempore sunt voluptatem, nihil fuga excepturi cumque ratione magni.</p>
            </div>


        </div>
    );
};

export default FirstSection;