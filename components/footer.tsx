import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>
            
            <div className="relative max-w-screen-xl mx-auto px-4 w-full py-12 md:py-20">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
                            <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-3 rounded-lg group-hover:shadow-lg transition-all duration-300">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.06 2.524 1 1 0 01-1.538 0z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">LuxuryStay</h2>
                                <p className="text-sm text-gray-400">Premium Hotel Experience</p>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                            Experience unparalleled luxury and comfort at LuxuryStay. We provide world-class accommodations with exceptional service to make your stay unforgettable.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.17 1.219-5.17s-.219-.438-.219-1.085c0-1.016.589-1.775 1.323-1.775.623 0 .924.466.924 1.025 0 .624-.397 1.559-.603 2.424-.171.72.361 1.307 1.073 1.307 1.288 0 2.278-1.36 2.278-3.327 0-1.741-1.252-2.956-3.044-2.956-2.073 0-3.292 1.553-3.292 3.16 0 .625.24 1.295.54 1.659.059.072.068.135.05.209-.055.23-.177.719-.2.82-.031.129-.101.158-.233.095-1.177-.549-1.913-2.273-1.913-3.658 0-2.98 2.164-5.715 6.242-5.715 3.274 0 5.82 2.333 5.82 5.453 0 3.254-2.052 5.87-4.898 5.87-.955 0-1.856-.497-2.164-1.09l-.588 2.241c-.213.828-.789 1.865-1.175 2.497C9.084 23.815 10.519 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                                </svg>
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center space-x-2"><span>→</span><span>Home</span></Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center space-x-2"><span>→</span><span>About Us</span></Link></li>
                            <li><Link href="/room" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center space-x-2"><span>→</span><span>Rooms & Suites</span></Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center space-x-2"><span>→</span><span>Contact</span></Link></li>
                        </ul>
                    </div>
                    
                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-6">Stay Updated</h4>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Subscribe to get special offers, latest news and exclusive deals delivered to your inbox.
                        </p>
                        <form className="space-y-4">
                            <div className="relative">
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="w-full p-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-200" 
                                    placeholder="Enter your email"
                                />
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                            </div>
                            <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/25 transform hover:-translate-y-0.5">
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>
                
                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        &copy; 2025 LuxuryStay. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">Privacy Policy</Link>
                        <Link href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">Terms of Service</Link>
                        <Link href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer ;