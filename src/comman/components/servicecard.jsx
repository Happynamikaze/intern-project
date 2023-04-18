import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../../index.css";



function Servicescard (props){
	return (
<>
{/* <div className="container">
	<div className="row">
	<div className="col-md-3 card-bg-set"> */}


		<div className="card-top-set ">
			<img src={props.img} alt="" className="card-logo-img-set"/>
			<h5>{props.heading}</h5>
		</div>
		<p className="line-hori"></p>
		<div>
			<p className="pera-set-card">{props.perag}</p>

		</div>

	{/* </div>
	</div>
	


</div> */}

</>

	);
}
export default Servicescard;