export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Fresh Garden Salad",
      description: "A mix of fresh greens, cherry tomatoes, cucumbers, and a light vinaigrette.",
      price: "Rs 1000",
      image: "https://source.unsplash.com/300x200/?salad,healthy",
    },
    {
      id: 2,
      name: "Hearty Vegetable Soup",
      description: "A warm and comforting soup made with seasonal vegetables and herbs.",
      price: "Rs 100",
      image: "https://source.unsplash.com/300x200/?soup,vegetables",
    },
    {
      id: 3,
      name: "Grilled Veggie Wrap",
      description: "Grilled zucchini, bell peppers, and hummus wrapped in a whole wheat tortilla.",
      price: "Rs 10",
      image: "https://source.unsplash.com/300x200/?wrap,vegetarian",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Our Menu</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Fresh, organic, and delicious meals straight from the garden to your plate.
      </p>

      {/* Check if menuItems exists and is an array */}
      {menuItems && menuItems.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-gray-200 rounded-md">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
              <h2 className="text-xl font-semibold text-green-600 mt-4">{item.name}</h2>
              <p className="text-gray-700 mt-2">{item.description}</p>
              <p className="text-green-700 font-bold mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">No menu items available.</p>
      )}
    </div>
  );
}
