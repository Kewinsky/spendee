"use client";

import * as React from "react";
import { Frame, Map, PieChart } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavHeading } from "./NavHeading";
import { NavMain } from "./NavMain";
import { NavFooter } from "./NavFooter";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  mainNavItems: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Frame,
      isActive: true,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: Map,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavHeading />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.mainNavItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
