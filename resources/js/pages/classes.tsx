import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
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
        program: 'ACCO 014',
        year: 'Principles of Acco******',
        section: 3.0,
        instructor: '********, ******* **. *.',
    },
    {
        program: 'COMP 001',
        year: 'Introduction to Computing',
        section: 3.0,
        instructor: 'NAVARRO, P**** D**** R****',
    },
    {
        program: 'CWTS 001',
        year: 'Civic Welfare Training Service 1',
        section: 3.0,
        instructor: 'VILLANUEVA, J***** O.',
    },
    {
        program: 'ELEC IT-FE1',
        year: 'BSIT Free Elective 1',
        section: 3.0,
        instructor: 'LLENARES, I** I.',
    },
    {
        program: 'GEED 032',
        year: 'Filipinolohiya at Pambansang Kaunlaran',
        section: 3.0,
        instructor: 'MORANO, S******* K**** D*****',
    },
    {
        program: 'HRMA 001',
        year: 'Principles of Organization and Management',
        section: 3.0,
        instructor: 'DELA CRUZ, M****** P******',
    },
    {
        program: 'INTE 201',
        year: 'Programming 3 (Structured Programming)',
        section: 3.0,
        instructor: 'NAYRE, R***** A.',
    },
    {
        program: 'PATHFIT 1',
        year: 'Physical Activity Towards Health and Fitness 1',
        section: 2.0,
        instructor: 'DELOS SANTOS, J**** R.',
    },
];
export type Classes = {
    program: string;
    year: string;
    section: number;
    instructor: string;
};

export const columns: ColumnDef<Classes>[] = [
    {
        accessorKey: 'program',
        header: 'Program',
        cell: ({ row }) => <div className="capitalize">{row.getValue('program')}</div>,
    },
    {
        accessorKey: 'year',
        header: 'Year Level',
        cell: ({ row }) => <div className="capitalize">{row.getValue('year')}</div>,
    },
    {
        accessorKey: 'section',
        header: 'Section',
        cell: ({ row }) => {
            const value = row.getValue<number>('section');
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
                            <DropdownMenuItem className="cursor-pointer">Edit Class</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">View Schedule</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer text-red-500">Delete Class</DropdownMenuItem>
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

