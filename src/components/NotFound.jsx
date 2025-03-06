function NotFound({ title, text }) {
    return (
        <>
            <div className="flex flex-col align-middle justify-center items-center h-full">
                <div className="flex flex-col items-center gap-4 bg-gray-200 p-4 rounded-lg">
                    <p className="text-8xl">😱</p>
                    <p className="text-gray-800 font-bold">{title} </p>
                    <p className="text-gray-500">{text}</p>
                </div>
            </div>
        </>
    )
}

export default NotFound