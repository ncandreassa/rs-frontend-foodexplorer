import { createContext, useContext, useState, useEffect } from "react";

export const OrdersContext = createContext({});

function OrdersProvider({ children }) {
    const [orders, setOrders] = useState(() => {
        const stored = localStorage.getItem("@foodexplorer:orders");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("@foodexplorer:orders", JSON.stringify(orders));
    }, [orders]);

    function getQuantity(id) {
        const item = orders.find(order => order.id === id);
        return item ? item.quantity : 0;
    }

    function getOrder(id) {
        return orders.find(order => order.id === id);
    }

    function getTotalQuantity() {
        return orders.reduce((total, item) => total + item.quantity, 0);
    }

    function clearOrders() {
        localStorage.removeItem('@foodexplorer:orders');
        setOrders([]);
    }

    function addOrUpdateOrder(order) {
        setOrders(prev => {
            const exists = prev.find(item => item.id === order.id);

            let updatedOrders;
            if (order.quantity === 0) {
                updatedOrders = prev.filter(item => item.id !== order.id);
            } else if (exists) {
                updatedOrders = prev.map(item =>
                    item.id === order.id ? { ...item, quantity: order.quantity } : item
                );
            } else {
                updatedOrders = [...prev, order];
            }

            return updatedOrders;
        });


    }

    return (
        <OrdersContext.Provider
            value={{
                orders,
                getQuantity,
                getOrder,
                addOrUpdateOrder,
                getTotalQuantity,
                clearOrders,
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
}

function useOrders() {
    const context = useContext(OrdersContext);
    return context;
}

export { OrdersProvider, useOrders };
