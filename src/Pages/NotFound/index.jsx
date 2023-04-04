import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="space-y-5 py-5">
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias
        cupiditate ad nostrum doloribus iste tempora quisquam excepturi
        repellat, fugit cumque dolore magni possimus inventore neque provident!
        Sunt, quo eos?
      </p>

      <p>
        Go to the{" "}
        <Link className="ml-1 underline animate-pulse ease-in-out" to="/">
          Homepage
        </Link>
        .
      </p>
    </div>
  );
}

export default NotFound;
