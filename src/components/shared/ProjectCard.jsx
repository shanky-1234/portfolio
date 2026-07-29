import React from 'react'
import Badge from './Badge'
import { MoveRight, Pill } from 'lucide-react'
import { useNavigate } from 'react-router'
import Button from './Button';
import Pills from './Pills';

function ProjectCard({
  project,
  description,
  img1,
  badges = [],
  link,
  className = "",
  key
}) {
  const navigate = useNavigate()

  const handleClick=()=>{
    navigate(link)
  }

  return (
    <div
      onClick={handleClick}
      className={`
        project-card
        group
        cursor-[url(/profile/casestudycursor.svg),_pointer]
        overflow-hidden
        rounded-2xl
        transition
        duration-300
        ${className}
      ${key%2 === 1 ? 'hover:rotate-1' :'hover:-rotate-1'}
        
      `}
    >
      <div className="flex flex-col-reverse md:flex-col ">
      <div className="w-full h-[300px] md:h-full overflow-hidden bg-main gr">
  <img
    src={img1}
    alt={`${project} project cover`}
    className="w-full h-full object-cover md:object-contain"
  />
</div>

        <div className="bg-tertiary px-4 py-6">
          <div className="mb-2 space-y-2">
            <h4 className="mb-2 text-left leading-none text-main">
              {project}
            </h4>

            <div className="flex flex-wrap gap-2">
              {badges.map((item, index) => (
                <Pills key={`${item}-${index}`} content={item} />
              ))}
            </div>

            <p className="line-clamp-2 text-left text-text">
              {description}
            </p>
          </div>

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
    text-main
    relative
    after:absolute
    after:left-0
    after:-bottom-0.5
    after:h-[1.5px]
    after:w-0
    after:bg-main
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
    </div>
  );
}

export default ProjectCard;