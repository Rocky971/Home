import React from 'react';
import './Volunteers.css'
const topCoverImages = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7IP4AQxYYmsxQON9AbuQA18gF0s3j0ijOg&usqp=CAU"
const topCoverImages2 = "https://images.unsplash.com/photo-1622497170185-5d668f816a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VudGxlbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80";
const topCoverImages3 = "https://thumbs.dreamstime.com/b/young-gentleman-handsome-smiling-face-fashion-black-suit-white-shirt-bow-tie-studio-129269216.jpg"
const topCoverImages4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZjRFHj5ZsJAghlFzU0gWaqtm_q8E7spNVYPejzvNRyxM30HLyYHU8MWD3yV1Q3vbzy8&usqp=CAU"

const Volunteers = () => {
    return (
        <div className="w-[85%] mx-auto">
            <div className='pt-20 pb-10'>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
                    <div className="">
                        <h4 className='text-2xl font-bold pb-5 text-[#02a95c]'>
                            Our Volunteers
                        </h4>
                        <h2 className='text-5xl font-semibold'>
                            Meet those Who help <br /> others in need.
                        </h2>
                    </div>
                    <div className="text-md font-semibold py-5">
                        <p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quaerat esse aspernatur, deserunt doloribus aperiam eos ipsum odio maxime totam, illo incidunt, eaque tempora non velit voluptate quas explicabo beatae? sit amet consectetur adipisicing elit. Temporibus deleniti ut atque cum architecto aliquam impedit laudantium illo blanditiis nisi.</p>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div class="card">
                    <div class="card-top"
                        style={{ backgroundImage: `url(${topCoverImages})` }}
                    >
                        <div class="card-bottom">
                            <p className='text-xl font-semibold'>Sabikun Nahar</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-top"
                        style={{ backgroundImage: `url(${topCoverImages2})` }}
                    >
                        <div class="card-bottom">
                            <p className='text-xl font-semibold'>Sabikun Nahar</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-top"
                        style={{ backgroundImage: `url(${topCoverImages3})` }}
                    >
                        <div class="card-bottom">
                            <p className='text-xl font-semibold'>Sabikun Nahar</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-top"
                        style={{ backgroundImage: `url(${topCoverImages4})` }}
                    >
                        <div class="card-bottom">
                            <p className='text-xl font-semibold'>Sabikun Nahar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteers;