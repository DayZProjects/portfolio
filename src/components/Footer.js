import React from 'react'
import { FaVk } from 'react-icons/fa';


function Footer() {
  return (
    <div className="py-5 border-t-3/2">
            <div className="flex align-center justify-center mt-4">
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://vk.com/id118935597">
                <FaVk />
                <span class="sr-only">VK</span>
              </a>
             
             
            </div>
            <div className="flex align-center justify-center mt-4">
              <p className="text-black mb-4">
                  Made with <span className = "mr-2" role="img" aria-label="heart">💙 </span>by<a className="text-blue-500 hover:underline" href="mailto:vanyayudin26@gmail.com"> Ivan Yudin</a>
              </p>
              </div>
    </div>
  )
}

export default Footer