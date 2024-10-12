export default function ErrorPage({ message } : any) {    
    return (
        <div className="w-full h-screen flex flex-col" id="error-page">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="my-8">{message}</p>
        </div>
    );
}