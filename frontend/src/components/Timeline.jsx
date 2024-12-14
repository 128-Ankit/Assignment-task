import { GoVideo } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";

const data = [
    {
        title: "Create Wireframe",
        duration: "12:34"
    },
    {
        title: "Create Wireframe",
        duration: "12:34"
    },
    {
        title: "Create Wireframe",
        duration: "12:34"
    },
    {
        title: "Create Wireframe",
        duration: "12:34"
    },
    {
        title: "Create Wireframe",
        duration: "12:34"
    },
    {
        title: "Create Wireframe",
        duration: "12:34"
    },
]
const Timeline = () => {
    return (
        <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex justify-between">
                <h3 className="font-bold mb-4">Timeline</h3>
                <BsThreeDotsVertical/>
            </div>
            <ul className="space-y-2">
                {data.map((data, index) => (
                    <li className="flex justify-between pr-5 items-center" key={index}>
                        <div className="flex items-center gap-3">
                            <GoVideo />
                            {data.title}
                        </div>
                        <span className="text-gray-500">{data.duration}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Timeline
