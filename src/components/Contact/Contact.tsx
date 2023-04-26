import '../../index.css';
import './Contact.css';



export const Contact = () => {
    return (
        <>
        <div className='presimage'>
            <img src="src\assets\images\calleimage.png" alt="Calle" />
        </div>
        <div className='presinfo'>
            <h1>Carl-Johan Svensson</h1>
            <p>Systemutvecklare</p>
        </div>
        <hr></hr>
        <div className='contactinfo'>
            <p>Telefon: <br></br>
            <a href="tel:+46704165344">+46704165344</a>
            <br></br>
                <br></br>

                E-post: <br></br>
                <a href="mailto:calletrumma@gmail.com">calletrumma@gmail.com</a>
                <br></br>
                <br></br>

                Adress: <br></br>
                Bollmoravägen 4,<br></br>
                135 40<br></br>
                Tyresö<br></br>
                <br></br>

                Referenser:<br></br>
                Lämnas på begäran<br></br>
            </p>
        </div>
        </>
    );
};