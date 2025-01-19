'use client'; // Ensures this component is rendered client-side

import React, { useState } from 'react';

export default function SidebarToggle() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-4 left-4 md:hidden p-2 bg-gray-800 text-white rounded"
      >
        {sidebarOpen ? 'Close' : 'Menu'}
      </button>
    </>
  );
}
