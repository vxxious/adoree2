import { Instagram, MessageCircle, ChevronRight, Menu, X, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import CakeGallery from "./Components/cakeGallery";


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const HomePage = () => (
    <section className="relative min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-6 pt-24 pb-12 sm:pt-24">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-up order-2 md:order-1">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-800">Sweetness</span>
              <br />
              <span className="text-pink-500">Made to Order</span>
            </h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Handcrafted custom cakes that turn your celebrations into unforgettable memories. Every creation is baked with love and attention to detail.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row flex-wrap gap-2 xs:gap-3 sm:gap-4">
            <button
              onClick={() => navigateTo('order')}
              className="group px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-pink-500 text-white rounded-full font-semibold text-xs xs:text-sm sm:text-base md:text-lg shadow-lg hover:shadow-2xl hover:bg-pink-600 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 w-full xs:w-auto touch-manipulation"
            >
              Order Now
              <ChevronRight className="w-4 xs:w-5 h-4 xs:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigateTo('menu')}
              className="px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-white text-pink-500 border-2 border-pink-500 rounded-full font-semibold text-xs xs:text-sm sm:text-base md:text-lg shadow-lg hover:shadow-2xl hover:bg-pink-50 transition-all duration-300 active:scale-95 w-full xs:w-auto touch-manipulation"
            >
              View Menu
            </button>
          </div>

          <div className="pt-3 sm:pt-4 md:pt-6 space-y-2 sm:space-y-3">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-gray-800">Contact Us</h3>
            <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-3 text-xs xs:text-sm sm:text-base text-gray-600">
              <a
                href="https://wa.me/+2348178911543"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-600 transition-colors active:text-green-700"
              >
                <MessageCircle className="w-4 xs:w-5 h-4 xs:h-5 text-green-500 flex-shrink-0" />
                <span className="truncate">WhatsApp: +2348178911543</span>
              </a>
              <a
                href="https://instagram.com/adoreebakesn_cakes?igsh=MWp2MXd5dnlwNGx1Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-600 transition-colors active:text-pink-700"
              >
                <Instagram className="w-4 xs:w-5 h-4 xs:h-5 text-pink-500 flex-shrink-0" />
                <span className="truncate">@adoreebakesn_cakes</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[600px] flex items-center justify-center order-1 md:order-2">
          <CakeGallery />
        </div>
      </div>

      <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:flex">
        <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-pink-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );

  const OrderPage = () => {
    const [orderForm, setOrderForm] = useState({
      name: '',
      email: '',
      phone: '',
      date: '',
      description: '',
    });
    const [submitting, setSubmitting] = useState(false);

    const handleOrderInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setOrderForm(prev => ({ ...prev, [name]: value }));
    };

    const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitting(true);

      const businessPhone = '+2348178911543';
      const message = `Hi! I'd like to place a custom cake order.

Name: ${orderForm.name}
Email: ${orderForm.email}
Phone: ${orderForm.phone}
Event Date: ${orderForm.date}

Cake Details:
${orderForm.description}

Please confirm availability and pricing. Thank you!`;

      const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      setOrderForm({ name: '', email: '', phone: '', date: '', description: '' });
      setSubmitting(false);
    };

    return (
      <section className="relative min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-6 pt-24 pb-12">
        <div className="max-w-2xl mx-auto w-full space-y-6 sm:space-y-8">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 text-pink-500 hover:text-pink-600 font-semibold text-sm xs:text-base mb-4"
          >
            <ArrowLeft className="w-4 xs:w-5 h-4 xs:h-5" />
            Back Home
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-4 xs:p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-800">Order Your Custom Cake</h2>

            <form className="space-y-4 xs:space-y-5 sm:space-y-6" onSubmit={handleOrderSubmit}>
              <div className="space-y-1.5 xs:space-y-2">
                <label className="block text-sm xs:text-base font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={orderForm.name}
                  onChange={handleOrderInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2.5 xs:py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 text-sm xs:text-base touch-manipulation"
                />
              </div>

              <div className="space-y-1.5 xs:space-y-2">
                <label className="block text-sm xs:text-base font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={orderForm.email}
                  onChange={handleOrderInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-2.5 xs:py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 text-sm xs:text-base touch-manipulation"
                />
              </div>

              <div className="space-y-1.5 xs:space-y-2">
                <label className="block text-sm xs:text-base font-semibold text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={orderForm.phone}
                  onChange={handleOrderInputChange}
                  placeholder="+2348178911543"
                  required
                  className="w-full px-4 py-2.5 xs:py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 text-sm xs:text-base touch-manipulation"
                />
              </div>

              <div className="space-y-1.5 xs:space-y-2">
                <label className="block text-sm xs:text-base font-semibold text-gray-700">Event Date</label>
                <input
                  type="date"
                  name="date"
                  value={orderForm.date}
                  onChange={handleOrderInputChange}
                  required
                  className="w-full px-4 py-2.5 xs:py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 text-sm xs:text-base touch-manipulation"
                />
              </div>

              <div className="space-y-1.5 xs:space-y-2">
                <label className="block text-sm xs:text-base font-semibold text-gray-700">Cake Description</label>
                <textarea
                  name="description"
                  value={orderForm.description}
                  onChange={handleOrderInputChange}
                  placeholder="Tell us about your dream cake..."
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 xs:py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 text-sm xs:text-base resize-none touch-manipulation"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-3 xs:py-3.5 sm:py-4 bg-pink-500 text-white rounded-full font-semibold text-sm xs:text-base sm:text-lg shadow-lg hover:shadow-2xl hover:bg-pink-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 active:scale-95 touch-manipulation"
              >
                {submitting ? 'Opening WhatsApp...' : 'Send Order via WhatsApp'}
              </button>
            </form>

            <p className="text-xs xs:text-sm text-gray-500 text-center">
              You will be redirected to WhatsApp to send your order directly to us.
            </p>
          </div>
        </div>
      </section>
    );
  };

  const MenuPage = () => (
    <section className="relative min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-6 pt-24 pb-12">
      <div className="max-w-4xl mx-auto w-full space-y-6 sm:space-y-8">
        <button
          onClick={() => navigateTo('home')}
          className="flex items-center gap-2 text-pink-500 hover:text-pink-600 font-semibold text-sm xs:text-base mb-4"
        >
          <ArrowLeft className="w-4 xs:w-5 h-4 xs:h-5" />
          Back Home
        </button>

        {/* Cake Menu Section */}
        <section className="py-10 sm:py-16 bg-pink-50 text-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
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
                varieties available at an additional charge.
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
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <nav className="fixed top-0 left-0 right-0 z-30 bg-white bg-opacity-95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 py-3 xs:py-3.5 sm:py-4 flex justify-between items-center gap-2">
          <button
            onClick={() => navigateTo('home')}
            className="text-xs xs:text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold text-pink-500 hover:text-pink-600 transition-colors flex-1 text-left truncate"
          >
            Adoree Bakes 'n' Cakes
          </button>

          <div className="hidden md:flex gap-3 sm:gap-4">
            <a
              href="https://instagram.com/adoreebakesn_cakes?igsh=MWp2MXd5dnlwNGx1Mg=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-pink-50 transition-all border border-pink-100 active:scale-95"
            >
              <Instagram className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-pink-500" />
            </a>
            <a
              href="https://wa.me/+2348178911543"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-green-50 transition-all border border-green-100 active:scale-95"
            >
              <MessageCircle className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-green-500" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors active:scale-95"
          >
            {mobileMenuOpen ? (
              <X className="w-5 xs:w-6 h-5 xs:h-6 text-pink-500" />
            ) : (
              <Menu className="w-5 xs:w-6 h-5 xs:h-6 text-pink-500" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-pink-100 px-3 xs:px-4 py-4 space-y-3">
            <div className="flex gap-3 justify-center">
              <a
                href="https://instagram.com/adoreebakesn_cakes?igsh=MWp2MXd5dnlwNGx1Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-50 rounded-full hover:bg-pink-100 transition-colors active:scale-95"
              >
                <Instagram className="w-6 h-6 text-pink-500" />
              </a>
              <a
                href="https://wa.me/+2348178911543"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-50 rounded-full hover:bg-green-100 transition-colors active:scale-95"
              >
                <MessageCircle className="w-6 h-6 text-green-500" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'menu' && <MenuPage />}
      {currentPage === 'order' && <OrderPage />}
    </div>
  );
}  // ✅ THIS CLOSING BRACE WAS MISSING

export default App;
