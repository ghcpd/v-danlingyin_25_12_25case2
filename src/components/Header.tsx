import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { clsx } from 'clsx';

const navItems = [
  { to: '/', label: 'Discover' },
  { to: '/search', label: 'Search' },
  { to: '/library', label: 'My Library' }
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/90 backdrop-blur border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="PulseCast home">
          <span className="h-10 w-10 rounded-2xl bg-primary/20 flex items-center justify-center text-accent font-bold">
            ▶
          </span>
          <span className="text-xl font-semibold">PulseCast</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex" role="navigation">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                clsx('transition-colors hover:text-accent', isActive ? 'text-accent' : 'text-gray-200')
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/search"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary/90"
          >
            Explore
          </Link>
        </nav>

        <button
          className="lg:hidden rounded-full border border-white/10 p-2"
          aria-label="Toggle navigation"
          onClick={() => setOpen(prev => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="h-0.5 w-6 bg-white mb-1" />
          <div className="h-0.5 w-6 bg-white mb-1" />
          <div className="h-0.5 w-6 bg-white" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-secondary/95 lg:hidden" role="navigation">
          <div className="flex flex-col space-y-2 px-4 py-4 text-sm">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx('rounded px-3 py-2 hover:bg-white/5', isActive ? 'text-accent' : 'text-gray-200')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
