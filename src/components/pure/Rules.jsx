import React from 'react';
import '../../App.css';

const Rules = () => {
    return (
        <div>
            <div className="card rules shadow mx-auto mt-5 mb-5">
                <div className='mt-3'>
                    <h3 className='mt-5 subtitle2'>Reglas</h3>
                </div>
                <p className='subtitle3 mt-5 mb-5'>
                    Dharma es una aplicación para dar y recibir regalos en forma de pequeñas sumas de dinero de forma desinteresada, aleatorea y anónima
                    <br/><br/>
                    Para participar debes seguir los siguientes pasos:
                    <br/><br/>
                    1.- Elige un palo de naipes que será tu representación como usuario en cada ronda.
                    <br/><br/>
                    2.- Haz un regalo, elige el monto que deseas transferir y elige una carta que representa a alguno de los demás participantes.
                    <br/><br/>
                    3.- Déjale un mensaje al participante al que le haces el regalo. En este mensaje no puede ir ningún tipo de información personal.
                    <br/><br/>
                    4.- Cuando la persona receptora del regalo te mande su mensaje de agradecimeinto, en elq ue tampoco puede ir ningun tipo de información personal, se habra completado el traspaso y quedaras disponible para ser receptor de un regalo de otro usuario 
                    <br/><br/>
                    5.- Por cada regalo que hagas deberas elegir una nueva carta y serás parte de las usuarios disponibles para regalar de los demás participantes
                    <br/><br/>
                    6.- Puedes hacer la cantidad de regalos que desees
                    <br/><br/>
                    Dharma es una aplicación para poner a prueba la ley del Dharma y comprobar que cuanto más das, más recibes.
                </p>
                <p className='subtitle2 mb-5'>♥♣♦♠</p>
            </div>
        </div>
    );
}

export default Rules;
