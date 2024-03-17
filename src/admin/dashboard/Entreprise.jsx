import esi from "../../assets/ESI.svg";
import store from "../../assets/Store.svg";

function Entreprise() {
  return (
    <div className="bg-white py-14 px-32 rounded-3xl flex flex-col items-center gap-2">
      <img src={esi} alt="" className="max-[12rem] max-w-[12rem]" />
      <img src={store} alt="" className="max-[12rem] max-w-[12rem]" />
    </div>
  );
}

export default Entreprise;
