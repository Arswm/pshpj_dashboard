"use client"; // Ensures interactive logic for the sidebar is client-rendered

import React, {useState} from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import {AlignJustify, CircleX} from "lucide-react"; // Adjust path as needed

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen relative">
            {/* Sidebar */}
            <div
                className={`fixed bg-navy-blue text-white h-full w-80 right-0 z-40 transform transition-transform duration-300 ${
                    sidebarOpen ? "translate-x-0" : "translate-x-full"
                } md:translate-x-0`}
            >
                <DashboardSidebar/>
            </div>

            {/* Main Content */}
            <main className="flex-1 mr-0 md:mr-80">
                <header className="bg-red-200 py-4 p-4">header inajst</header>
                {/* Sidebar Toggle Button (Visible on Small Screens) */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="absolute top-4 left-4 md:hidden p-2 bg-gray-800 text-white rounded"
                >
                    {sidebarOpen ? <CircleX/> : <AlignJustify/>}
                </button>
                <div className="md:p-4 bg-[#f1f5f9] min-h-dvh">{children}</div>
            </main>
        </div>
    );
};

export default DashboardLayout;
