// "use client";
// import { Fragment, useState, useEffect } from "react";
// import { Dialog, Transition } from "@headlessui/react";

// interface Product {
//   id?: number;
//   name: string;
//   price: number;
//   stock: number;
//   image: string;
// }

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (product: Product) => void;
//   initialData?: Product;
// }

// export default function AddEditProductModal({ isOpen, onClose, onSave, initialData }: ModalProps) {
//   const [name, setName] = useState(initialData?.name || "");
//   const [price, setPrice] = useState(initialData?.price || 0);
//   const [stock, setStock] = useState(initialData?.stock || 0);
//   const [image, setImage] = useState(initialData?.image || "");

//   useEffect(() => {
//     if (initialData) {
//       setName(initialData.name);
//       setPrice(initialData.price);
//       setStock(initialData.stock);
//       setImage(initialData.image);
//     }
//   }, [initialData]);

//   const handleSubmit = () => {
//     onSave({ id: initialData?.id, name, price, stock, image: image || "/default.jpg" });
//     setName(""); setPrice(0); setStock(0); setImage("");
//     onClose();
//   };

//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog as="div" className="relative z-10" onClose={onClose}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
//           leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black bg-opacity-25" />
//         </Transition.Child>

//         <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
//             leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
//           >
//             <Dialog.Panel className="w-full max-w-md p-6 bg-white rounded shadow">
//               <Dialog.Title className="text-xl font-bold mb-4">{initialData ? "Edit Product" : "Add Product"}</Dialog.Title>
//               <div className="flex flex-col gap-3">
//                 <input type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 rounded"/>
//                 <label>Price</label>
//                 <input type="number" placeholder="Price" value={price} onChange={e => setPrice(Number(e.target.value))} className="border p-2 rounded"/>
//                 <label>Stock</label>
//                 <input type="number" placeholder="Stock" value={stock} onChange={e => setStock(Number(e.target.value))} className="border p-2 rounded"/>
//                 <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} className="border p-2 rounded"/>
//               </div>
//               <div className="flex justify-end gap-2 mt-4">
//                 <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
//                 <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
//               </div>
//             </Dialog.Panel>
//           </Transition.Child>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// }















"use client";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition, Tab } from "@headlessui/react";

interface Product {
  id?: number;
  name: string;
  price: number;
  stock: number;
  images: string[];
}

interface Props {
  product?: Product;
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
}

export default function AddEditProductModal({ product, isOpen, onClose, onSave }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState<Product>({
    id: product?.id,
    name: product?.name || "",
    price: product?.price || 0,
    stock: product?.stock || 0,
    images: product?.images || [""],
  });

  const handleSave = () => {
    if (!formData.name || formData.price <= 0) {
      alert("Please fill all required fields!");
      return;
    }
    onSave(formData);
    onClose();
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="transition-transform duration-200"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="transition-transform duration-150"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <Dialog.Panel className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
              <Dialog.Title className="text-2xl font-bold mb-4">
                {product ? "Edit Product" : "Add Product"}
              </Dialog.Title>

              {/* Tabs */}
              <Tab.Group selectedIndex={activeTab} onChange={setActiveTab}>
                <Tab.List className="flex space-x-4 border-b mb-4">
                  <Tab className={({ selected }) => `px-4 py-2 font-medium rounded-t ${selected ? "bg-blue-100 text-blue-700" : "text-gray-500"}`}>Details</Tab>
                  <Tab className={({ selected }) => `px-4 py-2 font-medium rounded-t ${selected ? "bg-blue-100 text-blue-700" : "text-gray-500"}`}>Inventory</Tab>
                  <Tab className={({ selected }) => `px-4 py-2 font-medium rounded-t ${selected ? "bg-blue-100 text-blue-700" : "text-gray-500"}`}>Images</Tab>
                </Tab.List>

                <Tab.Panels>
                  {/* Details Tab */}
                  <Tab.Panel className="space-y-4">
                    <div>
                      <label className="block mb-1 font-medium">Product Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Price (PKR)</label>
                      <input
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </Tab.Panel>

                  {/* Inventory Tab */}
                  <Tab.Panel className="space-y-4">
                    <div>
                      <label className="block mb-1 font-medium">Stock Quantity</label>
                      <input
                        type="number"
                        value={formData.stock}
                        onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </Tab.Panel>

                  {/* Images Tab */}
                  <Tab.Panel className="space-y-4">
                    {formData.images.map((img, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Image URL"
                          value={img}
                          onChange={(e) => {
                            const newImages = [...formData.images];
                            newImages[index] = e.target.value;
                            setFormData({ ...formData, images: newImages });
                          }}
                          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          onClick={() => {
                            setFormData({ ...formData, images: formData.images.filter((_, i) => i !== index) });
                          }}
                          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => setFormData({ ...formData, images: [...formData.images, ""] })}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Add Image
                    </button>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>

              {/* Actions */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded border hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Save
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
