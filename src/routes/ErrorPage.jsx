import { useRouteError, Link } from "react-router-dom";
import './ErrorPage.css';
import { FaHome } from "react-icons/fa";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1> Uuups! </h1>
            <p> Desculpe, algo de errado aconteceu. </p>
            <p>
                <i> {error.statusText || error.message} </i>
            </p>
            <p><Link to="/"> <FaHome /> </Link></p>
        </div>
    );
}