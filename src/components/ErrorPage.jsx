import { Link, useNavigate } from "react-router-dom"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()

    return (
        <div className=" flex items-center justify-center h-screen p-5">
            <div className=" flex flex-col items-center gap-y-5">
                <h1 className=" font-['Orbitron'] uppercase text-2xl text-center font-bold lg:text-4xl">
                    Uh oh! We've got a problem
                </h1>
                <p className=" font-['Poppins'] lg:text-xl">
                    {error.message || error.statusText}
                </p>
                <div className=" flex items-center gap-x-4">
                    <button
                        className=" flex items-center gap-x-1 bg-black rounded-md text-white px-4 py-2"
                        onClick={() => navigate(-1)}
                    >
                        <ion-icon name="arrow-undo" width={20}></ion-icon> 
                        <span>Go Back</span>
                    </button>
                    <Link
                        to="/"
                        className=" flex items-center gap-x-1 bg-black rounded-md text-white px-4 py-2"
                    >
                       <ion-icon name="home" width={20}></ion-icon> 
                        <span>Go Home</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage