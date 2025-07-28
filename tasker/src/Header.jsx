import React from 'react'
import lwsIcon from "./assets/lws-logo-en.svg"
import heroImage from './assets/frame.png'
export default function Header() {
  return (
    <div>
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
		<div className="container mx-auto flex items-center justify-between gap-x-6">
			
			<a href="/">
				<img className="h-[45px]" src={lwsIcon} alt="Lws" />
			</a>
			
		</div>
	</nav>

    
	<section className="pb-[114px] pt-20 md:mt-[100px] ">
		<div className="container lg:px-20 mx-auto">
			<div className="grid items-center gap-6 md:grid-cols-2">
				<div className="flex justify-center md:order-2">
					<img className="max-md:w-full" src={heroImage} width="326" height="290" alt="frame" />
				</div>
				<div>
					<h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
						Tasker
					</h1>
					<p className="text-lg my-2 text-white/50">
						Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker - Your Personal Productivity Ally for
						Seamless Goal Achievement and Stress-Free Task Management.
					</p>
				</div>
			</div>
		</div>
	</section>
	

    </div>
  )
}
