import { useState } from "react";
import { FaSearch, FaCalendarAlt, FaBell } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { RiTaskLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineTask } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { CiSquareChevDown } from "react-icons/ci";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import MyProject from "../MyProject";
import TaskPage from "../../pages/TaskPage";
import Messages from "../Messages";
import Timeline from "../Timeline";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-purple-200 to-purple-100 text-gray-700">
            {/* Sidebar */}
            <aside className={`fixed md:relative z-50 bg-white rounded-xl shadow-md w-4/5 md:w-1/5 p-4 transition-transform transform md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <h1 className="text-lg font-bold mb-6">Ankit Code</h1>
                <ul className="space-y-4">
                    <li className="font-semibold text-blue-500 flex items-center gap-2"><MdDashboard /> <p>Dashboard</p></li>
                    <li className="flex items-center gap-2"><RiTaskLine />Project</li>
                    <li className="flex items-center gap-2"><FaUserFriends />My Client</li>
                    <li className="flex items-center gap-2"> <MdOutlineTask />My Task</li>
                    <li className="flex items-center gap-2"> <FiMessageSquare />Message</li>
                    <li className="flex items-center gap-2"><MdOutlineAccountBalanceWallet />My Billing</li>
                </ul>
                <div className="lg:absolute bottom-0 mt-12 mr-8 mb-5 bg-purple-500 p-4 rounded-2xl flex flex-col items-center justify-center gap-5">
                    <h1 className="text-[20px] text-white font-semibold">Upgrade to PRO for more features</h1>
                    <button className="bg-white px-4 py-2 rounded-lg w-full md:w-auto">
                        Upgrade
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Navbar */}
                <div className="flex justify-between items-center mb-6 bg-white p-3 rounded-xl">
                    <div className="flex items-center">
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <HiOutlineMenuAlt3 className="w-6 h-6 text-gray-600" />
                        </button>
                        <div className="flex gap-4 items-center ">
                            <h2 className="text-2xl font-bold ml-2">Dashboard</h2>
                            <div className="p-1 pl-3 bg-slate-200 rounded-md flex items-center gap-3">
                                <FaSearch className="w-5 h-5 text-gray-500" />
                                <input
                                    type="search"
                                    placeholder="search"
                                    className="p-1 outline-none bg-slate-200"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaBell className="w-5 h-5 text-gray-500" />
                        <div className=" flex items-center gap-3">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h1 className="font-medium">Ankit Code</h1>
                                <p className="text-[12px]">Administrator</p>
                            </div>
                        </div>
                        <CiSquareChevDown className="text-[40px] font-bold"/>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Project Cards */}
                    <MyProject />

                    {/* My Tasks */}
                    <div className="col-span-1 bg-white rounded-xl">
                        <TaskPage />
                    </div>

                    {/* Calendar */}
                    <div className="col-span-1">
                        <div className="bg-white rounded-lg p-4 shadow">
                            <div className="flex items-center gap-2 mb-4">
                                <FaCalendarAlt className="text-blue-500" />
                                <h3 className="font-bold">October 2022</h3>
                            </div>
                            <div className="grid grid-cols-7 text-center gap-1">
                                {"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",").map((day) => (
                                    <div key={day} className="font-semibold text-gray-400">
                                        {day}
                                    </div>
                                ))}
                                {[...Array(31).keys()].map((day) => (
                                    <div
                                        key={day}
                                        className={`p-1 rounded-full cursor-pointer hover:bg-blue-200 ${day + 1 === 27 ? "bg-blue-500 text-white" : ""
                                            }`}
                                    >
                                        {day + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline and Messages */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {/* Project */}
                    <div className="lg:col-span-1">
                        <MyProject />
                    </div>
                    {/* Timeline */}
                    <div className="lg:col-span-1">
                        <Timeline />
                    </div>

                    {/* Messages */}
                    <div className="lg:col-span-1">
                        <Messages />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
