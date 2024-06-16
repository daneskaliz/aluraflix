
export default function CardForm() {

    return (
    <div id="myModal" className="hidden fixed left-0 top-0 z-10 w-full h-full bg-black bg-opacity-45">
        <div className="relative mt-20 mx-auto h-4/5 w-3/5 p-10 border-2 border-blue-300 bg-blue-950 rounded-md">   
            <button type="button" className="close top-5 right-10 absolute text-2xl text-blue-500 hover:text-blue-300 font-bold">
                x
            </button>
            <h3 className="text-3xl text-blue-300 font-bold mb-2 text-center">EDITAR CARD</h3>
            <form className="flex flex-col w-2/3 mt-8 mx-auto">
                <label className="text-white text-sm font-bold" htmlFor="titulo">Título</label>
                <input className="my-1 text-white bg-transparent rounded-md ring-1 ring-blue-300 focus:outline-none px-2 py-1" type="text" name="titulo" />
                <label className="text-white text-sm font-bold" htmlFor="categoria">Categoria</label>
                <input className="my-1 text-white bg-transparent rounded-md ring-1 ring-blue-300 focus:outline-none px-2 py-1" type="text" name="categoria" />
                <label className="text-white text-sm font-bold" htmlFor="imagen">Imagen</label>
                <input className="my-1 text-white bg-transparent rounded-md ring-1 ring-blue-300 focus:outline-none px-2 py-1" type="url" name="imagen" />
                <label className="text-white text-sm font-bold" htmlFor="video">Video</label>
                <input className="my-1 text-white bg-transparent rounded-md ring-1 ring-blue-300 focus:outline-none px-2 py-1" type="url" name="video" />
                <label className="text-white text-sm font-bold" htmlFor="descripcion">Descripción</label>
                <textarea className="my-1 text-white bg-transparent rounded-md ring-1 ring-blue-300 focus:outline-none px-2 py-1" name="descripcion" />
                <div className="flex justify-between items-center mt-8">
                    <button type="submit" className="inner-shadow rounded-md text-white border border-blue-500 px-3 py-1 w-32 hover:scale-105 transition-transform">
                        Guardar
                    </button>
                    <button type="button" className="rounded-md text-white border px-3 py-1 w-32 hover:scale-105 transition-transform">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}
