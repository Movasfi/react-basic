import useUser from "../hooks/useUser";

const Home = () => {
    const { userName } = useUser();

    return (
        <div>
            <h1 className="text-4xl font-bold pb-3">Hey {userName}</h1>
            <p>Dit is Home Page</p>
        </div>
    )
}

export default Home