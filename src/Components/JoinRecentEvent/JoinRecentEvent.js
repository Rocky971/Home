import React from 'react';
import './JoinRecentEvent.css'
import child2 from '../../assets/cold_clothes/child2.jpg';
import child4 from '../../assets/cold_clothes/child.jpg';
import { Link } from 'react-router-dom';
const JoinRecentEvent = () => {
    return (
        <div className='w-[85%] mx-auto'>
            <div className="my-24">
                <p className='text-[#02a95c] text-2xl font-bold'>Recent Events</p>
                <h1 className='text-4xl font-bold'>Join Recent Funraising Event <br /> of Givest</h1>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="gap-5px">
                    <div className="flex custom-border items-center ">
                        <div className="overflow-hidden transiton">
                            <div className="box max-w-[300px] overflow-hidden">
                                <img className=' custom-scale h-full max-w-full' src={child2} alt="" />
                            </div>
                        </div>
                        <div className="p-6">
                            <p className='text-lg font-semibold'>15 Februay 2023 //<span className='text-[#02a95c]'>Education</span> </p>
                            <h4 className='text-2xl font-bold hover:text-[#02a95c] cursor-pointer'>Need School For Mozambique Children.</h4>
                        </div>
                    </div>
                    <div className="flex custom-border items-center">
                        <div className="box max-w-[40%]">
                            <img className=' custom-scale' src={child2} alt="" />
                        </div>
                        <div className="p-6">
                            <p className='text-lg font-semibold'>1 March 2023 //<span className='text-[#02a95c]'>Cold Clothes</span> </p>
                            <h4 className='text-2xl font-bold hover:text-[#02a95c] cursor-pointer'>
                                Donate to Poor People's Sweater
                            </h4>
                        </div>
                    </div>
                    <div className="flex custom-border items-center">
                        <div className="box max-w-[40%]">
                            <img className=' custom-scale' src={child2} alt="" />
                        </div>
                        <div className="p-6">
                            <p className='text-lg font-semibold'>15 March 2023 //<span className='text-[#02a95c]'> Foods</span> </p>
                            <h4 className='text-2xl font-bold hover:text-[#02a95c] cursor-pointer'>Need School For Mozambique Children.</h4>
                        </div>
                    </div>

                </div>
                {/* ================== */}
                <div className="width m-auto ml-10">
                    <div className='bg'
                        style={{
                            backgroundImage: `linear-gradient(#0b0b0b93,#0b0b0b93),url(${child4})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            borderRadius: "50px 140px 0px 150px"

                        }}
                    >
                        <Link className=''><i class="fa-solid fa-circle-play text-red-700 m-[150px] text-6xl youtube"></i></Link>

                    </div>
                    {/* <img className='image h-[50vh] w-[95%]  rounded-lg' src={child4} alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default JoinRecentEvent;