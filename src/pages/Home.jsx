import Card from "../components/Card";
import { getProducts } from "./products";

function Home() {
	const products = getProducts()
	return (
		<div className="h-full bg-gray-100 px-8 grid grid-rows-[200px_1fr] gap-y-6">
			{/* Hero section */}
			<div className="flex flex-col justify-center items-center gap-4">
				{/* Hero text */}
				<h1 className="text-4xl font-medium">Welcome to ShopHub </h1>
				<p className="text-[1.1rem] text-gray-500">Discover amazing products at great prices</p>
			</div>
			{/* Products section */}
			<div>
				<p className="text-xl font-medium"> Our Products </p>
				<div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-y-8 place-items-center" >
					{products.map((p) => (
						<Card name={p.name} image={p.image} description={p.description} price={p.price}/>
					))}
				</div>
			</div>
		</div>
	)
};

export default Home;
