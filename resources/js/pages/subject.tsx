import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
        code: 'ABC123',
        name: 'Fuck',
        unit: 69,
        instructor: 'Papa Renzie',
    },
    {
        code: 'DEF456',
        name: 'Puta',
        unit: 143,
        instructor: 'Santo Papa Mark',
    },
    {
        code: 'GHI789',
        name: 'Tite',
        unit: 5,
        instructor: 'Daddy Diddy',
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
        cell: ({ row }) => <div className="capitalize">{row.getValue('unit')}</div>,
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
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>View payment details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    },
];

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Subject',
        href: '/subject',
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
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Add Course</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>Add Course</DialogTitle>
                        <DialogDescription>Add course for the current curriculum.</DialogDescription>
                        <form className="flex flex-col gap-3" action="">
                            <div className="flex gap-2">
                                <Select>
                                    <SelectTrigger className="w-20">
                                        <SelectValue placeholder="INTE" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="INTE">INTE</SelectItem>
                                        <SelectItem value="GEED">GEED</SelectItem>
                                        <SelectItem value="ELEC">ELEC</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Input className="w-20" type="number" placeholder="Code"></Input>
                            </div>
                            <Input type="text" placeholder="Course Name"></Input>
                            <Select>
                                <SelectTrigger className="w-20">
                                    <SelectValue placeholder="Units" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="3">3</SelectItem>
                                    <SelectItem value="5">5</SelectItem>
                                    <SelectItem value="6">6</SelectItem>
                                </SelectContent>
                            </Select>

                            <Input type="text" placeholder="Instructor"></Input>

                            <Button className="mt-2">Add</Button>
                        </form>
                    </DialogContent>
                </Dialog>

                <div className="w-full">
                    <div className="overflow-hidden rounded-md border">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
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
                                                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
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
                    <div className="flex items-center justify-end space-x-2 py-4">
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
            </div>
        </AppLayout>
    );
}
