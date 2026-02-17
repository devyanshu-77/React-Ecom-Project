import { Link } from "react-router-dom";
function Navbar() {
	return (
		<nav className="h-[70px] px-8 flex items-center justify-between border-b-2 border-gray-500">
			<div >
				<Link to="/" className="text-2xl font-medium" >ShopHub </Link>
			</div>
			<div className="flex gap-6">
				<Link to="/" className="text-[1.1rem] hover:text-blue-500 transition-all duration-150">Home </Link>
				<Link to="/checkout" className="text-[1.1rem] hover:text-blue-500 transition-all duration-150">Cart</Link>
			</div>
			<div>
				<div className="flex gap-6">
					<Link
						to="/auth"
						className="text-[1.1rem] text-white px-4 py-2 bg-gray-500 rounded-md hover:bg-gray-700 transition-hover duration-350"
					>
						Login
					</Link>
					<Link
						to="/auth"
						className="text-[1.1rem] text-white px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-hover duration-350"
					>
						Signup
					</Link>
				</div>
			</div>
		</nav>
	)
}
export default Navbar;
