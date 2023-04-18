import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../../index.css";
import drop_map from "../../assets/location.svg";
import ship from "../../assets/ship.svg";
import calender from "../../assets/calendar.svg";
import arrow from "../../assets/arrow.svg";
function Search() {
	return (
		<>
			<div className="container search-bg gap-top">
				<div className="row one-line-center">
					<div className="col-md-3">
					<a href="#" className="one-line-set">
						<img src={drop_map} alt="" className="search-img-size-set" />
						<h6>Origin, Port, City</h6>
						</a>

					</div>
					<div className="col-md-3 ">
						<a href="#" className="one-line-set">
							<img src={drop_map} alt="" className="search-img-size-set" />

							<h6>Destination, Port, City</h6>
						</a>
					</div>
					<div className="col-md-3">
						<a href="#" className="one-line-set">
						<p className="line"></p>
							<img src={calender} alt="" className="search-img-size-set" />

							<h6>13 April 2023</h6>
						</a>
					</div>
					<div className="col-md-2">
						<a href="#" className="one-line-set">
						<p className="line"></p>
							<img src={ship} alt="" className="search-img-size-set" />

							<h6>Load</h6>
						</a>
					</div>
					<div className="col-md-1">
						<a href="#" className="one-line-set">
						<p className="line"></p>
					<img src={arrow} alt=""className="arrow-set" />
						</a>
					</div>
					
				</div>
			</div>
		</>
	);
}
export default Search;
