import React from 'react';

const Summury = () => {
    return (
        <div className='m-3 md:m-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div class="card bg-green-600 shadow-xl p-5">
                    <figure><i class="fa-solid fa-gears text-white text-5xl"></i></figure>
                    <div class="card-body">
                        <h2 class="card-title text-white mx-auto">10+ Years Of Servicing Experience</h2>
                    </div>
                </div>
                <div class="card bg-green-600 shadow-xl p-5">
                    <figure><i class="fa-solid fa-trophy text-white text-5xl"></i></figure>
                    <div class="card-body">
                        <h2 class="card-title text-white mx-auto">7 Awards</h2>
                    </div>
                </div>
                <div class="card bg-green-600 shadow-xl p-5">
                    <figure><i class="fa-solid fa-person-military-to-person text-white text-5xl"></i></figure>
                    <div class="card-body">
                        <h2 class="card-title text-white mx-auto">800+ Happy Clients</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summury;