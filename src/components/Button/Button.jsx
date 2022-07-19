import './Button.css'
export default function Button({type}) {
    return(
        <button className={"Button " + type}>{type}</button>
    )
}