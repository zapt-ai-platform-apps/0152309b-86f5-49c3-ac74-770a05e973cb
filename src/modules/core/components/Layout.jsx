import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';

const Navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Analisis Ide', href: '/analisis-ide' },
  { name: 'Panduan Langkah', href: '/panduan-langkah' },
  { name: 'Wawasan Bisnis', href: '/wawasan-bisnis' },
  { name: 'Template Bisnis', href: '/template-bisnis' },
  { name: 'Riset Pasar', href: '/riset-pasar' },
  { name: 'Generator Ide', href: '/generator-ide' },
  { name: 'Dashboard', href: '/dashboard' },
];

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img
                className="h-8 w-auto"
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=32&height=32"
                alt="Validator Ide Bisnis"
              />
              <span className="text-lg font-semibold text-blue-600">Validator Ide Bisnis</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Buka menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6">
            {Navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold ${
                  location.pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <img
                  className="h-8 w-auto"
                  src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=32&height=32"
                  alt="Validator Ide Bisnis"
                />
                <span className="text-lg font-semibold text-blue-600">Validator Ide Bisnis</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Tutup menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {Navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        location.pathname === item.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Validator Ide Bisnis. Semua hak dilindungi.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;