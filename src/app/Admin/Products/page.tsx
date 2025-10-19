// "use client";
// import { useState } from "react";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   stock: number;
//   image: string;
// }

// export default function ProductsPage() {
//   const [products, setProducts] = useState<Product[]>([
//     { id: 1, name: "Classic T-Shirt", price: 2500, stock: 10, image: "/img1.jpg" },
//     { id: 2, name: "Denim Jacket", price: 7500, stock: 5, image: "/img2.jpg" },
//   ]);

//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     stock: "",
//     image: "",
//   });

//   const addProduct = () => {
//     if (!newProduct.name || !newProduct.price) return;
//     setProducts([
//       ...products,
//       {
//         id: Date.now(),
//         name: newProduct.name,
//         price: Number(newProduct.price),
//         stock: Number(newProduct.stock),
//         image: newProduct.image || "/default.jpg",
//       },
//     ]);
//     setNewProduct({ name: "", price: "", stock: "", image: "" });
//   };

//   const deleteProduct = (id: number) => {
//     setProducts(products.filter((p) => p.id !== id));
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold">Products Management</h1>

//       {/* Add Product Form */}
//       <div className="p-4 border rounded-lg bg-gray-50">
//         <h2 className="text-lg font-semibold mb-2">Add New Product</h2>
//         <div className="grid grid-cols-2 gap-3">
//           <input
//             placeholder="Product Name"
//             className="border p-2 rounded"
//             value={newProduct.name}
//             onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//           />
//           <input
//             placeholder="Price"
//             className="border p-2 rounded"
//             type="number"
//             value={newProduct.price}
//             onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//           />
//           <input
//             placeholder="Stock"
//             className="border p-2 rounded"
//             type="number"
//             value={newProduct.stock}
//             onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
//           />
//           <input
//             placeholder="Image URL"
//             className="border p-2 rounded"
//             value={newProduct.image}
//             onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
//           />
//         </div>
//         <button
//           onClick={addProduct}
//           className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
//         >
//           Add Product
//         </button>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-3 gap-4">
//         {products.map((p) => (
//           <div key={p.id} className="border rounded-lg p-3">
//             <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded" />
//             <h3 className="font-semibold mt-2">{p.name}</h3>
//             <p>PKR {p.price}</p>
//             <p className="text-sm text-gray-500">Stock: {p.stock}</p>
//             <button
//               onClick={() => deleteProduct(p.id)}
//               className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }























"use client";
import { useState } from "react";
import ProductsTable from "../AdminComponents/ProductsTable";
import AddEditProductModal from "../AdminComponents/AddEditProductModal";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Classic T-Shirt", price: 2500, stock: 10, image: "/img1.jpg" },
    { id: 2, name: "Denim Jacket", price: 7500, stock: 5, image: "/img2.jpg" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);

  const handleAdd = () => {
    setEditingProduct(undefined);
    setModalOpen(true);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setModalOpen(true);
  };

  const handleSave = (product: Product) => {
    if (product.id) {
      // Edit existing
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      // Add new
      setProducts([...products, { ...product, id: Date.now() }]);
    }
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ Add Product</button>
      </div>

      <ProductsTable products={products} onEdit={handleEdit} onDelete={handleDelete} />

      <AddEditProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={editingProduct}
      />
    </>
  );
}
