'use client';
import { data } from '@/lib/data';
import { useTenant } from './TenantContext';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { useMemo, useState } from 'react';
import { useRole } from './RoleContext';

const LeadsList = () => {
    const { tenant } = useTenant();
    const { role } = useRole();
    const [search, setSearch] = useState('');

    const filteredData = useMemo(() => {
        return data.filter(item => {
            if (item.org !== tenant) return false;

            const q = search.toLowerCase();
            return (
                item.id.toString().includes(q) ||
                item.name.toLowerCase().includes(q) ||
                item.phone?.includes(q) ||
                item.status.toLowerCase().includes(q)
            );
        });
    }, [tenant, search]);

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-end'>
                <Input
                    type="text"
                    placeholder="Search by ID, Name, Phone, Status..."
                    className="w-full max-w-sm mt-4"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <Table className='mx-4 w-full max-w-5xl overflow-hidden rounded-xl border-2'>
                <TableHeader className='bg-gray-100'>
                    <TableRow>
                        <TableHead className="w-16">ID</TableHead>
                        <TableHead className="w-1/4">Name</TableHead>
                        <TableHead className="w-1/4">Phone</TableHead>
                        <TableHead className="w-1/5">Agent</TableHead>
                        <TableHead className="w-32">Status</TableHead>
                        <TableHead className="w-20 text-center">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData.map(item => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell className="font-medium">{item.name}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                            <TableCell>{item.agent}</TableCell>
                            <TableCell>{item.status}</TableCell>
                            <TableCell className="text-center hover:underline">
                                {role === 'Admin' ? (
                                    <span className="text-blue-500 cursor-pointer font-semibold">Edit</span>
                                ) : (
                                    <span className="text-gray-400 cursor-pointer">View</span>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default LeadsList