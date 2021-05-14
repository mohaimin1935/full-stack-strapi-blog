import { Link } from "react-router-dom";


export default function PostCard({ card, buttonText="Read More", children, link='/' }) {

  return (
    <Link to={link}>
      <div className={"h-full postCard w-full bg-gray-400 overlay postCardRadius shadow-lg hover:shadow-xl duration-300 transform hover:-translate-y-2"}>
        {/***** image *****/}
        {card.featureImage && <img src={`${card.featureImage.url}`}
          className="absolute inset-0 object-cover h-full w-full postCardRadius"
          alt={card.title} />}

        {/***** text *****/}
        <div>
          {children}
        </div>
      </div>
    </Link>
  )
}