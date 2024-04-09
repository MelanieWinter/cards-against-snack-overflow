import './Card.css'
export default function Card() {

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
            <div className='card-content'></div>
            {/* <span>Card Front</span> */}
        </div>
    )
} 