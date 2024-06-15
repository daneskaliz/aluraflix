import trashIcon from '../assets/trash.svg';
import pencilIcon from '../assets/pencil.svg';

export default function CardSection(props) {
    const backgroundClass = `bg-${props.cardSection.color}`;
    const borderClass = `border-${props.cardSection.color}`;

    return (
        <section className="my-14 px-4">
            <div className={'rounded-md p-2 w-1/4 text-center ' + backgroundClass}>
                <h4 className='font-bold text-xl text-white'>
                    {props.cardSection.title}
                </h4>
            </div>
            <div className="flex items-center justify-between">
                { props.cardSection.cards.map(card => 
                    <div key={card.title} className="mt-4 w-1/4">
                        <img src={card.image} alt={card.title} />
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
