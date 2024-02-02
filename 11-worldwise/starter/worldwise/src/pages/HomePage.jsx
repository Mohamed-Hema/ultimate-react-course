import { Link } from "react-router-dom";
import { PageNav } from "../components/PageNav";
export const HomePage = () => {
  return (
    <div>
      <PageNav />
      <div>Worldwise</div>
      <Link to="/app">Go to the app</Link>
    </div>
  );
};
