import { Link } from "react-router-dom";

interface NoContentsProps {
  text: string;
  link: string;
  linkTo: string; // 타입이 이게 맞나..?
}

const NoContents = ({ text, link, linkTo }: NoContentsProps) => {
  return (
    <div className="no-contents">
      <p>{text}</p>
      <p>
        <Link to={linkTo}>{link}</Link>
      </p>
    </div>
  );
};

export default NoContents;
