// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, onSubmit, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-4 w-1/3">
                {children}
                <div className="flex justify-end mt-4">
                    <button
                        className="mr-2 px-4 py-2 bg-gray-200 rounded-lg"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={onSubmit}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
