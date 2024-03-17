import MyVideoComponent from "./Welcome2/Welcome2";
import { SimpleCard } from "./card/WelcomeCard";

export const Welcome = () => {
  return (
    <section className="bg-gray-100 py-12 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8 lg:mb-12">
            Welcome to Elixir
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 text-center mb-12 lg:mb-16">
            Get expert consultancy and support with Elixir, an advisory firm
            that stands by your side always.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <SimpleCard
            url={
              "https://cdn1.iconfinder.com/data/icons/fillio-web-internet-and-social-media-technology/48/web_-_customer_service-512.png"
            }
            text={"Business Consulting"}
            text2={
              "Solution for every business related problems, readily and skillfully"
            }
          />
          <SimpleCard
            url={
              "https://cdn1.iconfinder.com/data/icons/fillio-web-internet-and-social-media-technology/48/web_-_customer_service-512.png"
            }
            text={"Business Consulting"}
            text2={
              "Solution for every business related problems, readily and skillfully"
            }
          />
          <SimpleCard
            url={
              "https://cdn1.iconfinder.com/data/icons/fillio-web-internet-and-social-media-technology/48/web_-_customer_service-512.png"
            }
            text={"Business Consulting"}
            text2={
              "Solution for every business related problems, readily and skillfully"
            }
          />
          <SimpleCard
            url={
              "https://cdn1.iconfinder.com/data/icons/fillio-web-internet-and-social-media-technology/48/web_-_customer_service-512.png"
            }
            text={"Business Consulting"}
            text2={
              "Solution for every business related problems, readily and skillfully"
            }
          />
        </div>
      </div>
      <MyVideoComponent/>
    </section>
  );
};
