
export default function CardForm(props) {
    const categoryNames = props.categories.map(category => category.title);
    return (
    <div id="myModal" className="fixed left-0 top-0 z-10 w-full h-full bg-black bg-opacity-45">
        <div className="relative mt-24 mx-auto h-[550px] w-11/12 lg:w-3/5 md:w-4/5 p-10 border-2 border-blue-300 bg-blue-950 rounded-md">   
            <button
            type="button"
            className="close top-5 right-10 absolute text-2xl text-blue-500 hover:text-blue-300 font-bold"
            onClick={() => props.closeForm()}>
                x
            </button>
            <h3 className="text-3xl text-blue-300 font-bold mb-2 text-center">EDITAR CARD</h3>
            <form className="flex flex-col sm:w-5/6 lg:w-2/3 mt-8 mx-auto">
                <label className="text-white text-sm font-bold" htmlFor="titulo">Título</label>
                <input
                className="my-1 text-white bg-transparent rounded-md ring-1 ring-blue-300 focus:outline-none px-2 py-1"
                type="text"
                name="titulo"
                value={props.formData.title}
                />
                <label className="text-white text-sm font-bold" htmlFor="categoria">Categoria</label>
                <select className="my-1 text-white bg-transparent rounded-md ring-1 ring-blue-300 focus:outline-none px-2 py-1" name="categoria" value={props.formData.category}>
                    { categoryNames.map((categoryName) => <option className="bg-blue-900 text-white">{categoryName}</option>)}
                </select>
                <label className="text-white text-sm font-bold" htmlFor="imagen">Imagen</label>
                <input
                className="my-1 text-white bg-transparent rounded-md ring-1 ring-blue-300 focus:outline-none px-2 py-1"
                type="url"
                name="imagen"
                value={props.formData.imageURL} />
                <label className="text-white text-sm font-bold" htmlFor="video">Video</label>
                <input className="my-1 text-white bg-transparent rounded-md ring-1 ring-blue-300 focus:outline-none px-2 py-1"
                type="url"
                name="video"
                value={props.formData.videoURL} />
                <label className="text-white text-sm font-bold" htmlFor="descripcion">Descripción</label>
                <textarea
                className="my-1 text-white bg-transparent rounded-md ring-1 ring-blue-300 focus:outline-none px-2 py-1"
                name="descripcion"
                value={props.formData.description}
                />
                <div className="flex justify-between items-center mt-8">
                    <button type="submit" className="inner-shadow rounded-md text-white border border-blue-500 px-3 py-1 w-32 hover:scale-105 transition-transform">
                        Guardar
                    </button>
                    <button
                    type="button" className="rounded-md text-white border px-3 py-1 w-32 hover:scale-105 transition-transform"
                    onClick={() => props.closeForm()}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}
