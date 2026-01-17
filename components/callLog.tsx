'use client';
import { callLogs } from '@/lib/data';
import { useTenant } from './TenantContext';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { useMemo, useState } from 'react';
import { useRole } from './RoleContext';

const CallLog = () => {
    const { tenant } = useTenant();
    const { role } = useRole();
    const [search, setSearch] = useState('');

    const filteredData = useMemo(() => {
        return callLogs.filter(item => {
            if (item.org !== tenant) return false;

            const q = search.toLowerCase();
            return (
                item.id.toString().includes(q) ||
                item.leadName.toLowerCase().includes(q)
            );
        });
    }, [tenant, search]);

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-end'>
                <Input
                    type="text"
                    placeholder="Search by ID, Name..."
                    className="w-full max-w-sm mt-4"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <Table className='mx-4  w-full max-w-5xl overflow-hidden rounded-xl border'>
                <TableHeader className='bg-gray-100'>
                    <TableRow>
                        <TableHead className="w-16">ID</TableHead>
                        <TableHead className="w-1/4">Name</TableHead>
                        <TableHead className="w-1/4">Date & Time</TableHead>
                        <TableHead className="w-1/5">Duration</TableHead>
                        <TableHead className="w-32">Outcome</TableHead>
                        <TableHead className="w-20 text-center">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData.map(item => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell className="font-medium">{item.leadName}</TableCell>
                            <TableCell>{item.dateTime}</TableCell>
                            <TableCell>{item.duration}</TableCell>
                            <TableCell>{item.outcome}</TableCell>
                            <TableCell className="text-center hover:underline font-semibold">
                                {role === 'Admin' ? (
                                    <span className="text-blue-500 cursor-pointer">Edit</span>
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

export default CallLog