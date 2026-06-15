export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4 text-center">
        About Seed to Plate
      </h1>
      <p className="text-lg text-gray-700 text-center">
        At <strong>Seed to Plate</strong>, we believe in the power of fresh, homegrown food.
        Our mission is to inspire and guide individuals, families, and communities
        in growing their own produce—from the very first seed to a delicious, nourishing meal on the plate.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-green-600">Our Vision</h2>
        <p className="text-gray-700 mt-2">
          We envision a world where everyone has access to healthy, sustainable food, cultivated
          right at home or within their community. By bridging the gap between gardening and cooking,
          we empower people to take control of their nutrition while embracing an eco-friendly lifestyle.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-green-600">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>🌱 <strong>Gardening Guides</strong> – Learn how to grow fruits, vegetables, and herbs, whether in a backyard garden, a small balcony, or an indoor space.</li>
          <li>🥕 <strong>Seasonal Recipes</strong> – Discover delicious, nutrient-packed recipes that make the most of your harvest.</li>
          <li>🌍 <strong>Sustainability Tips</strong> – Reduce food waste, compost efficiently, and practice eco-friendly gardening techniques.</li>
          <li>👩‍🌾 <strong>Community & Support</strong> – Connect with a community of like-minded growers, share experiences, and get expert advice.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-green-600">Why It Matters</h2>
        <p className="text-gray-700 mt-2">
          Growing your own food not only ensures fresh, pesticide-free ingredients but also
          fosters a deeper connection with nature, improves well-being, and reduces environmental impact.
          Whether you're a beginner or an experienced gardener, <strong>Seed to Plate</strong> is here to support your journey.
        </p>
      </div>

      <p className="text-center text-green-700 font-bold text-xl mt-6">
        🌿 Grow. Harvest. Cook. Enjoy. 🌿
      </p>
    </div>
  );
}