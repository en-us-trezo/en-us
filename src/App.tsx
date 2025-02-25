import React from 'react';
import { ChevronDown, Lock, ShieldCheck, Wallet, Download, Globe, DollarSign } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Lock className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">TREZOR</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Products</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">App</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Coins</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Learn & Support</a>
            </div>
            <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors">
              Get your Trezor
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
              Secure Your Crypto with Trezor
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              In the world of cryptocurrencies, security is a top priority. Trezor is your trusted hardware wallet for protecting digital assets.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition-colors flex items-center">
                <Download className="mr-2" />
                Download for desktop
              </button>
              <button className="bg-gray-200 text-gray-800 px-8 py-4 rounded-full hover:bg-gray-300 transition-colors flex items-center">
                <Globe className="mr-2" />
                Continue in browser
              </button>
            </div>
          </div>
        </section>

        {/* Setup Guide */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">How to Set Up Your Trezor Wallet</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Unbox Your Device', icon: <ShieldCheck className="h-8 w-8 text-green-700" /> },
                { title: 'Connect to Computer', icon: <Wallet className="h-8 w-8 text-green-700" /> },
                { title: 'Install Trezor Suite', icon: <Download className="h-8 w-8 text-green-700" /> },
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    {step.icon}
                    <h3 className="text-xl font-semibold ml-3">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">Follow the simple setup process to secure your crypto assets with industry-leading protection.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Trezor for Crypto Security?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Offline Security', description: 'Keep your private keys offline, protected from hackers' },
                { title: 'User-Friendly Interface', description: 'Easy-to-navigate software for both beginners and experts' },
                { title: 'Multi-Currency Support', description: 'Store Bitcoin, Ethereum, and over 1,800 cryptocurrencies' },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { 
                  question: 'How do I access Trezor.io/start?',
                  answer: 'Visit https://trezor.io/start using a secure browser and follow the setup instructions.'
                },
                {
                  question: 'Is Trezor.io/start safe?',
                  answer: 'Yes, Trezor.io/start is the official and secure platform to set up your Trezor wallet.'
                },
                {
                  question: 'What should I do if I lose my Trezor device?',
                  answer: 'You can recover your funds using the recovery seed phrase on a new Trezor device.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Products</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Trezor Model T</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Trezor Model One</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Accessories</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Disclaimer</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Discord</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center text-gray-400">
              <p>© 2025 Trezor. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;