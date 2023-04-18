import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../../index.css'
import site_logo from '../../assets/Logo.svg';
import dolr from '../../assets/dolr.svg';


function Navbarn() {
	return (
		<>
			<nav className='nav-set gap-top-little'>
				<div>
					<img src={site_logo} alt="" />
				</div>
				<div className='login-btn-set'>
					<a href="">

					<div className='white-bg-btn-dolr'>	
						<img src={dolr} alt="" />
					</div>
					</a>
					<a href="#">

					<div className='blue-bg-btn'>
						<p >Track shipment</p>
					</div>
					</a>
				</div>
			</nav>
		</>
	);


}
export default Navbarn;