import { Servis } from "./Serves/Servis"
import { Why } from "./Why/Why"
import { MyCarousel } from "./carusel/Carusel"
import { Welcome } from "./welcome/Welcome"


export const MainSection = () => {
  return (
    <main>
        <MyCarousel/>
        <Welcome/>
        <Servis/>
        <Why/>
    </main>
  )
}
