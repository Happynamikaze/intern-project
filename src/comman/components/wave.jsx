import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../../index.css";
import wave_1 from "../../assets/wave-1.svg"
import wave_2 from "../../assets/wave-2.svg"

function Wave() {
	return(
<>
		<div className="main-div gap-top-little">
			<img src={wave_2} alt="" class="wave-2"/>
			<img src={wave_1} alt="" class="wave-1"/>
		</div>
</>
	);
}
export default Wave;