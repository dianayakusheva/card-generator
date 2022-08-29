export default function Generator() {
    return (
        <main>
            <div className="form">
                <input 
                type="text"
                placeholder="Top text"
                name="top text"
                className="form--input"
                /> 

                <input 
                type="text"
                placeholder="Bottom text"
                name="bottom text"
                className="form--input"
                />
                <button className="form--button"> Get a new greeting card </button>
            </div>
        </main>   
    )
}