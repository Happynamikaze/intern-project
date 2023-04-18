import "../index.css";
import Navbarn from "../comman/components/navbarn";
import { DEFAULT_BREAKPOINTS } from "react-bootstrap/esm/ThemeProvider";
import { Container } from "react-bootstrap";
import shiplight from "../../src/assets/shiplight.svg";
import Steper from "../comman/components/steper";
import Searchn from "../comman/components/searchn";

function Ship() {
	return (
		<>
			<div className="container">
				<Navbarn />
				<div className="row gap-top ">
					<div className="col-md-1"></div>
					<div className="col-md-2 load-side">
						<a href="#" class="one-line-set">
							<img src={shiplight} alt="" class="search-img-size-set" />
							<h6>Load</h6>
						</a>
					</div>
					<div className="col-md-6">
						<Steper/>
					</div>
				</div>
				<Searchn />

			</div>
		</>
	);
}
export default Ship;
