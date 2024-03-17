export function SimpleCard({ url, text, text2 }) {
  return (
    <div className="mt-6 w-64">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-32 h-32 bg-gray-50 border-solid border-2 border-black rounded-full mx-auto mt-4">
          <img src={url} alt="" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="text-center px-4 py-2 mt-4">
          <h3 className="text-xl text-gray-900 font-bold mb-2">{text}</h3>
          <p className="text-gray-700">{text2}</p>
        </div>
      </div>
    </div>
  );
}
