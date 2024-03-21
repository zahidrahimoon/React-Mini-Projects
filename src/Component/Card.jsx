import React from 'react'

const Card = (props) => {
    const title = props.title
    const para = props.para
    const image = props.image
  return (
    <div className="relative h-[400px] w-[300px] rounded-md cursor-pointer hover:scale-50">
      <img
        src={image}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">
        {para}
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    </div>
  )
}

export default Card