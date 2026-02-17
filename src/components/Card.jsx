function Card({ name, price, image, description }) {
    return (
        <div className="h-80 w-65 bg-white border-1 ">
            {/* CARD image */}
            <div className="h-[55%]">
                <img className="h-full w-full object-fill" src={image} />
            </div>
            {/* Card functionality */}
            <div className="p-4 flex flex-col gap-2">
                <p className="text-[1.1rem] font-medium">{name}</p>
                <p className="text-xl text-green-500 font-medium">${price}</p>
                <div className="w-full flex justify-between">
                    <button className="bg-gray-500 text-white rounded-md px-3 py-2">View Details</button>
                    <button className="bg-blue-500 text-white rounded-md px-3 py-2">Add to Cart </button>
                </div>
            </div>
        </div>
    )
}

export default Card;
