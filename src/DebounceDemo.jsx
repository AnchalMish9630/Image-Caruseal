import { useState } from "react";

export default function DebounceDemo() {
  const [text, setText] = useState("");

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }

  const handleTyping = debounce((value) => {
    console.log("Typing stopped. Final input:", value);
  }, 500);

  function handleChange(e) {
    setText(e.target.value);
    handleTyping(e.target.value);
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Debounce Demo</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        className="border p-2 w-full rounded"
      />
      <p className="mt-4 text-gray-500">
        Open console. Logs appear 500ms after you stop typing.
      </p>
    </div>
  );
}
