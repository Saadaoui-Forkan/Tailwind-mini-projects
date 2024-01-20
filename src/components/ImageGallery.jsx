import React from 'react'
import img1 from '../images/image1.jpg'
import img2 from '../images/image2.jpg'
import img3 from '../images/image3.jpg'
import img5 from '../images/image5.jpg'
import img4 from '../images/image4.jpg'
import img6 from '../images/image6.jpg'
import bookmark from '../images/bookmark.svg'

function ImageGallery() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
          <div className="group">
            <span>Vector</span>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <span>Illustrations</span>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <span>Images</span>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <span>Icons</span>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          <div className="flex justify-between border-b">
            <input
              type="text"
              className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
              placeholder="Search"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </div>

          <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="relative group">
            <img src={img1} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img src={img2} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img src={img3} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img src={img4} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img src={img5} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img src={img6} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes - 35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery