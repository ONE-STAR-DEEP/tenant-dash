# Multi Tenant Sales dashboard
A Multi-tenant sales dashboard built with `Next.js`,`Tailwind CSS`, and `ShadCN UI`. The application focuses on efficiently presenting leads data and call logs with a clean, maintainable component architecture.


## 🚀 Tech Stack
Framework: Next.js
Language: TypeScript
UI Styling: Tailwind CSS, ShadCN UI
Icons: Lucide React
State Management: React Context

## Project Structure
app/
 ├─ layout.tsx        # Root layout and providers
 ├─ page.tsx          # Entry page
 ├─ globals.css       # Global styles
 └─ favicon.ico

components/
 ├─ ui/               # ShadCN UI components
 ├─ app-sidebar.tsx   # Application sidebar
 ├─ sidebar-trigger.tsx
 ├─ callLog.tsx       # Tenant-filtered call logs
 ├─ leadsList.tsx     # Tenant-filtered leads table
 ├─ Loader.tsx        # Global loader
 ├─ LoaderContext.tsx # Global loading state
 ├─ TenantContext.tsx # Active tenant management
 └─ RoleContext.tsx   # Role-based UI control

lib/
 └─ data

##  Tenancy Approach
The application currently supports two organizations: Organization A and Organization B.

Both organizations have separate datasets that are stored in a centralized mock data source to simulate database fetches. The active organization is managed at the frontend level.

When switching between Organization A and Organization B, the dashboard dynamically updates to display data relevant to the selected organization.

A search feature is provided to filter the displayed data based on:
ID
Name
Phone number
Status

All filtering is performed on the client side while remaining scoped to the active organization.

## Role Switch
Since there is no authentication system or backend role management, role switching is implemented entirely on the frontend using React Context.

When the Admin role is selected, the interface displays Edit actions for the corresponding records.
When the Agent role is selected, the interface restricts actions to View-only access.

This approach simulates role-based UI behavior commonly found in real-world applications, while keeping the implementation frontend-focused.

## To Run the Project
Install dependencies using npm install and start the development server with npm run dev. The application will run on http://localhost:3000

