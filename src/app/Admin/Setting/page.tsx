// "use client";
// import { useState } from "react";

// export default function SettingsPage() {
//   const [siteName, setSiteName] = useState("K&H FASHION");
//   const [logoUrl, setLogoUrl] = useState("/logo.png");
//   const [shippingCost, setShippingCost] = useState(500);

//   const handleSave = () => {
//     alert(`Settings saved:
// Site Name: ${siteName}
// Logo URL: ${logoUrl}
// Shipping Cost: PKR ${shippingCost}`);
//   };

//   return (
//     <>
//       <h1 className="text-3xl font-bold mb-6">Settings</h1>
//       <div className="space-y-4 max-w-md">
//         <div>
//           <label className="block mb-1 font-medium">Site Name</label>
//           <input
//             type="text"
//             value={siteName}
//             onChange={e => setSiteName(e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Logo URL</label>
//           <input
//             type="text"
//             value={logoUrl}
//             onChange={e => setLogoUrl(e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Shipping Cost (PKR)</label>
//           <input
//             type="number"
//             value={shippingCost}
//             onChange={e => setShippingCost(Number(e.target.value))}
//             className="w-full border p-2 rounded"
//           />
//         </div>
//         <button
//           onClick={handleSave}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Save Settings
//         </button>
//       </div>
//     </>
//   );
// }






























"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [siteName, setSiteName] = useState("K&H FASHION");
  const [logoUrl, setLogoUrl] = useState("/logo.png");
  const [shippingCost, setShippingCost] = useState(500);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleSave = () => {
    alert(`Settings saved successfully! ✅
Site Name: ${siteName}
Logo URL: ${logoUrl}
Shipping Cost: PKR ${shippingCost}
Theme: ${theme}`);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Site Info Card */}
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Site Information</h2>
          <div>
            <label className="block mb-1 font-medium">Site Name</label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Logo URL</label>
            <input
              type="text"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {logoUrl && (
              <img src={logoUrl} alt="Logo Preview" className="mt-2 w-32 h-32 object-contain border rounded" />
            )}
          </div>
        </div>

        {/* Shipping & Theme Card */}
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Shipping & Theme</h2>
          <div>
            <label className="block mb-1 font-medium">Shipping Cost (PKR)</label>
            <input
              type="number"
              value={shippingCost}
              onChange={(e) => setShippingCost(Number(e.target.value))}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Theme</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as "light" | "dark")}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Save Settings
        </button>
      </div>
    </>
  );
}
