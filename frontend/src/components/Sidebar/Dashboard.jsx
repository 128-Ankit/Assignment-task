import { useState, useEffect, useRef } from "react";
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
    const sidebarRef = useRef(null);  
    const menuButtonRef = useRef(null);  
    // Close the sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current && !sidebarRef.current.contains(event.target) &&
                menuButtonRef.current && !menuButtonRef.current.contains(event.target)
            ) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-purple-200 to-purple-100 text-gray-700">
            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                className={`fixed md:relative z-50 bg-white rounded-xl shadow-md w-4/5 md:w-1/5 p-4 transition-transform transform md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
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
                <div className="flex flex-wrap justify-between items-center mb-6 bg-white p-3 rounded-xl">
                    <div className="flex items-center w-full sm:w-auto">
                        <button
                            ref={menuButtonRef}  
                            className="md:hidden p-2"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <HiOutlineMenuAlt3 className="w-6 h-6 text-gray-600" />
                        </button>
                        <div className="flex gap-4 items-center w-full sm:w-auto">
                            <h2 className="text-2xl font-bold ml-2">Dashboard</h2>
                            <div className="p-1 pl-3 bg-slate-200 rounded-md flex items-center gap-3 w-full sm:w-auto">
                                <FaSearch className="w-5 h-5 text-gray-500" />
                                <input
                                    type="search"
                                    placeholder="search"
                                    className="p-1 outline-none bg-slate-200 w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-end mt-4 sm:mt-0">
                        <FaBell className="w-5 h-5 text-gray-500" />
                        <div className="flex items-center gap-3">
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="Profile"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h1 className="font-medium">Ankit Code</h1>
                                <p className="text-[12px]">Administrator</p>
                            </div>
                        </div>
                        <CiSquareChevDown className="text-[40px] font-bold" />
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {/* Project */}
                    <div className="lg:col-span-1">
                        <MyProject color={1}/>
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
