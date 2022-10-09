import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Sports = () => {
    const allSports = useLoaderData([])
    const sportsData = allSports.sports;
    // console.log(data.sports)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-4 px-5 pt-5 bg-gradient-to-r from-cyan-300 to-blue-500'>
            {sportsData.map(data => (
                <div key={data.idSport} className="card bg-base-100 shadow-xl hover:bg-slate-200">
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.strSport}
                            <img className='h-7' src={data.strSportIconGreen} alt="" />
                        </h2>
                        <h1><span className='font-bold'>Sport Type : </span> {data.strSport}</h1>
                        <h1><span className='font-bold'>Sports Format : </span> {data.strFormat}</h1>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Sports;