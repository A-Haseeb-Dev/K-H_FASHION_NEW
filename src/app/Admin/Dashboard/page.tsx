"use client";
import Link from "next/link";

export default function DashboardPage() {
  // Dummy stats
  const stats = [
    { title: "Total Products", value: 42 },
    { title: "Total Orders", value: 120 },
    { title: "Total Users", value: 25 },
    { title: "Revenue (PKR)", value: 95000 },
  ];

  const recentOrders = [
    { id: 101, customer: "John Doe", total: 5000, status: "Pending" },
    { id: 102, customer: "Jane Smith", total: 7500, status: "Shipped" },
    { id: 103, customer: "Ali Khan", total: 3000, status: "Delivered" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
            <p className="text-sm font-medium text-gray-500">{stat.title}</p>
            <p className="mt-2 text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4 mb-6">
        <Link href="./Products" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Product</Link>
        <Link href="./Users" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add User</Link>
        <Link href="./Orders" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">View Orders</Link>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <h2 className="text-xl font-semibold px-6 py-4 border-b">Recent Orders</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Order ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Customer</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Total (PKR)</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Placeholder for Graph / Analytics */}
      <div className="bg-white shadow rounded-lg mt-6 p-6 text-center text-gray-400">
        Graphs / Analytics Placeholder 📊
      </div>
    </>
  );
}
