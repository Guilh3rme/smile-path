// /app/components/Sidebar.tsx
'use client'
import { usePathname } from "next/navigation"; // For app directory router
import Link from "next/link";
import {
  HomeIcon,
  BookOpenIcon,
  TrophyIcon,
  ChatBubbleLeftIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const pathname = usePathname(); // Hook to get the current path

  const navItems = [
    { name: "Início", path: "/", icon: HomeIcon },
    { name: "Unidades", path: "/unidades", icon: BookOpenIcon },
    { name: "Conquistas", path: "/conquistas", icon: TrophyIcon },
    { name: "Mensagens", path: "/mensagens", icon: ChatBubbleLeftIcon },
    { name: "Perfil", path: "/perfil", icon: UserIcon },
  ];

  return (
    <aside className="fixed w-64 h-screen bg-slate-200 text-black p-4">
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center space-x-2 p-2 rounded hover:bg-slate-100
                                ${
                                  isActive
                                    ? "bg-teal-600 text-white hover:bg-teal-600 hover:text-white"
                                    : ""
                                }`}>
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-white" : "text-teal-500"
                }`}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
