"use client";
import { Icons } from "./Icons";
import { Button } from "./ui/button";

export default function SideMenu({}) {
  const navs = [
    nav("Home", Icons.Home, ""),
    nav("Bookmarks", Icons.Bookmark, "/bookmarks"),
  ];
  return (
    <aside className="border-r lg:w-56 h-screen shadow-sm">
      {navs.map((nav) => (
        <NavItem key={nav.id} {...nav} />
      ))}
    </aside>
  );
}
let id = 0;
function nav(text, Icon, href, external = false) {
  return { id: ++id, text, Icon, href, external };
}
function NavItem({ Icon, text, href, external }) {
  return (
    <Button className="w-full flex justify-start" variant={"ghost"}>
      <Icon className="w-4 h-4 mr-2" />
      {text}
      <div className="flex-1"></div>
      <Icons.External className="w-4 h-4" />
    </Button>
  );
}
