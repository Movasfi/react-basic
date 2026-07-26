import { Link } from "react-router-dom"


const NoPageFound = () => {
    return (
        <div>
            <h1>404 NOT FOUND </h1>
            <p>You can navigate <Link to="/">back</Link> and try another page</p>
        </div>
    )
}

export default NoPageFound