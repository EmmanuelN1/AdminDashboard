import Head from "next/head";
import Image from "next/image";
import { AiFillDashboard } from "react-icons/ai";
import { FaAppStore } from 'react-icons/fa';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaStarOfLife } from 'react-icons/fa';
import { FaRocketchat } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { TiWarningOutline } from 'react-icons/ti';
import { FiSettings } from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import { FcBusinesswoman } from "react-icons/fc";
import Logo from "../assets/Logo.png";
import Link from "next/link"
import Banner from "../components/Banner";
import Cards from "../components/Cards";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Admin Dasboard</title>
      </Head>

      
      <div className="bg-gray-200">
          <div className="flex">
              <div className=" bg-red-900 w-64 h-screen">
                  <div className="bg-red-800 pt-3">
                            <Image 
                                src={Logo}
                                width={150}
                                height={60}
                                objectFit="contain"
                                className="cursor-pointer"
                             /> 
                  </div>

                  <div>
                    <p className="p-5 text-gray-200 uppercase text-xs font-bold ">Pages</p>
                  </div>

                  <div className="flex m-5 text-white mt-2 ">
                        <div>
                            <AiFillDashboard className="w-5 h-5"/>
                        </div>
                        <div className="mx-3 text-sm">Dasboard</div>

                  </div>
                  <div className="flex m-5 text-white mt-2 ">
                        <div>
                            <FaUsers className="w-5 h-5"/>
                        </div>
                        <div className="mx-3 text-sm">Customers</div>

                  </div>

                  <div className="flex m-5 text-white mt-2 ">
                        <div>
                            <FaMoneyBillAlt className="w-5 h-5"/>
                        </div>
                        <div className="mx-3 text-sm">Orders</div>

                  </div>

                  <div className="flex m-5 text-white mt-2 ">
                        <div>
                            <FaStarOfLife className="w-5 h-5"/>
                        </div>
                        <div className="mx-3 text-sm">Campaign</div>

                  </div>

                  <div className="flex m-5 text-white mt-2 ">
                        <div>
                            <MdMessage className="w-5 h-5"/>
                        </div>
                        <div className="mx-3 text-sm">Messages</div>

                  </div>

                  <div className="flex m-5 text-white mt-2 ">
                        <div>
                            <FaAppStore className="w-5 h-5"/>
                        </div>
                        <div className="mx-3 text-sm">App</div>

                  </div>

                  <div className="flex m-5 text-white mt-2 ">
                        <div>
                            <FiSettings className="w-5 h-5"/>
                        </div>
                        <div className="mx-3 text-sm">Settings</div>

                  </div>
              </div>

              <div className="flex-1">
                    <div>
                        <div className="bg-white px-2 py-0.5 h-18 flex">
                            <div className=" md:w-3/4 sm:w-1/3 flex p-3">
                                <FcBusinesswoman className="w-10 h-10"/>
                                <span className="block p-2 font-semibold ">Jane Doe</span>
                            </div>

                            <div className="flex md:w-1/4 sm:w-2/3">
                                <FaSearch className="w-5 h-5  mx-2 my-5 "/>
                                <FaRocketchat className=" w-5 h-5 mx-2 my-5"/>
                                <TiWarningOutline className=" w-5 h-5 mx-2 my-5 "/> 
                                <Link href="/signin">
                                    <a className="mt-4 mx-2 text-red-500"> <span className="text-black">|</span> Logout </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Banner/>
                    <Cards/>

                    
                    
              </div>



          </div>

      </div>

    </div>
  );
}
