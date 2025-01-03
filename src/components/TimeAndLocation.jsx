import React from 'react';
import { formatToLocalTime } from '../services/weatherService'

// Functional component for displaying time and location
function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return ( <div>
    <div className='flex items-center justify-center my-6'> 
        <p className='text-white text-xl font-extralight'>
        {formatToLocalTime(dt, timezone)}
        </p>  
    </div>

    <div className='flex items-center justify-center my-3'>
    <p className='text-white text-3xl pt-4 font-medium'>
        {`${name},${country}`}
    </p>
    </div>
</div>
  )
}

export default TimeAndLocation