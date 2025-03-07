import Card from "./Card";

function CommandList() {
    const cards = [...Array(10).keys()];
    //console.log(cards.map(e => console.log(e)));

    return (
        <>
            <div className="flex flex-col align-middle justify-center items-center w-4/4 h-full p-4 lg:px-28">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {cards.map(el => (<Card key={el} el={el} />))}
                </div>
            </div>
        </>
    )
}

export default CommandList