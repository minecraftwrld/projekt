import { Link } from "react-router-dom";
import Footer from "./Footer";
export default function Naslovna() {
  return (
    <div className="Naslovna">
      <center>
        <div className="tekst">
          <h1 className="naslov"> WHO WE ARE</h1>
          <p className="onama">
            Zenki is the first and most important provider of active tourism on
            the island of Vis, with programs based on the interpretation of
            natural and cultural heritage. We will introduce to authentic local
            traditions and customs, natural phenomena and people without which
            the island would not be what it is. We organize private tours, group
            tours, private transfers and tailor-made programs. Our team consists
            of local people, outdoor sport enthusiasts, nature and history
            lovers who will passionately share all their knowledge with you!
            Experience the true heart of Vis with local experts !
          </p>
        </div>

        <div class="footer_div">
          <Footer />
          <Link to="/privacy" class="priv">
            Privacy
          </Link>
        </div>
      </center>
    </div>
  );
}
