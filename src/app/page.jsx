import FormPage from "./fomrPage/page.jsx";

function HomePage() {
  return (
    <section className="sm:mt-16 lg:mt-20 mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-10 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Data to enrich your</span>
            <span className="block text-indigo-600 xl:inline">
              {" "}
              online business
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          {/* Button Section */}
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
          <FormPage />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
