import React from 'react'

export const JournaEntry = () => {
    return (
        <div className='journal__entry'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000)',
                }}
            ></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'> Muchachooooooooooos</p>
                <p className='journal__entry-content'>otra vez me volvi a ilucionar, quiero ganar la tercera, quiero ser campeon mundial</p>
            </div>
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>4 te ponen</h4>
            </div>
        </div >
    )
}
