import CardForWelcome2 from "../welcome/Welcome2/CardForWelcome2/CardForWelcome2";
import { ServisCard, ServisCard2 } from "./ServiseCard/ServisCard";

export const Servis = () => {
  return (
    <section className= "container bg-gray-100 py-12 flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center font-bold mb-8">Our Service</h1>
      <div className=" px-4 flex flex-col justify-evenly gap-8">
        <div className="w-full ">
          <ServisCard
            url={"https://img.freepik.com/free-photo/people-are-working-on-the-project-man-and-women-in-suits-sitting-at-the-table-businessmen-use-a-laptop_1157-42033.jpg"}
            text1={"Business Consulting"} 
            text2={"As one of the world's largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs. This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring."} 
          />
        </div>
        <div className="">
          <ServisCard2
            url={"https://img.freepik.com/free-photo/people-are-working-on-the-project-man-and-women-in-suits-sitting-at-the-table-businessmen-use-a-laptop_1157-42033.jpg"}
            text1={"Business Consulting"} 
            text2={"As one of the world's largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs. This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring."} 
          />
        </div>
        <div className="w-full ">
          <ServisCard
            url={"https://img.freepik.com/free-photo/people-are-working-on-the-project-man-and-women-in-suits-sitting-at-the-table-businessmen-use-a-laptop_1157-42033.jpg"}
            text1={"Business Consulting"} 
            text2={"As one of the world's largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs. This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring."} 
          />
        </div>
      </div>
      <div className="">
      <CardForWelcome2/>
      </div>
    </section>
  );
};