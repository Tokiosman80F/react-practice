import React from 'react'

export default function App() {
  return (
    <div className='text-white bg-background'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
            
            <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
                <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
                <p className="text-gray-400 text-sm mb-4">Accurately fulfill customer orders based on a precise
                    understanding of their requirements.</p>

                
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Customer Name</label>
                    <input type="text"
                        className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"/>
                </div>

                
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Choose Items</label>
                    <div className="items-container">
                        
                        <div
                            className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                            <div className="flex items-center">
                                <div className="w-12 h-12   flex items-center justify-center mr-3">
                                    <img src="./assets/hamburger.svg" alt="Hamburger" className="w-10 h-10"/>
                                </div>
                                <div>
                                    <h3 className="font-medium">Hamburger</h3>
                                    <p className="text-xs text-gray-400">BDT 300</p>
                                </div>
                            </div>
                            <button
                                className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        
                        <div
                            className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                            <div className="flex items-center">
                                <div className="w-12 h-12 flex items-center justify-center mr-3">
                                    <img src="./assets/chicken.svg" alt="Chicken Nuggets" className="w-10 h-10"/>
                                </div>
                                <div>
                                    <h3 className="font-medium">Chicken Nuggets</h3>
                                    <p className="text-xs text-gray-400">BDT 300</p>
                                </div>
                            </div>
                            <button
                                className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        
                        <div
                            className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                            <div className="flex items-center">
                                <div className="w-12 h-12 flex items-center justify-center mr-3">
                                    <img src="./assets/submarine.svg" alt="Submarine Sandwich" className="w-10 h-10"/>
                                </div>
                                <div>
                                    <h3 className="font-medium">Submarine Sandwich</h3>
                                    <p className="text-xs text-gray-400">BDT 300</p>
                                </div>
                            </div>
                            <button
                                className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        
                        <div
                            className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-yellow-600 rounded-md flex items-center justify-center mr-3">
                                    <img src="./assets/pizza.svg" alt="Pizza slices" className="w-10 h-10"/>
                                </div>
                                <div>
                                    <h3 className="font-medium">Pizza slices</h3>
                                    <p className="text-xs text-gray-400">BDT 300</p>
                                </div>
                            </div>
                            <button
                                className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                
                <button
                    className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                    Place Order (BDT 100)
                </button>
            </div>

            
            <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
                
                <div>
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        
                        <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
                            <div className="text-5xl font-bold text-yellow-500 mb-2">8</div>
                            <div
                                className="bg-yellow-800 bg-opacity-50 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                                Total Order
                            </div>
                        </div>

                        
                        <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
                            <div className="text-5xl font-bold text-red-500 mb-2">7</div>
                            <div
                                className="bg-red-800 bg-opacity-50 text-red-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                                Pending
                            </div>
                        </div>

                        
                        <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
                            <div className="text-5xl font-bold text-green-500 mb-2">1</div>
                            <div
                                className="bg-green-800 bg-opacity-50 text-green-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                                Delivered
                            </div>
                        </div>
                    </div>
                </div>

                
                <div>
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

                        <div className="flex gap-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-funnel-icon lucide-funnel"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/></svg>
                        <select className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
                            <option>All</option>
                            <option>Pending</option>
                            <option>Delivered</option>
                        </select>
                        </div>
                    </div>
                    <div className="bg-cardbg rounded-lg p-4">
                        <div className="reports-container">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="text-left text-sm">
                                        <th className="pb-3 font-medium">ID</th>
                                        <th className="pb-3 font-medium">Customer Name</th>
                                        <th className="pb-3 font-medium">Items</th>
                                        <th className="pb-3 font-medium">Amount</th>
                                        <th className="pb-3 font-medium">Status</th>
                                        <th className="pb-3 font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    
                                    <tr className="border-t border-gray-700">
                                        <td className="py-3">21</td>
                                        <td className="py-3">Sumit Saha</td>
                                        <td className="py-3">5</td>
                                        <td className="py-3">123123</td>
                                        <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                        <td className="py-3">
                                            <button
                                                className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                            <button
                                                className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                        </td>
                                    </tr>

                                    
                                    <tr className="border-t border-gray-700">
                                        <td className="py-3">21</td>
                                        <td className="py-3">Akash Ahmed</td>
                                        <td className="py-3">5</td>
                                        <td className="py-3">123123</td>
                                        <td className="py-3"><span className="text-green-500">DELIVERED</span></td>
                                        <td className="py-3">
                                            <button
                                                className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                           
                                        </td>
                                    </tr>

                                    
                                    <tr className="border-t border-gray-700">
                                        <td className="py-3">21</td>
                                        <td className="py-3">Saad Hasan</td>
                                        <td className="py-3">5</td>
                                        <td className="py-3">123123</td>
                                        <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                        <td className="py-3">
                                            <button
                                                className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                            <button
                                                className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                        </td>
                                    </tr>

                                    
                                    <tr className="border-t border-gray-700">
                                        <td className="py-3">21</td>
                                        <td className="py-3">MD Salahuddin</td>
                                        <td className="py-3">5</td>
                                        <td className="py-3">123123</td>
                                        <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                        <td className="py-3">
                                            <button
                                                className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                            <button
                                                className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                        </td>
                                    </tr>

                                    
                                    <tr className="border-t border-gray-700">
                                        <td className="py-3">21</td>
                                        <td className="py-3">Ferdous</td>
                                        <td className="py-3">5</td>
                                        <td className="py-3">123123</td>
                                        <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                        <td className="py-3">
                                            <button
                                                className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                            <button
                                                className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                        </td>
                                    </tr>

                                    
                                    <tr className="border-t border-gray-700">
                                        <td className="py-3">21</td>
                                        <td className="py-3">Rafe</td>
                                        <td className="py-3">5</td>
                                        <td className="py-3">123123</td>
                                        <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                        <td className="py-3">
                                            <button
                                                className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                            <button
                                                className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                        </td>
                                    </tr>

                                    
                                    <tr className="border-t border-gray-700">
                                        <td className="py-3">21</td>
                                        <td className="py-3">Sarwar</td>
                                        <td className="py-3">5</td>
                                        <td className="py-3">123123</td>
                                        <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                        <td className="py-3">
                                            <button
                                                className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                            <button
                                                className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                        </td>
                                    </tr>

                                    
                                    <tr className="border-t border-gray-700">
                                        <td className="py-3">21</td>
                                        <td className="py-3">Obaidul</td>
                                        <td className="py-3">5</td>
                                        <td className="py-3">123123</td>
                                        <td className="py-3"><span className="text-red-500">PENDING</span></td>
                                        <td className="py-3">
                                            <button
                                                className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">Delete</button>
                                            <button
                                                className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">DELIVER</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}
