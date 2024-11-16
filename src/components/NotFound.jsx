import { Link } from "react-router-dom";

const NotFound = () => {
  return <section className="min-h-screen grid place-content-center text-center">
    <h2 className="text-4xl lg:text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-t from-primary via-tertiary to-tertiary brightness-150">404</h2>
    <h2 className='text-center text-4xl font-semibold'>Page Not Found</h2>
    <p className='text-center'>The page you are looking for does not exist.</p>

    <Link to="/" className="text-blue-500 mt-4 block">Go Home</Link>
  </section>;
};

export default NotFound;
