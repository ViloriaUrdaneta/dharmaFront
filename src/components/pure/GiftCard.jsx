import React from 'react';
import '../../App.css';


const GiftCard = ({ id, card, message, onGiftCardClick, setMessage }) => {

    const handleClick = () => {
        onGiftCardClick(id);
    };

    console.log(card)

    return (
        <div>
            <div className="card giftCard shadow shadow-lg mb-5 mt-5 mx-auto">
            <h1 className='mt-5 fs-1'>{card}</h1>
            <p className='mt-3 subtitle3'>{message}</p>
            <h1 className='fs-1'>?</h1>
                <div>
                    <input 
                            type="text" 
                            className="form-control col-md-4 mt-2 input inputGiftCard centered-placeholder" 
                            placeholder='Agradécelo para recibirlo'
                            onChange={(e) => setMessage(e.target.value)}  
                        />
                        <hr className='line3 mx-auto' />
                        <div className='d-grid d-md-flex justify-content-md-end'>
                            <div className='d-grid mt-2 mx-auto'>
                                <button 
                                    class="btn btn-outline-danger boton3 shadow shadow-sm"
                                    onClick={handleClick}
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default GiftCard;