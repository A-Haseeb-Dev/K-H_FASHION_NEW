"use client";
import { useState } from "react";

interface Order {
  id: number;
  customer: string;
  total: number;
  status: "Pending" | "Shipped" | "Delivered";
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, customer: "John Doe", total: 5000, status: "Pending" },
    { id: 2, customer: "Jane Smith", total: 7500, status: "Shipped" },
    { id: 3, customer: "Ali Khan", total: 3000, status: "Delivered" },
  ]);

  const handleStatusChange = (id: number, status: Order["status"]) => {
    setOrders(orders.map(o => (o.id === id ? { ...o, status } : o)));
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Order ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Customer</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Total (PKR)</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">{order.total}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white font-semibold ${
                      order.status === "Pending" ? "bg-yellow-500" :
                      order.status === "Shipped" ? "bg-blue-500" :
                      "bg-green-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleStatusChange(order.id, "Pending")}
                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => handleStatusChange(order.id, "Shipped")}
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Shipped
                  </button>
                  <button
                    onClick={() => handleStatusChange(order.id, "Delivered")}
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Delivered
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
