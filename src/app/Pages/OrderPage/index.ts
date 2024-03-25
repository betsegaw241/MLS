import OrderComponent from "app/Components/OrderComponent";
import { useEffect, useState } from "react";

function OrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <OrderComponent orders={orders} />
  );
}

export default OrderPage;
