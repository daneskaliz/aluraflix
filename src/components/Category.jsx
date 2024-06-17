import trashIcon from '../assets/trash.svg';
import pencilIcon from '../assets/pencil.svg';

export default function Category(props) {
    const backgroundClass = `bg-${props.category.color}`;
    const borderClass = `border-${props.category.color}`;
    const categoryTitle = props.category.title.toUpperCase();

    return (
        <section className="my-14 px-4">
            <div className={'rounded-md p-2 w-5/6 md:w-1/2 lg:w-2/6 text-center flex justify-center md:mx-auto lg:ml-0 ' + backgroundClass}>
                <h4 className='font-bold text-xl text-white'>
                    {categoryTitle}
                </h4>
            </div>
            <div className="grid md:flex items-center justify-between gap-2">
                { props.category.cards.map(card =>
                    <div key={card.title} className="mt-4 w-11/12 md:w-2/6 lg:w-1/4">
                        <img src={card.imageURL} alt={card.description} />
                        <div className={'flex items-center bg-stone-800 rounded-md border-4 -mt-2 ' + borderClass}>
                            <button type="button" className="opacity-5 hover:opacity-95 transition-opacity flex items-center gap-2 justify-center py-2 text-sm text-white w-1/2">
                            <img src={pencilIcon} alt="pencil icon" className='w-4' />
                                Editar
                            </button>
                            <button type="button" className="opacity-5 hover:opacity-95 transition-opacity flex items-center gap-2 justify-center py-2 text-sm text-white w-1/2">
                                <img src={trashIcon} alt="trash icon" className='w-4' />
                                Borrar
                            </button>
                        </div>
                    </div>
                ) }
            </div>
        </section>
    )
}
