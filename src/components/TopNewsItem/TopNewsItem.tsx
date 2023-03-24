import "./TopNewsItem.css"

type Props = {
  imgUrl: string
  header: string
  body: string
  index: string
}

const TopNewsItem: React.FC<Props> = ({
  imgUrl,
  header,
  body,
  index
}) => {
  return (
    <div
      className="top-news-container">
      <img
        alt="Top News"
        src={imgUrl}
        width={60}
        height={80} />
      <div>
        <h1>{index}</h1>
        <h4>{header}</h4>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default TopNewsItem;