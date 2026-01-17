"use client"

import { BookUser, ChevronDown, Home, Inbox, LogOut, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

import { Tenant, useTenant } from "./TenantContext"
import { useLoader } from "./LoaderContext"
import { time } from "console"


// Menu items.
const items1 = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Leads",
        url: "#",
        icon: BookUser,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
]
const items2 = [
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
    {
        title: "Logout",
        url: "#",
        icon: LogOut,
    },
]


export function AppSidebar() {

    const { tenant, setTenant } = useTenant();
    const { showLoader, hideLoader } = useLoader();

    const handelTenantChange = (newTenant: Tenant) => {
        showLoader();
        setTimeout(() => {
            hideLoader();
            setTenant(newTenant);
        }, 2500);
    }

    return (
        <Sidebar>
            <SidebarHeader className="border-b-2 w-full">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="w-full p-4 border-2 font-semibold text-gray-700 bg-white">
                                    {tenant === 'A' ? 'Organization A' : 'Organization B'}
                                    <ChevronDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                side="bottom"
                                align="start"
                                sideOffset={4}
                                className="w-(--radix-dropdown-menu-trigger-width) bg-white border-2 z-50 px-2 py-2 rounded-2xl"
                            >
                                <DropdownMenuLabel>Select an Organization</DropdownMenuLabel>

                                <DropdownMenuItem
                                    onClick={() => handelTenantChange('A')}
                                    className="py-1 px-2 rounded-md hover:bg-gray-100 cursor-pointer"
                                >
                                    Organization A
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    onClick={() => handelTenantChange('B')}
                                    className="py-1 px-2 rounded-md hover:bg-gray-100 cursor-pointer"
                                >
                                    Organization B
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>

                <SidebarGroup>
                    <SidebarGroupLabel className="">Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items1.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>

                    <SidebarGroupLabel className="">Account</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items2.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>

                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}