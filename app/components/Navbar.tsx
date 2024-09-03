"use client"
import { cn } from '@/lib/utils';
import React, { useState } from 'react'
import {  Menu, MenuItem,HoveredLink  } from "../components/ui/navbar-menu";
import Link from 'next/link';

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border-white", className)}
    >
        <Menu  setActive={setActive}>
          <Link href={'/'}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm text-white">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/web">Web Development</HoveredLink>
            <HoveredLink href="/graphic">Graphic Designer</HoveredLink>
            <HoveredLink href="/ai">AI and Chabot</HoveredLink>
          </div>
          </MenuItem>
          <Link href={'/contact'}>
            <MenuItem setActive={setActive} active={active} item="Contact US">
            </MenuItem>
          </Link>
        </Menu>
    </div>
  )
}

export default Navbar