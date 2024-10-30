import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col mt-28">
      <h1 className="head_text text-center">
        Discover and Share <br className="md:hidden" />
        <span className="orange_gradient text-center">AI-Driven Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptVault is an open-source platform for discovering, creating, and
        sharing AI-driven prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
