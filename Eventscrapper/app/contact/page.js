'use client';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-black text-white">
      <div className="bg-gray-900 rounded-2xl shadow-lg p-8 sm:p-12 max-w-xl w-full text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Contact Me</h1>
        <p className="mb-6">
          If you have any issues or queries, feel free to reach out through the details below.
        </p>

        <div className="text-left space-y-4"> 
          <div>
            <h2 className="text-lg font-semibold">📧 Email</h2>
            <p className="break-all">vish9u1424@gmail.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">📱 Mobile</h2>
            <p>9873201255</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

