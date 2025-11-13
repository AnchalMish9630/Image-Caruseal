// // File: src/TwoPointerTracker.jsx

// import { useState } from "react";

// const tasks = [
//   {
//     category: "Easy",
//     items: [
//       "Reverse a String",
//       "Valid Palindrome",
//       "Reverse Vowels of a String",
//       "Move Zeroes",
//       "Remove Duplicates from Sorted Array",
//     ],
//   },
//   {
//     category: "Medium",
//     items: [
//       "Two Sum (Sorted Array)",
//       "Container With Most Water",
//       "3Sum",
//     ],
//   },
//   {
//     category: "Hard",
//     items: [
//       "4Sum",
//       "Trapping Rain Water",
//     ],
//   },
// ];

// export default function TwoPointerTracker() {
//   const [checked, setChecked] = useState({});

//   const toggle = (category, item) => {
//     const key = `${category}-${item}`;
//     setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <div style={{ padding: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
//       {tasks.map(({ category, items }) => (
//         <div key={category} style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "1rem", width: "300px" }}>
//           <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>{category}</h2>
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             {items.map((item) => {
//               const key = `${category}-${item}`;
//               return (
//                 <li key={key} style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
//                   <input
//                     type="checkbox"
//                     checked={checked[key] || false}
//                     onChange={() => toggle(category, item)}
//                     style={{ marginRight: "0.5rem" }}
//                   />
//                   <label>{item}</label>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }



import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

const TwoPointerTracker = () => {
  const [nums, setNums] = useState([2, 7, 11, 15]);
  const [target, setTarget] = useState(9);
  const [highlight, setHighlight] = useState([-1, -1]);
  const [result, setResult] = useState(null);

  const runTwoSum = () => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      setHighlight([map.get(complement), i]);
      if (map.has(complement)) {
        setResult([map.get(complement), i]);
        return;
      }
      map.set(nums[i], i);
    }
    setResult(null);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Two Sum Visualizer</h2>

      <div className="flex gap-2">
        {nums.map((num, idx) => (
          <Card
            key={idx}
            className={`w-16 h-16 flex items-center justify-center text-lg font-bold transition-all duration-300 ${
              highlight.includes(idx)
                ? "bg-blue-500 text-white"
                : result?.includes(idx)
                ? "bg-green-500 text-white"
                : "bg-gray-100"
            }`}
          >
            <CardContent className="p-2">{num}</CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm">Target:</label>
        <input
          type="number"
          className="border px-2 py-1 rounded"
          value={target}
          onChange={(e) => setTarget(Number(e.target.value))}
        />
      </div>

      <Button onClick={runTwoSum}>Run Two Sum</Button>

      {result && (
        <div className="text-green-600 font-medium">
          Found at indices: {result[0]} and {result[1]}
        </div>
      )}
      {result === null && highlight[0] !== -1 && (
        <div className="text-red-500 font-medium">No match found.</div>
      )}
    </div>
  );
};

export default TwoPointerTracker;
