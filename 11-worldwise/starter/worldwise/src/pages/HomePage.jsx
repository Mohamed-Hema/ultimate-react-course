import { Link } from "react-router-dom";
import { PageNav } from "../components/PageNav";
import { AppNav } from "../components/AppNav";
export const HomePage = () => {
  return (
    <div>
      <PageNav />
      <AppNav />
      <div>Worldwise</div>
      <Link to="/app">Go to the app</Link>
    </div>
  );
};
