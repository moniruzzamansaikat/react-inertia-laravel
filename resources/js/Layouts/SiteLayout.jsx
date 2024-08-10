import { Head, Link } from '@inertiajs/react'
import React from "react";

export default function SiteLayout({ title = '', children }) {
  return (
    <div>
      <Head title={title} />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/test">Test</Link>
      </nav>
      {children}
    </div>
  );
} 