import "../index.css";
import Navbar from "../comman/components/navbar";
import { DEFAULT_BREAKPOINTS } from "react-bootstrap/esm/ThemeProvider";
import { Container } from "react-bootstrap";
import Search from "../comman/components/search";
import colrship from "../assets/shipcolr.svg";
import bag from "../assets/briefcase.svg";
import web from "../assets/globalsearch.svg";
import suprt from "../assets/i24support.svg";
import Servicescard from "../comman/components/servicecard";
import Wave from "../comman/components/wave";
function Home() {
  return (
	< >
	
    <div className="container">
      <Navbar />
      <h1 className="gap-top text-center-mid font-set-head">
        Hassle-Free Shipping Solutions
      </h1>
      <h5 className="text-center-mid font-set-head-h">
        Compare, book, and manage your freight across the world’s top logistics
        providers, all on one platform.
      </h5>

      <Search />
      <h1 className="gap-top text-center-mid font-set-head">Services</h1>
      <div className="container">
		<div className="row gap-top gx-5">
        <div className="col-md-3 card-bg-set">
			
          <Servicescard
            img={colrship}
            heading="Freight Services"
            perag="Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door."
          />
        </div>
        <div className="col-md-3 card-bg-set">
          <Servicescard
            img={bag}
            heading="Business Services"
            perag="We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level."
          />
        </div>
        <div className="col-md-3 card-bg-set">
          <Servicescard
            img={web}
            heading="Shipping & Logistics"
            perag="Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs."
          />
        </div>
        <div className="col-md-3 card-bg-set">
          <Servicescard
            img={suprt}
            heading="24/7 Support"
            perag="Receive support from our experts all over the world at every stage of the process, 24/7."
          />
        </div>
		</div>
      </div>
    </div>
	  <Wave/>
	</>
  );
}

export default Home;
