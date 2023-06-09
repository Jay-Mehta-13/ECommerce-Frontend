import React, { useEffect, useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { TOKEN } from "../const";
import { getUserDetails, isUserLogin } from "../State/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { addToCart, clearCart, removeFromCart } from "../State/actions/cart";
const Navbar = () => {
	const dispatch = useDispatch();
	const { isLoggedIn, user } = useSelector((state) => state.user);
	const { cart, subtotal } = useSelector((state) => state.cart);
	useEffect(() => {
		if (localStorage.getItem(TOKEN) && isLoggedIn == null) {
			console.log("hy");
			dispatch(getUserDetails());
		} else {
			// localStorage.getItem(TOKEN)
			dispatch(isUserLogin(false));
		}
	}, []);

	let ref = useRef();
	let toggle = () => {
		if (ref.current.classList.contains("translate-x-full")) {
			ref.current.classList.remove("translate-x-full");
			ref.current.classList.add("translate-x-0");
		} else if (!ref.current.classList.contains("translate-x-full")) {
			ref.current.classList.remove("translate-x-0");
			ref.current.classList.add("translate-x-full");
		}
	};
	return (
		<>
			<nav className="bg-white border-gray-200 dark:bg-gray-900 z-50 sticky top-0 shadow-md">
				<div className=" flex flex-wrap items-center justify-between w-full p-4">
					<a href="#" className="flex items-center">
						<img
							// src="https://flowbite.com/docs/images/logo.svg"
							src="../../public/icon.svg"
							className="h-8 mr-3"
							alt="Logo"
						/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							Grab It!
						</span>
					</a>

					<div className="flex items-center gap-10 md:order-2">
						<div class="flex">
							<button
								type="button"
								data-collapse-toggle="navbar-search"
								aria-controls="navbar-search"
								aria-expanded="false"
								class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
								<svg
									class="w-5 h-5"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
										clip-rule="evenodd"></path>
								</svg>
								<span class="sr-only">Search</span>
							</button>
							<div class="relative hidden md:block">
								<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg
										class="w-5 h-5 text-gray-500"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path
											fill-rule="evenodd"
											d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
											clip-rule="evenodd"></path>
									</svg>
									<span class="sr-only">Search icon</span>
								</div>
								<input
									type="text"
									id="search-navbar"
									class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Search..."
								/>
							</div>
							<button
								data-collapse-toggle="navbar-search"
								type="button"
								class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
								aria-controls="navbar-search"
								aria-expanded="false">
								<span class="sr-only">Open menu</span>
								<svg
									class="w-6 h-6"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
										clip-rule="evenodd"></path>
								</svg>
							</button>
						</div>
						{isLoggedIn && <ShoppingCartIcon onClick={toggle} />}
						{isLoggedIn == null || isLoggedIn == false ? (
							<button>
								<Link to="/login">Login</Link>
							</button>
						) : (
							<button
								type="button"
								data-dropdown-toggle="language-dropdown-menu"
								className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white gap-2">
								<AccountCircleIcon />
								{user.name}
							</button>
						)}
					</div>
					<div
						className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
						id="mobile-menu-language-select">
						<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<Link
									to="/"
									className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
									aria-current="page">
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/products/appliance"
									className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
									Appliance
								</Link>
							</li>
							<li>
								<Link
									to="/products/clothing"
									className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
									Clothing
								</Link>
							</li>
							<li>
								<Link
									to="/products/grocery"
									className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
									Grocery
								</Link>
							</li>
							<li>
								<Link
									to="/testimonials"
									className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
									Testomonials
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div
				ref={ref}
				className="sidecart fixed h-[100vh] w-96 top-28 md:top-16 right-0  bg-green-400  transform transition-transform translate-x-full z-10">
				<div className="bg-green-400 p-10 pt-14 z-10">
					<h2 className="text-2xl">Shooping Cart</h2>
					<span
						onClick={toggle}
						className="cursor-pointer absolute top-5 right-3 text-xl">
						<CloseIcon />
					</span>
					<ol className="list-decimal flex flex-col">
						{Object.keys(cart).length === 0 ? (
							<div className="my-3">Your cart is empty </div>
						) : (
							Object.keys(cart).map((id) => {
								// console.log(item);
								return (
									<li key={`${id}`}>
										<div className="flex my-3">
											<div className="p-3">{cart[id].productName}</div>
											<div className="flex flex-row space-x-2 items-center justify-center">
												<AddCircleIcon
													className="text-pink-700 cursor-pointer"
													onClick={() => dispatch(addToCart(cart[id]))}
												/>{" "}
												<span> {cart[id].qty}</span>
												<RemoveCircleIcon
													className="text-pink-700 cursor-pointer"
													onClick={() => dispatch(removeFromCart(cart[id]))}
												/>
											</div>
										</div>
									</li>
								);
							})
						)}
					</ol>
					<div className="my-3 font-bold text-center">
						Amount:&nbsp; ${subtotal}
					</div>
					<div className="flex">
						<Link href={"/Checkout"}>
							<a>
								{" "}
								<button className="flex mr-2 text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-sm items-center my-4">
									Check out
								</button>
							</a>
						</Link>
						<button
							onClick={() => {
								dispatch(clearCart());
							}}
							className="flex mr-2 text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-sm items-center my-4">
							Clear Cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
