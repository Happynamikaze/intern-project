import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../../index.css'
import site_logo from '../../assets/Logo.svg';

function Navbar() {
	return (
		<>
			<nav className='nav-set gap-top-little'>
				<div>
					<img src={site_logo} alt="" />
				</div>
				<div className='login-btn-set'>
					<a href="">

					<div className='blue-bg-btn'>	
						<p>Login</p>
					</div>
					</a>
					<a href="#">

					<div className='white-bg-btn'>
						<p >Learn more</p>
					</div>
					</a>
				</div>
			</nav>
		</>
	);


}
export default Navbar;