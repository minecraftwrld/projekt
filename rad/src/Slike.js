import kz from "./komiža.jpg";
import kza from "./vie.jpg";
export default function Slike() {
  return (
    <div className="slika">
      <img className="slika" src={kz} />
      <br></br>
      <img className="slika" src={kza} />
      <br></br>
    </div>
  );
}
