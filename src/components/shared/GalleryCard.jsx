import React from 'react'

function GalleryCard({src,src2,small,title,description}) {
  return (
    <div className={`group w-full rounded-2xl overflow-hidden cursor-pointer ${small ? 'lg:h-[470px]' : 'lg:h-full'}`}>
      <div className="relative bg-secondary rounded-t-2xl pt-10 overflow-hidden h-[280px]">
        <div className="absolute z-30 left-0 mx-auto w-[78%] h-[250px] -rotate-3 rounded-2xl overflow-hidden">
          <img
            src={src}
            className="w-full h-full object-contain overflow-hidden"
            alt=""
          />
        </div>
        <div className="absolute right-0 z-20 mx-auto w-[78%] h-[250px] rotate-3 rounded-2xl overflow-hidden">
          <img
            src={src2}
            className="w-full h-full object-contain overflow-hidden"
            alt=""
          />
        </div>
      </div>

      <div className="bg-[#E8F6FF] rounded-b-2xl p-6">
        <h4 className="font-main text-4xl text-secondary">
          {title}
        </h4>

        <p className="font-secondary text-sm text-text mt-2">
          {description}
        </p>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleClick();
            }}
          >
           <span
  className="
    font-secondary
    text-sm
    text-secondary
    relative
    after:absolute
    after:left-0
    after:-bottom-0.5
    after:h-[1.5px]
    after:w-0
    after:bg-secondary
    after:transition-all
    after:duration-300
    group-hover:after:w-full
  "
>
  Read Case Study
</span>
          </button>
      </div>
    </div>
  )
}

export default GalleryCard
