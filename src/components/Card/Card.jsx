import './Card.css'
export default function Card({ cardContent, color }) {

    const handleOnMouseMove = e => {
        const { currentTarget: target } = e

        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top
            console.log(y, x)

        target.style.setProperty("--mouse-x", `${x}px`)
        target.style.setProperty("--mouse-y", `${y}px`)
        console.log(target.style)
    }

    for(const card of document.querySelectorAll(".CardFront")) {
        card.onmousemove = e => handleOnMouseMove(e)
    }

    return (
        <div className='Card'>
            <div className='card-border'></div>
            <div 
                className='card-content'
                style={{
                    backgroundColor: color === 'white' ? 'rgb(71, 71, 71)' : 'rgb(23, 23, 23)'
                }}
            >
                <div className='card-content-text'>
                    {cardContent}
                </div>
            </div>
        </div>
    )
} 