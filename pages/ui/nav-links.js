'use client';

import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'About', href: '/about', icon: HomeIcon },
  { name: 'Projects', href: '/projects', icon: HomeIcon },
  { name: 'Hobby', href: '/hobby', icon: HomeIcon },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href}>
            <LinkIcon />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
