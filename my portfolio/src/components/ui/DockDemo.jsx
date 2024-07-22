import React from 'react';
import { Dock } from 'primereact/dock';
import { FaApple, FaAppStore, FaPhotoVideo, FaTrash } from 'react-icons/fa';
import 'primereact/resources/themes/saga-blue/theme.css';     // theme
import 'primereact/resources/primereact.min.css';             // core css
// import 'primeicons/primeicons.css';                           // icons
// import './index.css';                                         // Tailwind CSS

export default function DockDemo() {
    const items = [
        {
            label: 'Finder',
            icon: () => <FaApple size={32} />
        },
        {
            label: 'App Store',
            icon: () => <FaAppStore size={32} />
        },
        {
            label: 'Photos',
            icon: () => <FaPhotoVideo size={32} />
        },
        // {
        //     label: 'Trash',
        //     icon: () => <FaTrash size={32} />
        // }
    ];

    return (
        <div className="card dock-demo p-4">
            <div className="dock-window bg-cover justify-center items-center" style={{ backgroundImage: '' }}>
                <Dock model={items} position="bottom" />
            </div>
        </div>
    );
}
