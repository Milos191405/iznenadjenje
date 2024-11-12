import svadba from "../img/svadba.jpg";
import dusan1 from "../img/dusan1.jpg";
import dusan2 from "../img/dusan2.jpg";
import nikola1 from "../img/nikola1.jpg";
import nikola2 from "../img/nikola2.jpg";
import tara1 from "../img/tara1.jpg";
import tara2 from "../img/tara2.jpg";
import baba1 from "../img/baba1.jpg";
import baba2 from "../img/baba2.jpg";
import mi from "../img/mi.jpg";

function Home() {
  return (
    <div className="text-left ">
      <h1 className="p-5 text-center text-2xl">Proslo je 10 godina ...</h1>
      <img src={svadba} alt="" />

      <img src="" alt="" className="w-3/4 " />
      <h2 className="text-center text-xl">Onda su dosli oni</h2>
      <p className="text-center">Nasi mali andjelcici :) </p>
      <div className="flex ">
        <img src={dusan1} alt="" className="w-1/2" />
        <img src={dusan2} alt="" className="w-1/2" />
      </div>
      <br />
      <div className="flex">
        <img src={nikola2} alt="" className="w-1/2" />
        <img src={nikola1} alt="" className="w-1/2" />
      </div>
      <br />
      <div className="flex">
        <img src={tara1} alt="" className="w-1/2" />
        <img src={tara2} alt="" className="w-1/2" />
      </div>

      <p className="p-2">
        U petak 15.11. posle skole, samo treba da spakujes stvari za 2 noci i 2
        dana i idemo nas dvoje. <br /> Gde? Pa to je iznenadjenje , videces kad
        stignemo. Imamo da se vozimo ali ne previse...
      </p>
      <p className="text-center pb-2">
        Sve je sredjeno , nema nista da brines,{" "}
        <span className="text-center">baba</span>
        <img src={baba1} alt="" />i <span className="text-center">"baba"</span>
        <img src={baba2} alt="" /> su upoznate i brinuce o njima.
        <br />
      </p>
  
      <p className="p-2">Ponesi i kupaci za svaki slucaj</p>

      <p className="p-2">
        Znam da prolazimo kroz tesku fazu ali samo hocu da znas ...
      </p>

      <h1 className="text-center text-xl pt-2 text-red-500">Volim te</h1>
      <img src={mi} alt="" />
    </div>
  );
}

export default Home