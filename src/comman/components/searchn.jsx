import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../../index.css";
import drop_map from "../../assets/location.svg";
import ship from "../../assets/ship.svg";
import calender from "../../assets/calendar.svg";
import pen from "../../assets/pen.svg";
function Searchn(props) {
	return (
		<>
			<div className="container search-bg gap-top">
				<div className="row one-line-center">
					<div className="col-md-3">
					<a href="#" className="one-line-setn">
						<img src={drop_map} alt="" className="search-img-size-set" />
						<h6>Delhi, 110003</h6>
						</a>

					</div>
					<div className="col-md-3 ">
						<a href="#" className="one-line-setn">
							<img src={drop_map} alt="" className="search-img-size-set" />

							<h6>Shanghai 200080</h6>
						</a>
					</div>
					<div className="col-md-3">
						<a href="#" className="one-line-setn">
						<p className="line"></p>
							<img src={calender} alt="" className="search-img-size-set" />

							<h6>13 April 2023</h6>
						</a>
					</div>
					<div className="col-md-2">
						<a href="#" className="one-line-setn">
						<p className="line"></p>
							<img src={ship} alt="" className="search-img-size-set" />

							<h6>114.21KG - AIR</h6>
						</a>
					</div>
					<div className="col-md-1">
						<a href="#" className="one-line-setn pen">
						<p className="line"></p>
					<img src={pen} alt=""className="pen-set" />
						</a>
					</div>
					
				</div>
			</div>
		</>
	);
}
export default Searchn;
