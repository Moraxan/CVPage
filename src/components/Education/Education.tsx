import '../../index.css';
import './Education.css';


export const Education = () => {
    return (
        <>
        <div className="education-container">
            <h2>Utbildning</h2>
        </div>
        <div className='education-text'>
            <div>
            IT-högskolan i Stockholm - .NET2022
        </div>
            <br></br>
        <div style={{ color: "#F68C8C" }}>
            2022 - 2024
        </div>
            <br></br>
        <div>
            Lärarhögskolan i Stockholm - Ma/NO-lärare
        </div>
            <br></br>
        <div style={{ color: "#F68C8C" }}>
            1999 - 2004
        </div>
        <br></br>
        <div style={{ marginTop: "10px" }}>
        <hr></hr>
        </div>
        <div className='work-experience'>
            <h2>Arbetslivserfarenhet</h2>
        </div>
        <div>
            Diverse olika lärarjobb som lärare i matematik och naturorienterande ämnen
        </div>
            <br></br>
        <div style={{ color: "#F68C8C" }}>
             2004 - 2023
        </div>
        </div>
        </>
    );
};