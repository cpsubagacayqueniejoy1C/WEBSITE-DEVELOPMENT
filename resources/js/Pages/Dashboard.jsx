import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Modal from '@/Components/Modal';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const laptops = [
    {
        id: 1,
        name: 'ASUS ROG Zephyrus G14',
        category: 'Gaming Laptop',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
        info: 'Engineered for elite mobile gaming and heavy creative workloads, combining a striking 165Hz QHD+ display with exceptional thermal management and cutting-edge AMD/NVIDIA hardware.',
        specs: {
            processor: 'AMD Ryzen 9 7940HS',
            ram: '32 GB DDR5',
            storage: '1 TB M.2 NVMe PCIe 4.0 SSD',
            graphics: 'NVIDIA GeForce RTX 4070 (8GB)',
            display: '14" QHD+ 165Hz ROG Nebula',
            os: 'Windows 11 Home',
            battery: '76Whrs Li-ion',
            weight: '1.65 kg (3.64 lbs)',
        },
    },
    {
        id: 2,
        name: 'Apple MacBook Pro 16"',
        category: 'Workstation Laptop',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        info: 'The ultimate professional notebook built around the ultra-powerful Apple M3 Max chip, delivering phenomenal battery life, silent efficiency, and a breathtaking Liquid Retina XDR screen.',
        specs: {
            processor: 'Apple M3 Max (16-Core)',
            ram: '36 GB Unified Memory',
            storage: '1 TB Superfast SSD',
            graphics: '40-Core Integrated GPU',
            display: '16.2" Liquid Retina XDR 120Hz',
            os: 'macOS Sonoma',
            battery: 'Up to 22 Hours',
            weight: '2.14 kg (4.7 lbs)',
        },
    },
    {
        id: 3,
        name: 'Dell XPS 15',
        category: 'Content Creation Laptop',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
        info: 'Crafted with premium CNC-machined aluminum and carbon fiber, this powerhouse features a vibrant 3.5K OLED touchscreen tailored for video editors, photographers, and developers.',
        specs: {
            processor: 'Intel Core i9-13900H',
            ram: '32 GB DDR5-4800MHz',
            storage: '1 TB NVMe M.2 PCIe SSD',
            graphics: 'NVIDIA GeForce RTX 4060 (8GB)',
            display: '15.6" 3.5K OLED Touchscreen',
            os: 'Windows 11 Pro',
            battery: '86Whrs Integrated',
            weight: '1.92 kg (4.23 lbs)',
        },
    },
    {
        id: 4,
        name: 'Lenovo ThinkPad X1 Carbon Gen 11',
        category: 'Business Laptop',
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
        info: 'An ultralight, military-grade durable business machine offering legendary keyboard ergonomics, enterprise security features, and all-day productivity on the go.',
        specs: {
            processor: 'Intel Core i7-1365U vPro',
            ram: '16 GB LPDDR5-6000MHz',
            storage: '512 GB PCIe Gen4 SSD',
            graphics: 'Intel Iris Xe Graphics',
            display: '14" WUXGA IPS Anti-Glare',
            os: 'Windows 11 Pro 64-bit',
            battery: '57Whrs with Rapid Charge',
            weight: '1.12 kg (2.48 lbs)',
        },
    },
    {
        id: 5,
        name: 'Razer Blade 16',
        category: 'Gaming Laptop',
        image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80',
        info: 'Packed with extreme performance in a precision-crafted CNC aluminum chassis, featuring a dual-mode mini-LED display that toggles between native UHD+ 120Hz and FHD+ 240Hz.',
        specs: {
            processor: 'Intel Core i9-13950HX',
            ram: '32 GB DDR5-5600MHz',
            storage: '2 TB PCIe 4.0 NVMe M.2 SSD',
            graphics: 'NVIDIA GeForce RTX 4080 (12GB)',
            display: '16" Dual-Mode Mini-LED (UHD+ 120Hz / FHD+ 240Hz)',
            os: 'Windows 11 Home',
            battery: '95.2Whr Li-ion Polymer',
            weight: '2.45 kg (5.40 lbs)',
        },
    },
    {
        id: 6,
        name: 'Microsoft Surface Laptop Studio 2',
        category: 'Creator Convertible Laptop',
        image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=800&q=80',
        info: 'A versatile laptop designed for creative professionals with a unique dynamic hinge that transitions seamlessly from laptop to stage to studio tablet mode.',
        specs: {
            processor: 'Intel Core i7-13800H',
            ram: '32 GB LPDDR5x',
            storage: '1 TB Removable Gen4 SSD',
            graphics: 'NVIDIA GeForce RTX 4060 (8GB)',
            display: '14.4" PixelSense Flow Touchscreen (120Hz)',
            os: 'Windows 11 Pro',
            battery: 'Up to 18 Hours Typical Usage',
            weight: '1.98 kg (4.37 lbs)',
        },
    },
    {
        id: 7,
        name: 'HP Spectre x360 14',
        category: 'Premium Convertible Laptop',
        image: 'https://images.unsplash.com/photo-1515940175183-6798529cb860?auto=format&fit=crop&w=800&q=80',
        info: 'An exquisite 2-in-1 convertible notebook featuring gem-cut craftsmanship, an incredible 2.8K OLED panel, and intelligent AI-powered performance features.',
        specs: {
            processor: 'Intel Core Ultra 7 155H',
            ram: '16 GB LPDDR5x',
            storage: '1 TB NVMe M.2 SSD',
            graphics: 'Intel Arc Graphics',
            display: '14" 2.8K OLED Touchscreen (48-120Hz)',
            os: 'Windows 11 Home',
            battery: '68Whr 4-cell Li-ion',
            weight: '1.44 kg (3.17 lbs)',
        },
    },
    {
        id: 8,
        name: 'Acer Predator Helios 18',
        category: 'Extreme Gaming Laptop',
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
        info: 'A colossal gaming powerhouse offering an expansive 18-inch high-refresh screen, advanced 5th Gen AeroBlade 3D fan cooling, and per-key RGB mechanical keyboard backlighting.',
        specs: {
            processor: 'Intel Core i9-14900HX',
            ram: '32 GB DDR5',
            storage: '2 TB PCIe Gen 4 NVMe SSD (RAID 0)',
            graphics: 'NVIDIA GeForce RTX 4090 (16GB)',
            display: '18" WQXGA (2560 x 1600) 240Hz IPS',
            os: 'Windows 11 Home',
            battery: '90Whrs Li-ion',
            weight: '3.25 kg (7.16 lbs)',
        },
    },
    {
        id: 9,
        name: 'MSI Titan 18 HX',
        category: 'Desktop Replacement Laptop',
        image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
        info: 'An absolute titan of performance featuring desktop-class computing power, Cherry Mechanical RGB keyboard switches, and a gorgeous 4K 120Hz Mini LED display.',
        specs: {
            processor: 'Intel Core i9-14900HX',
            ram: '64 GB DDR5',
            storage: '4 TB NVMe SSD (PCIe Gen 5)',
            graphics: 'NVIDIA GeForce RTX 4090 (16GB)',
            display: '18" UHD+ (3840 x 2400) 120Hz Mini LED',
            os: 'Windows 11 Pro',
            battery: '99.9Whr Li-ion',
            weight: '3.6 kg (7.94 lbs)',
        },
    },
    {
        id: 10,
        name: 'Lenovo Legion Pro 7i',
        category: 'High-Performance Gaming Laptop',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
        info: 'Designed with dedicated LA AI chips to auto-detect game launches and optimize system performance dynamically for maximum framerates.',
        specs: {
            processor: 'Intel Core i9-14900HX',
            ram: '32 GB DDR5-5600MHz',
            storage: '2 TB SSD PCIe Gen 4',
            graphics: 'NVIDIA GeForce RTX 4080 (12GB)',
            display: '16" WQXGA (2560 x 1600) 240Hz IPS',
            os: 'Windows 11 Home',
            battery: '99.9Whr',
            weight: '2.62 kg (5.78 lbs)',
        },
    },
    {
        id: 11,
        name: 'Asus Zenbook 14 OLED',
        category: 'Ultraportable Laptop',
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
        info: 'A sleek, elegant, and ultra-thin aluminum laptop built for effortless mobility, featuring a stunning 3K OLED HDR display and long-lasting battery life.',
        specs: {
            processor: 'Intel Core Ultra 7 155H',
            ram: '16 GB LPDDR5X',
            storage: '1 TB NVMe PCIe 4.0 SSD',
            graphics: 'Intel Arc Graphics',
            display: '14" 3K (2880 x 1800) OLED 120Hz',
            os: 'Windows 11 Home',
            battery: '75Whrs 4-cell Li-ion',
            weight: '1.2 kg (2.65 lbs)',
        },
    },
    {
        id: 12,
        name: 'HP Dragonfly G4',
        category: 'Executive Business Laptop',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        info: 'An ultra-lightweight executive laptop equipped with advanced audio tuning by Bang & Olufsen, enterprise security, and smart camera features for remote collaboration.',
        specs: {
            processor: 'Intel Core i7-1355U',
            ram: '32 GB LPDDR5',
            storage: '512 GB PCIe NVMe TLC SSD',
            graphics: 'Intel Iris Xe Graphics',
            display: '13.5" WUXGA+ (1920 x 1280) IPS Touch',
            os: 'Windows 11 Pro',
            battery: '68Whr Long Life Battery',
            weight: '0.99 kg (2.2 lbs)',
        },
    },
    {
        id: 13,
        name: 'Framework Laptop 16',
        category: 'Modular Workstation Laptop',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
        info: 'A fully customizable and upgradeable high-performance modular laptop where every component, port, and graphics module can be swapped or upgraded manually.',
        specs: {
            processor: 'AMD Ryzen 7 7840HS',
            ram: '32 GB DDR5-5600',
            storage: '1 TB WD Black SN850X NVMe SSD',
            graphics: 'AMD Radeon RX 7700S (8GB)',
            display: '16" QHD+ (2560 x 1600) 165Hz',
            os: 'Ubuntu Linux / Windows 11',
            battery: '85Whr',
            weight: '2.1 kg (4.63 lbs)',
        },
    },
    {
        id: 14,
        name: 'Alienware Aurora R16',
        category: 'Desktop Gaming PC',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
        info: 'A streamlined, airflow-optimized gaming desktop built to handle the most demanding AAA titles with advanced liquid cooling and a striking modern chassis design.',
        specs: {
            processor: 'Intel Core i7-13700KF',
            ram: '32 GB DDR5 Kingston Fury',
            storage: '1 TB NVMe M.2 SSD + 1TB HDD',
            graphics: 'NVIDIA GeForce RTX 4080 (16GB)',
            display: 'Custom Desktop Rig (No Monitor Included)',
            os: 'Windows 11 Home',
            battery: 'AC Powered (1000W PSU)',
            weight: '15.3 kg (33.7 lbs)',
        },
    },
    {
        id: 15,
        name: 'HP Omen 45L Desktop',
        category: 'High-End Gaming PC',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
        info: 'Features the innovative OMEN Cryo Chamber cooling system, isolating the CPU liquid-cooler radiator to ensure maximum thermal headroom and sustained peak performance.',
        specs: {
            processor: 'AMD Ryzen 9 7900X',
            ram: '32 GB HyperX DDR5 RGB',
            storage: '2 TB WD Black NVMe SSD',
            graphics: 'NVIDIA GeForce RTX 4070 Ti (12GB)',
            display: 'Desktop Tower Only',
            os: 'Windows 11 Pro',
            battery: 'AC Powered (800W Gold PSU)',
            weight: '22.6 kg (49.8 lbs)',
        },
    },
    {
        id: 16,
        name: 'Apple Mac Studio M2 Ultra',
        category: 'Professional Desktop Workstation',
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
        info: 'Extensive performance packed into a remarkably compact footprint, empowering 3D animators, audio engineers, and data scientists with massive unified memory bandwidth.',
        specs: {
            processor: 'Apple M2 Ultra (24-Core CPU)',
            ram: '64 GB Unified Memory',
            storage: '2 TB High-Performance SSD',
            graphics: '76-Core GPU Workstation Graphics',
            display: 'Compact Desktop Form Factor',
            os: 'macOS Ventura / Sonoma',
            battery: 'AC Powered (370W Max)',
            weight: '3.6 kg (7.9 lbs)',
        },
    },
    {
        id: 17,
        name: 'Corsair Vengeance i7500',
        category: 'Liquid-Cooled Gaming PC',
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
        info: 'An uncompromising enthusiast desktop outfitted with top-tier liquid cooling, blazing-fast DDR5 RGB memory, and the unmatched graphical prowess of an RTX 4090.',
        specs: {
            processor: 'Intel Core i9-14900KS',
            ram: '64 GB DDR5-6000MHz RGB',
            storage: '2 TB NVMe PCIe 4.0 Performance SSD',
            graphics: 'NVIDIA GeForce RTX 4090 (24GB)',
            display: 'Desktop Tower System',
            os: 'Windows 11 Home Advanced',
            battery: 'AC Powered (1200W ATX 3.0)',
            weight: '18.2 kg (40.1 lbs)',
        },
    },
];

export default function Dashboard({ auth }) {
    const [selectedLaptop, setSelectedLaptop] = useState(null);

    const openDetailsModal = (laptop) => {
        setSelectedLaptop(laptop);
    };

    const closeModal = () => {
        setSelectedLaptop(null);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500 tracking-wide uppercase">
                        Computer Specifications Hub
                    </h2>
                    <span className="text-xs font-semibold px-3 py-1 bg-red-500/10 text-red-500 rounded-full border border-red-500/20">
                        System Live
                    </span>
                </div>
            }
        >
            <Head title="Computer Specifications" />

            <div className="py-10 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 min-h-screen text-gray-100">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-black text-white tracking-wide">
                                Available Systems ({laptops.length})
                            </h3>
                            <p className="text-sm text-slate-400">Click "View Details" on any card to see full technical specifications.</p>
                        </div>
                    </div>

                    {/* All Computers Grid Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {laptops.map((laptop) => (
                            <div
                                key={laptop.id}
                                className="group relative flex flex-col justify-between rounded-2xl p-4 bg-slate-800/40 border border-slate-700/60 hover:bg-slate-800/70 hover:border-slate-500 transition-all duration-300 backdrop-blur-md"
                            >
                                <div>
                                    <div className="overflow-hidden rounded-xl mb-3 border border-slate-700">
                                        <img
                                            src={laptop.image}
                                            alt={laptop.name}
                                            className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <h5 className="font-bold text-white text-base truncate group-hover:text-red-400 transition-colors">
                                        {laptop.name}
                                    </h5>
                                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                                        {laptop.specs.processor}
                                    </p>
                                </div>
                                
                                <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs font-bold">
                                    <span className="bg-red-500/10 px-2.5 py-1 rounded text-red-300 border border-red-500/20">
                                        {laptop.specs.ram.split(' ')[0]} RAM
                                    </span>
                                    <button
                                        onClick={() => openDetailsModal(laptop)}
                                        className="flex items-center gap-1 bg-red-600 hover:bg-red-500 text-white px-3 py-1.5 rounded-lg shadow-sm hover:scale-105 transition-all cursor-pointer"
                                    >
                                        <span>View Details</span>
                                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* POPUP MODAL FOR DETAILS */}
            <Modal show={selectedLaptop !== null} onClose={closeModal} maxWidth="3xl">
                {selectedLaptop && (
                    <div className="bg-slate-900 text-gray-100 p-6 md:p-8 rounded-2xl border border-slate-700 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                            <div className="md:col-span-5 flex flex-col items-center bg-slate-950 p-4 rounded-xl border border-slate-800">
                                <img
                                    src={selectedLaptop.image}
                                    alt={selectedLaptop.name}
                                    className="w-full h-48 object-cover rounded-lg shadow-md mb-3"
                                />
                                <h3 className="text-lg font-bold text-white text-center">
                                    {selectedLaptop.name}
                                </h3>
                                <span className="mt-1 text-xs font-semibold px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                                    {selectedLaptop.category}
                                </span>
                            </div>

                            <div className="md:col-span-7 space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                                        System Overview
                                    </h4>
                                    <p className="text-sm text-slate-300 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50 leading-relaxed">
                                        {selectedLaptop.info}
                                    </p>
                                </div>

                                <h4 className="text-sm font-bold text-slate-200 border-b border-slate-800 pb-1 uppercase tracking-wider">
                                    Full Specifications
                                </h4>

                                <div className="space-y-2 text-xs max-h-56 overflow-y-auto pr-1">
                                    {Object.entries(selectedLaptop.specs).map(([key, value]) => (
                                        <div
                                            key={key}
                                            className="flex justify-between items-center py-1.5 px-2.5 rounded bg-slate-800/40 border border-slate-800"
                                        >
                                            <span className="font-medium text-slate-400 capitalize">{key}:</span>
                                            <span className="font-semibold text-slate-200 text-right">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
                            <button
                                onClick={closeModal}
                                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs px-5 py-2 rounded-lg transition-colors"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </AuthenticatedLayout>
    );
}