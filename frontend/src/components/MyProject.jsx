import { BsThreeDotsVertical } from "react-icons/bs";

const MyProject = () => {

    const projectAvatars = [
        "https://via.placeholder.com/30",
        "https://via.placeholder.com/30",
        "https://via.placeholder.com/30",
        "https://via.placeholder.com/30",
    ];

    return (
        <div>
            <div className="col-span-1">
                <div className="bg-white rounded-lg p-4 shadow">
                    <h3 className="font-bold">Project Name</h3>
                    <div className="flex justify-between">
                        <div>
                            <p className="pb-3">compony name</p>
                            <span className="text-blue-500 p-2 bg-blue-200 rounded-md">In Progress</span>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                            <BsThreeDotsVertical/>
                            <li className="text-red-600 font-semibold">High Priority</li>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center">
                        {/* Overlapping Images */}
                        <div className="flex">
                            {projectAvatars.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Avatar ${index}`}
                                    className="w-8 h-8 rounded-full border-2 border-white -ml-3 first:ml-0"
                                />
                            ))}
                        </div>
                        <span className="ml-4 text-gray-600">+3</span>
                    </div>
                    <div className="mt-4">
                        <div className="h-1 bg-gray-200 w-full mb-2">
                            <div className="h-1 bg-blue-500 w-2/3"></div>
                        </div>
                        <span className="text-sm">Task Done: 35/50</span>
                    </div>
                    <p className="text-xs text-red-500 mt-2">Due Date: 25 August</p>
                </div>
            </div>
        </div>
    )
}

export default MyProject
