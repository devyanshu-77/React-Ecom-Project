function Auth() {
	return (
		<div className="flex justify-center items-center">
			<div className="bg-gray-200 py-8 px-10 rounded-lg flex flex-col items-center gap-6">
				<h1 className="text-2xl font-medium">Sign up</h1>
				<form className="flex flex-col gap-6">
					<div>
						<label className="block" htmlFor="email">Email</label>
						<input 
							className="px-2 py-1 bg-gray-100 outline-none border-2 border-gray-700 rounded-md font-normal" 
							type="email" id="email" 
						/>
					</div>
					<div>
						<label className="block" htmlFor="password">Password</label>
						<input 
							className="px-2 py-1 bg-gray-100 outline-none border-2 border-gray-700 rounded-md font-normal" 
							type="password" id="password" 
						/>
					</div>
					<button className="px-6 py-2 bg-blue-500 rounded-md text-white" >Sign up</button>
				</form>
			</div>
		</div>
	)
};

export default Auth;
