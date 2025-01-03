import React from 'react'

// Functional component for rendering top buttons
function TopButtons({setQuery}) {

    const cities = [
        {
            id:1,
            title: 'Athens'
        },
        {
            id:2,
            title: 'Thessaloniki'
        },
        {
            id:3,
            title: 'Florina'
        },
        {
            id:4,
            title: 'Corfu'
        },
        {
            id:5,
            title: 'Crete'
        },
    ]

    return (
        <div className="flex items-center justify-around my-6">
          {cities.map((city) => (
            <button
              key={city.id}
              className="text-white text-lg font-medium mx-4"
              onClick={() => setQuery({ q: city.title })}
            >
              {city.title}
            </button>
          ))}
        </div>
      );
    }
    

export default TopButtons;