import React from "react";

const Button = ({ children }) => {
    return (
        <div>
            <button className="flex items-center bg-[#02a95c] py-2 px-6 rounded-md text-white font-semibold text-xl hover:bg-[#202124] mt-4">
                {children}
            </button>
        </div>
    );
};

export default Button;
