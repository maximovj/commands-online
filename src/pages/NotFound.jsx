import ToolBar from "../components/ToolBar"

/* 
<div className='min-h-screen flex flex-col items-center justify-center'>
                <div className="flex-grow w-full h-full m-4">
                    <h1>Página: All</h1>
                </div>
            </div>
*/

function NotFound({ title, text }) {
    return (
        <>
            <ToolBar success={true}></ToolBar>
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <div className="flex-grow w-full h-full m-4">
                    <div className="min-h-screen flex flex-col align-middle justify-center items-center h-full">
                        <div className="flex flex-col items-center gap-4 bg-gray-200 p-4 rounded-lg">
                            <p className="text-8xl">😱</p>
                            <p className="text-gray-800 font-bold">{title} </p>
                            <p className="text-gray-500">{text}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NotFound