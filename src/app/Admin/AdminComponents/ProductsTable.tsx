// "use client";
// import { useState } from "react";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   stock: number;
//   image: string;
// }

// interface ProductsTableProps {
//   products: Product[];
//   onEdit: (product: Product) => void;
//   onDelete: (id: number) => void;
// }

// export default function ProductsTable({ products, onEdit, onDelete }: ProductsTableProps) {
//   return (
//     <div className="overflow-x-auto bg-white shadow rounded-lg">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
//             <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
//             <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Price</th>
//             <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Stock</th>
//             <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {products.map((p) => (
//             <tr key={p.id} className="hover:bg-gray-50">
//               <td className="px-4 py-2">{p.id}</td>
//               <td className="px-4 py-2">{p.name}</td>
//               <td className="px-4 py-2">PKR {p.price}</td>
//               <td className="px-4 py-2">{p.stock}</td>
//               <td className="px-4 py-2 flex gap-2">
//                 <button
//                   onClick={() => onEdit(p)}
//                   className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDelete(p.id)}
//                   className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }





























"use client";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}

interface Props {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
}

export default function ProductsTable({ products, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-x-auto shadow rounded-lg bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Price</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Stock</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Image</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {products.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2">{p.id}</td>
              <td className="px-4 py-2 font-medium">{p.name}</td>
              <td className="px-4 py-2">PKR {p.price}</td>
              <td className="px-4 py-2">{p.stock}</td>
              <td className="px-4 py-2">
                <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded"/>
              </td>
              <td className="px-4 py-2 flex gap-2">
                <button onClick={() => onEdit(p)} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
                <button onClick={() => onDelete(p.id)} className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
