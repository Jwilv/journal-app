import React from 'react'

export const JournaEntry = ({ id, title, body, url }) => {
    return (
        <div className='journal__entry pointer'>
            {
                (url) &&
                <div
                    className='journal__entry-picture'
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`,
                    }}
                ></div>
            }
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    {title}
                </p>
                <p className='journal__entry-content'>
                    {body}
                </p>
            </div>
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>31</h4>
            </div>
        </div >
    )
}
