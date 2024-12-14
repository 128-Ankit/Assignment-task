
const Messages = () => {
    const data = [
        {
            name: "Marvin McKinney",
            dic: "small description"
        },
        {
            name: "Wade Warren",

            dic: "small description"
        },
        {
            name: "John Cooper",

            dic: "small description"
        },
       
    ]
    return (
        <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-bold mb-4">Messages</h3>
            <ul className="space-y-2">
                {data.map((data, idx) => (
                    <li
                        key={idx}
                        className="flex justify-between items-center border-b pb-1"
                    >
                        <div className="flex items-center">
                            <img
                                src="https://via.placeholder.com/30"
                                alt="Profile"
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <div className="flex flex-col">
                            <h1 className="font-medium"> {data.name}</h1>
                            <p className="pl-1">{data.dic}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Messages
