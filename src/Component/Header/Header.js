import React from 'react';

const Header = () => {
    return (
        <div className="bg-base-100 flex justify-around items-center">
            <div className="">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="">
                <ul className='flex gap-x-5'>
                    <li>Home</li>
                   
                    <li>About</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;