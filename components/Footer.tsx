import React from 'react';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-slate-400 text-sm font-mono">
            © {new Date().getFullYear()} Designed & Built by You.
          </p>
        </div>
        
        <div className="flex space-x-6">
          {SOCIALS.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
              aria-label={social.platform}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;