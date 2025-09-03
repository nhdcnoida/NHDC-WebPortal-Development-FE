'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie'; // NEW: import Cookies

const Sidebar = ({
  isOpen,
  toggleSidebar,
  userRole: passedUserRole = 'guest' // fallback
}) => {
  const [userRole, setUserRole] = useState(passedUserRole);
  const [expandedMenus, setExpandedMenus] = useState({});

  useEffect(() => {
    try {
      const encryptedUser = Cookies.get('userdata'); // ✅ Get from cookie
      if (encryptedUser) {
        const user = JSON.parse(atob(encryptedUser));
        if (user?.role) {
          setUserRole(user.role);
          // console.log('User role from cookie:', user.role);
        }
      }
    } catch (error) {
      console.error('Error reading user data from cookies', error);
      setUserRole('guest');
    }
  }, []);

  const toggleMenu = (menuName) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const menuItems = [
    {
      name: 'Dashboard',
      link: '/nhdc-Admin',
      icon: 'D',
      role: ['admin', 'editor', 'viewer'],
      subItems: [],
    },
    
     {
      name: 'Yarn-Rates',
      link: '#',
      icon: 'L',
      role: ['admin', 'editor'],
      subItems: [
        {
          name: 'Yarn Type',
          link: '/nhdc-Admin/YarnType',
          role: ['admin', 'editor'],
        },
        {
          name: 'Yarn Mills',
          link: '/nhdc-Admin/YarnMill',
            role: ['admin', 'editor'],
        },
        {
          name: 'Yarn Rates',
          link: '/nhdc-Admin/YarnRates',
          role: ['admin', 'editor'],
        },
      ],
    },

    {
      name: 'Silk-Rates',
      link: '#',
      icon: 'L',
      role: ['admin', 'editor'],
      subItems: [
        {
          name: 'Silk Type',
          link: '/nhdc-Admin/SilkRates/SilkType',
          role: ['admin', 'editor'],
        },
        {
          name: 'Silk Names',
          link: '/nhdc-Admin/SilkRates/SilkName',
            role: ['admin', 'editor'],
        },
        {
          name: 'Silk Rates',
          link: '/nhdc-Admin/SilkRates/SilkRate',
          role: ['admin', 'editor'],
        },
      ],
    },
     {
      name: 'Tender',
      link: '/nhdc-Admin/Tender',
      icon: 'D',
      role: ['admin', 'editor'],
      subItems: [],
    },
    {
      name: 'News',
      link: '/nhdc-Admin/News',
      icon: 'D',
      role: ['admin', 'editor'],
      subItems: [],
    },
     {
      name: 'Form',
      link: '/nhdc-Admin/Forms',
      icon: 'D',
       role: ['admin', 'editor'],
      subItems: [],
    },
    {
      name: 'Eventstable',
      link: '/nhdc-Admin/Eventable',
      icon: 'D',
      role: ['admin', 'editor'],
      subItems: [],
    },
     {
      name: 'Gallary',
      link: '/nhdc-Admin/Gallary',
      icon: 'D',
      role: ['admin', 'editor'],
      subItems: [],
    },
     {
      name: 'Career',
      link: '/nhdc-Admin/Career',
      icon: 'D',
      role: ['admin', 'editor'],
      subItems: [],
    },

    
     {
      name: 'Banner Carousel',
      link: '/nhdc-Admin/Carousel',
      icon: 'D',
      role: ['admin', 'editor'],
      subItems: [],
    },
    {
      name: 'Testimonials',
      link: '/nhdc-Admin/Testimonials',
      icon: 'D',
      role: ['admin', 'editor'],
      subItems: [],
    },

    
     {
      name: 'Navigation ',
      link: '/nhdc-Admin/Navigation',
      icon: 'D',
      role: ['admin', 'editor'],
      subItems: [],
    },
    {
      name: 'Settings',
      link: '#',
      icon: 'S',
      role: ['admin'],
      subItems: [
        {
      name: 'Users',
      link: '/nhdc-Admin/Users',
      icon: 'D',
      role: ['admin'],
      subItems: [],
    }
      ],
    },
  ];

  const filteredMenuItems = menuItems.filter((item) => item.role.includes(userRole));

  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300 flex flex-col`}>
      <div className="p-4 flex items-center justify-between">
        {isOpen ? (
          <h2 className="text-xl font-semibold">Menu</h2>
        ) : (
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">M</div>
        )}
        <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-2">
          {filteredMenuItems.map((item) => (
            <li key={item.name}>
              <div className="flex flex-col">
                <Link href={item.subItems.length > 0 ? '#' : item.link}>
                  <div
                    onClick={() => item.subItems.length > 0 && toggleMenu(item.name)}
                    className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-700"
                  >
                    <span className={`flex-1 ${isOpen ? 'ml-3' : 'mx-auto'}`}>
                      {isOpen ? item.name : item.icon}
                    </span>
                    {item.subItems.length > 0 && isOpen && (
                      <svg
                        className={`w-4 h-4 transition-transform ${expandedMenus[item.name] ? 'rotate-90' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </Link>

                {item.subItems.length > 0 && expandedMenus[item.name] && isOpen && (
                  <ul className="ml-6 mt-1 space-y-1">
                    {item.subItems
                      .filter((subItem) => subItem.role.includes(userRole))
                      .map((subItem) => (
                        <li key={subItem.name}>
                          <Link href={subItem.link}>
                            <div className="flex items-center p-2 rounded-lg cursor-pointer text-sm hover:bg-gray-600">
                              {subItem.name}
                            </div>
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
