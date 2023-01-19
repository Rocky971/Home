import React from 'react';
import './CustomDonationSection.css'
import bg from '../../assets/child help/1.jpg'
const CunstomDonationSection = () => {
    return (
        <div className='bg-[#02a95c]  text-white'>
            <div className='grid max-w-[100%] lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
                <div className="p-[60px]">
                    <div className="divider mb-7 text-xl font-semibold  before:bg-white after:bg-white">Make A Donation</div>
                    <h1 className='text-4xl mb-16 font-bold'>Need Pure Water For <br /> Mozambique People</h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-4  lg:grid-cols-4  gap-2">
                        <input className='custom_button' type="button" value="$20" />
                        <input className='custom_button custom_outline' type="button" value="$50" />
                        <input className='custom_button custom_outline' type="button" value="$100" />
                        <input className='custom_button custom_outline' type="text" placeholder="Custom" />
                    </div>
                    <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2  gap-2">
                        <button className='custom_button_submit'>Donate Now</button>
                        <button className='custom_button_submit'>Join Events</button>
                    </div>
                </div>
                <div className="">
                    <img src={bg} alt="" />
                    <div className="mt-10">
                        <h1 className='text-4xl py-5 font-semibold '>Great Donners</h1>
                        <p className='text-md mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis magnam enim quaerat dolorem. Nobis, asperiores! elit. Optio natus ut magni?</p>
                    </div>
                    <div className="flex pb-[55px]">
                        <div className="avatar mr-4">
                            <div className="w-14 rounded-full ring ring-[#202124] ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className="avatar mr-4">
                            <div className="w-14 rounded-full ring ring-[#202124] ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className="avatar mr-4">
                            <div className="w-14 rounded-full ring ring-[#202124] ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className="avatar placeholder">
                            <div className="w-14 rounded-full ring ring-[#202124] bg-[#202124] ring-offset-base-100 ring-offset-2">
                                <span className="text-xl">+160</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CunstomDonationSection;