import React from 'react';

interface MenuPageProps {
  navigateTo: (page: string) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ navigateTo }) => {
  return (
    <section className="py-10 sm:py-16 bg-pink-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        {/* Section Title */}
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-800 text-center">
          Exquisite Cake Menu
        </h2>

        {/* Friendly Budget Cakes */}
        <div className="bg-white rounded-xl shadow-lg p-4 xs:p-5 sm:p-6 space-y-3 sm:space-y-4">
          <h3 className="text-xl xs:text-2xl font-bold text-pink-600">Friendly Budget Cakes</h3>
          <p className="text-sm xs:text-base text-gray-600 italic">
            (Perfectly crafted for every sweet occasion)
          </p>

          <ul className="text-sm xs:text-base text-gray-700 space-y-2">
            <li>• Small (1 Layer) — <span className="font-semibold text-pink-500">₦14,500</span></li>
            <li>• Medium (2 Layers) — <span className="font-semibold text-pink-500">₦17,000</span></li>
            <li>• Large (4 Layers) — <span className="font-semibold text-pink-500">₦20,000</span></li>
          </ul>

          <p className="text-xs xs:text-sm text-gray-600">
            <strong>Note:</strong> Cakes larger than the Friendly Budget cakes range from ₦28,000.
          </p>
        </div>

        {/* Premium Flavours */}
        <div className="bg-white rounded-xl shadow-lg p-4 xs:p-5 sm:p-6 space-y-3 sm:space-y-4">
          <h3 className="text-lg xs:text-xl font-bold text-pink-600">Premium Flavours</h3>
          <p className="text-sm xs:text-base text-gray-700">
            Indulge in our specialty flavours: <strong>Red Velvet, Coconut Cake, Fruit Cake</strong>, and other delightful
            varieties — available at an additional charge.
          </p>
          <p className="text-sm xs:text-base text-gray-600">
            <strong>Cake Fillings:</strong> Custom fillings are also available at extra cost to elevate your flavour
            experience.
          </p>
        </div>

        {/* Cupcake Selections */}
        <div className="bg-white rounded-xl shadow-lg p-4 xs:p-5 sm:p-6 space-y-3 sm:space-y-4">
          <h3 className="text-lg xs:text-xl font-bold text-pink-600">Cupcake Selections</h3>
          <ul className="text-sm xs:text-base text-gray-700 space-y-2">
            <li>• Box of 6 Cupcakes — <span className="font-semibold text-pink-500">₦7,000</span></li>
            <li>• Box of 12 Cupcakes — <span className="font-semibold text-pink-500">₦13,000</span></li>
          </ul>
        </div>

        {/* Bento Cake Combos */}
        <div className="bg-white rounded-xl shadow-lg p-4 xs:p-5 sm:p-6 space-y-3 sm:space-y-4">
          <h3 className="text-lg xs:text-xl font-bold text-pink-600">Bento Cake Combos</h3>
          <p className="text-sm xs:text-base text-gray-600 italic">
            (Elegant mini cakes paired perfectly with cupcakes)
          </p>
          <ul className="text-sm xs:text-base text-gray-700 space-y-2">
            <li>• Bento Cake + 2 Cupcakes — <span className="font-semibold text-pink-500">₦11,500</span></li>
            <li>• Bento Cake + 6 Cupcakes — <span className="font-semibold text-pink-500">₦16,500</span></li>
          </ul>
        </div>

        {/* Bento Cakes */}
        <div className="bg-white rounded-xl shadow-lg p-4 xs:p-5 sm:p-6 space-y-3 sm:space-y-4">
          <h3 className="text-lg xs:text-xl font-bold text-pink-600">Bento Cakes</h3>
          <p className="text-sm xs:text-base text-gray-700">
            Starting from <span className="font-semibold text-pink-500">₦8,500</span>, depending on size, design, and branding
            preferences.
          </p>
        </div>

        {/* Custom Order CTA */}
        <div className="bg-pink-100 rounded-xl p-4 xs:p-5 sm:p-6 text-center space-y-3">
          <h3 className="text-base xs:text-lg font-semibold text-gray-800">Custom Orders Available</h3>
          <p className="text-xs xs:text-sm text-gray-600">
            Don’t see what you’re looking for? We create custom cakes for any occasion. Contact us to discuss your unique
            cake design!
          </p>
          <button
            onClick={() => navigateTo('order')}
            className="w-full sm:w-auto px-6 py-3 bg-pink-500 text-white rounded-full font-semibold text-sm xs:text-base hover:bg-pink-600 transition-all active:scale-95"
          >
            Place Custom Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
