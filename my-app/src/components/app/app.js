import { useState, useEffect, useContext } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
//
import { Context } from "../../context";
import "./app.css";

// vercalga react project qo'yish netlifydan oson ekan endi vercalgaham doim hamma loyihalarni qo'yib borish kerak ekan

////S.B-1,2-modul project  Movie with useContext hook,  Reducers with comment and npm run build with data jsonplaceholder for app.netlify.com 
const App = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { _, dispatch } = useContext(Context);

    useEffect(() => {
        setIsLoading(true);

        fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
            .then((response) => response.json())
            .then((json) => {
                const newArr = json.map((item) => ({
                    name: item.title,
                    id: item.id,
                    viewers: item.id * 20,
                    favourite: false,
                    like: false,
                }));
                dispatch({ type: "GET_DATA", payLoad: newArr });
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                {isLoading && "Loading.."}
                <MovieList />
                <MoviesAddForm />
            </div>
        </div>
    );
};

export default App;
