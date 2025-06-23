import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const DishesContext = createContext({});

function DishesProvider({ children }) {
    const [dishes, setDishes] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (query.length > 3) {
            fetchDishes(query)
        }

        if (query.length === 0) {
            fetchDishes()
        }
    }, [query])

    async function fetchDishes(searchText = "") {
        try {
            const query = searchText ? `?text=${encodeURIComponent(searchText)}` : "";
            const response = await api.get(`/dishes${query}`);

            setDishes(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <DishesContext.Provider
            value={{
                dishes,
                fetchDishes,
                setQuery,
                query,
            }}
        >
            {children}
        </DishesContext.Provider>
    );
}

function useDishes() {
    const context = useContext(DishesContext);
    return context;
}

export { DishesProvider, useDishes };
