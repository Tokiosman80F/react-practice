
import Logo from "./assets/logo.svg"
import Ring from "./assets/ring.svg"
import Moon from "./assets/icons/moon.svg"
import ShoppingCart from './assets/shopping-cart.svg'
import { useContext, useState } from "react"
import CartModal from "./cine/CartModal"
import { MovieContext } from "./context"

export default function Header(){
	const [showCartModal,setShowCartModal]=useState(false)

	const {cartValue}=useContext(MovieContext)


	function handleCartModal(){
		setShowCartModal(true)
	}


    return (
		<>
		{showCartModal && <CartModal onClose={()=>setShowCartModal(false)}/>}
        <header>
		<nav className="container   flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<img src={Logo} width="139" height="26" alt="logo" />
			</a>

			<ul className="flex items-center space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={Ring} width="24" height="24" alt="ring" />
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={Moon} width="24" height="24" alt="moon" />
					</a>
				</li>
				<li>
					<a onClick={handleCartModal} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={ShoppingCart} width="24" height="24" alt="shopping cart" />
						{
							cartValue.length >0 && <span className="absolute -top-5 left-6  h-6 w-6 text-center rounded-full bg-green-300 " >{cartValue.length}</span>
						}
					</a>
				</li>
			</ul>
		</nav>
	</header>
	</>
    ) 

}