const HomePage = () => {
  return (
    <main className="sm:flex">
      <section className="h-[80vh] w-full flex flex-col justify-center bg-primary p-16 sm:w-[67%] sm:h-[35vh] md:h-[70vh]">
        <div className="sm:pt-8 sm:w-96 ">
          <h1 className="text-secundary text-4xl font-bold font-inter tracking-widest my-4 lg:text-7xl">
            Frontend web developer<b className="text-white">.</b>
          </h1>
          <p className="my-4 text-lg sm:text-sm text-white font-light lg:text-xl">
            Learn more about me as a professional in my portfolio.
          </p>
          <p className="my-4 text-lg sm:text-sm text-white font-light md:text-lg">
            I love good practices and I am eager to learn.
          </p>
        </div>
      </section>
      <section className="h-[40vh] w-full flex flex-col items-center justify-center bg-secundary sm:w-[33%] sm:h-[35vh] md:h-[70vh] sm:items-start"></section>
    </main>
  );
};

export default HomePage;
