import React from 'react';
import { Link, NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <div className="bg-base-100 flex justify-around items-center">
                <div className="">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">React Router with Tailwind</Link>
                </div>
                <div className="">
                    <ul className='flex gap-x-5'>
                        <li>
                            <NavLink to='/' title='Home'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='sports' title='Sports'>Sports</NavLink>
                        </li>
                        <li>
                            <NavLink to='about' title='About'>About</NavLink>
                        </li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;