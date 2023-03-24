import HeadNewsImgDesktop from "./../../assets/images/image-web-3-desktop.jpg"
import "./HeadNews.css";

const HeadNews: React.FC = () => {
  return (
    <div className="head-news-container">
      <img
        alt="Web 3.0"
        src={HeadNewsImgDesktop} />
      <div className="detail-wrapper">
        <h1>The Bright Future of Web 3.0?</h1>
        <div className="detail">
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fullfilling its promise?</p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  )
}

export default HeadNews;