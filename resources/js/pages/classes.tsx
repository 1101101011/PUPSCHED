import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

const data: Payment[] = [
    {
        code: 'ACCO 014',
        name: 'Principles of Acco******',
        unit: 3.0,
        instructor: '********, ******* **. *.',
    },
    {
        code: 'COMP 001',
        name: 'Introduction to Computing',
        unit: 3.0,
        instructor: 'NAVARRO, P**** D**** R****',
    },
    {
        code: 'CWTS 001',
        name: 'Civic Welfare Training Service 1',
        unit: 3.0,
        instructor: 'VILLANUEVA, J***** O.',
    },
    {
        code: 'ELEC IT-FE1',
        name: 'BSIT Free Elective 1',
        unit: 3.0,
        instructor: 'LLENARES, I** I.',
    },
    {
        code: 'GEED 032',
        name: 'Filipinolohiya at Pambansang Kaunlaran',
        unit: 3.0,
        instructor: 'MORANO, S******* K**** D*****',
    },
    {
        code: 'HRMA 001',
        name: 'Principles of Organization and Management',
        unit: 3.0,
        instructor: 'DELA CRUZ, M****** P******',
    },
    {
        code: 'INTE 201',
        name: 'Programming 3 (Structured Programming)',
        unit: 3.0,
        instructor: 'NAYRE, R***** A.',
    },
    {
        code: 'PATHFIT 1',
        name: 'Physical Activity Towards Health and Fitness 1',
        unit: 2.0,
        instructor: 'DELOS SANTOS, J**** R.',
    },
];
export type Payment = {
    code: string;
    name: string;
    unit: number;
    instructor: string;
};

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: 'code',
        header: 'Course Code',
        cell: ({ row }) => <div className="capitalize">{row.getValue('code')}</div>,
    },
    {
        accessorKey: 'name',
        header: 'Course Name',
        cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
    },
    {
        accessorKey: 'unit',
        header: 'Units',
        cell: ({ row }) => {
            const value = row.getValue<number>('unit');
            return <div>{value.toFixed(1)}</div>;
        },
    },
    {
        accessorKey: 'instructor',
        header: 'Instructors',
        cell: ({ row }) => <div className="capitalize">{row.getValue('instructor')}</div>,
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: () => {
            return (
                <div className="flex justify-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem className="cursor-pointer">Edit course</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-red-500">Delete course</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    },
];

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Classes',
        href: '/classes',
    },
];

export default function Subject() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Subject" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Add Class</Button>
                        </DialogTrigger>
                        <DialogContent className="w-fit">
                            <DialogTitle>Add Class</DialogTitle>
                            <DialogDescription>Add Class for the Semester.</DialogDescription>
                            <form className="flex flex-col gap-3" action="">
                                <div className="flex gap-2">
                                    <Select>
                                        <SelectTrigger className="w-28">
                                            <SelectValue placeholder="Program" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="BSIT">BSIT</SelectItem>
                                            <SelectItem value="BSA">BSA</SelectItem>
                                            <SelectItem value="BSPSY">BSPSY</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {/*<Select>
                                        <SelectTrigger className="w-20">
                                            <SelectValue placeholder="Units" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1.0">1.0</SelectItem>
                                            <SelectItem value="2.0">2.0</SelectItem>
                                            <SelectItem value="3.0">3.0</SelectItem>
                                            <SelectItem value="4.0">4.0</SelectItem>
                                            <SelectItem value="5.0">5.0</SelectItem>
                                            <SelectItem value="6.0">6.0</SelectItem>
                                        </SelectContent>
                                    </Select>*/}
                                </div>
                                <Select>
                                    <SelectTrigger className="w-28">
                                        <SelectValue placeholder="Year Level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1st Year</SelectItem>
                                        <SelectItem value="2">2nd Year</SelectItem>
                                        <SelectItem value="3">3rd Year</SelectItem>
                                        <SelectItem value="4">4th Year</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Input type="text" placeholder="Section"></Input>
                                <Button className="mt-2">Add</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                    <div className="flex items-center justify-end space-x-2">
                        <div className="space-x-2">
                            <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                                Previous
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                                Next
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="overflow-hidden rounded-md border">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id} className="px-4 font-bold">
                                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id} className="px-4">
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={columns.length} className="h-24 text-center">
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

