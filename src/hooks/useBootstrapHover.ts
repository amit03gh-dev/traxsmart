'use client';
import { useEffect } from 'react';

export default function useBootstrapHover() {
  useEffect(() => {
    // Get all dropdown items
    const dropdowns = document.querySelectorAll<HTMLLIElement>('.nav-item.dropdown');

    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector<HTMLAnchorElement>('.nav-link');
      const menu = dropdown.querySelector<HTMLUListElement>('.dropdown-menu');

      if (!toggle || !menu) return;

      // Show on hover
      const showDropdown = () => {
        menu.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
      };

      // Hide on mouse leave
      const hideDropdown = () => {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      };

      dropdown.addEventListener('mouseenter', showDropdown);
      dropdown.addEventListener('mouseleave', hideDropdown);

      // Cleanup on unmount
      return () => {
        dropdown.removeEventListener('mouseenter', showDropdown);
        dropdown.removeEventListener('mouseleave', hideDropdown);
      };
    });
  }, []);
}
