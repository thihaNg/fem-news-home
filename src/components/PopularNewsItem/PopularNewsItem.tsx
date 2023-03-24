import "./PopularNewsItem.css"

type Props = {
  header: string
  body: string
}

const PopularNewsItem: React.FC<Props> = ({
  header,
  body
}) => {
  console.log(header);
  return (
    <div className="popular-news-item-container">
      <h3>{header}</h3>
      <p>{body}</p>
    </div>
  )
}

export default PopularNewsItem;