import "./StackBox.scss";

function StackBox({ stack }) {
    return (
        <div className="stack">
            {stack.length > 0 ? (
                <ul className="stack__list">
                    {stack.map((card, index) => (
                        <li className="stack__list--item" key={index}>
                            <div className="stack__card-name">{card.name}</div>
                            <div className="stack__mana-cost">{card.manaCost}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="stack__empty-stack">The stack is empty.</div>
            )}
        </div>
    );
}

export default StackBox