import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <section className="w-full min-h-screen bg-not__found bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center">
      <div className="max-w-screen-xl m-auto w-full min-h-screen flex flex-col justify-center p-content__padding">
        <div>
          <h2 className="text-8xl font-extrabold text-brand__cyan">404</h2>
          <p className="font-bold">Page not found</p>
          <p className="text-sm max-w-[350px] w-full mt-2">
            Sorry, the content that you are looking for doesn&rsquo;t exist.
          </p>
          <Link
            className="block bg-brand__cyan hover:bg-brand__light__cyan duration-300 w-fit py-1 px-4 rounded mt-2 text-white"
            to="/"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundScreen;
