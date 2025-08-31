import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <p>The profile visited is here:</p>

      {/* Navigation inside Profile */}
      <nav>
        <ul>
          <li>
            <Link to="popeye">Popeye</Link>
          </li>
          <li>
            <Link to="spinach">Spinach</Link>
          </li>
        </ul>
      </nav>

      {/* Child routes will render here */}
      <Outlet />
    </div>
  );
};

export default Profile;
