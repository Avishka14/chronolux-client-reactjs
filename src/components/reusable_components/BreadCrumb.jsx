import { Link } from "react-router-dom";
import "./Reusable-Components.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Breadcrumb = ({ path }) => {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <div>
          <Link to="/" className="home-icon" >
            <HomeOutlinedIcon />
          </Link> 
          <span className="mx-1"> / </span>
        </div>

        {path.map((item, index) => {
          const isLast = index === path.length - 1;
          return (
            <li key={index} aria-current={isLast ? "page" : undefined}>
              <div className="flex items-center">
                {index !== 0 && <span className="mx-2">/</span>}
                {isLast || !item.url ? (
                  <span className="span-text">{item.label}</span>
                ) : (
                  <Link to={item.url} className="anchor-text">
                    {item.label}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
