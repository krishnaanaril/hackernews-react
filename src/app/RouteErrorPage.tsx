import { useRouteError } from "react-router-dom";

export default function RouteErrorPage() {
    const error: any = useRouteError();

    return (
        <div className="w-full h-screen flex flex-col" id="error-page">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="my-8">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}