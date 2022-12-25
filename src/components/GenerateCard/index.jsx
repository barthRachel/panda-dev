import './generateCard.css';

function GenerateCard({ text, author}){

    const screenWidth = window.innerWidth;
    console.log(screenWidth)

    return(
        <div className='divGenerateCard secondaryBackground' style={{maxWidth : screenWidth}}>
            <p className='authorParagraph primaryBackground'>{"~ " + author}</p>
            <p className='generateParagraph'>{"« " + text + " »"}</p>
        </div>
    )
}

export default GenerateCard;