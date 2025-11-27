import  { useState, useEffect } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [modal, setModal] = useState({ visible: false, message: '', isError: false });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const _submitForm = {
      email: formData.email,
      message: formData.message,
    };

    try {
      // const res = await fetch("https://medml.ai/medmlui/api/saveCustomizeSupport", {
      //   method: "POST",
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(_submitForm),
      // });
      const res = await fetch("https://localhost:8083/medmlui/api/saveCustomizeSupport", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(_submitForm),
      });

      if (res.ok) {
        setFormData({ email: '', message: '' });
        setModal({ visible: true, message: 'Message sent successfully!', isError: false });
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      setModal({ visible: true, message: 'Failed to send message. Please try again.', isError: true });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
  if (!modal.isError) {
    setFormData({ email: '', message: '' }); // Clear only if it was a success
  }
  setModal({ ...modal, visible: false });
};

  useEffect(() => {
  if (modal.visible) {
    document.body.style.overflow = 'hidden'; // prevents both x and y scrolling
  } else {
    document.body.style.overflow = 'auto'; // enables both again
    document.body.style.overflowX = 'hidden'; // prevent unwanted horizontal scroll after modal
  }
}, [modal.visible]);

  return (
    <section className="bg-white py-16 mt-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-[500px]">
        {/* Left: Text */}
        <div className="text-center md:text-left flex justify-center flex-col h-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg">
            Contact us today to discover how <span className="font-semibold text-blue-600">MedML</span> can transform your insurance process and take your business to the next level.
          </p>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email*</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-md transition-all font-medium ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Modal */}
      {modal.visible && (
        <div
          role="dialog"
          aria-modal="true"
          aria-live="assertive"
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30"
        >
          <div className="bg-white rounded-lg p-6 shadow-xl border max-w-sm w-full text-center">
            <p className={`text-lg font-medium ${modal.isError ? 'text-red-600' : 'text-green-600'}`}>
              {modal.message}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
