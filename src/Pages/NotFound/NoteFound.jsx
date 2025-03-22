import { Link } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <nav className="breadcrumb">
        <Link to="/" className="home-link">Home</Link> / <span>404 Error</span>
      </nav>
      <h1 className="title">404 Not Found</h1>
      <p className="message">Your visited page not found. You may go home page.</p>
      <Link to="/" className="back-button">Back to home page</Link>
    </div>
  );
}