export default function Post({ image, name, setSelectedPostName }) {
    const handleClick = (otterName) => {
        return console.log('You clicked ' + otterName)
    }

    return (
        <li className='post-component'>
            <button onClick={() => setSelectedPostName(name)}>
                <img src={image} alt={name} />
                <p className="post-name">{name}</p>
            </button>
        </li>
    )
}
