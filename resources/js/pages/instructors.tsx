import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
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
import { useState, useCallback } from 'react';

const data: Payment[] = [
    {
        name: '********, ******* **. *.',
        position: 'Instructor',
        status: 'Part-time',
    },
    {
        name: 'NAVARRO, P**** D**** R****',
        position: 'Lecturer',
        status: 'Part-time',
    },
    {
        name: 'VILLANUEVA, J***** O.',
        position: 'Professor',
        status: 'Full-time',
    },
    {
        name: 'LLENARES, I** I.',
        position: 'Professor',
        status: 'Part-time',
    },
    {
        name: 'MORANO, S******* K**** D*****',
        position: 'Professor',
        status: 'Full-time',
    },
    {
        name: 'DELA CRUZ, M****** P******',
        position: 'Instructor',
        status: 'Full-time',
    },
    {
        name: 'NAYRE, R***** A.',
        position: 'Instructor',
        status: 'Part-time',
    },
    {
        name: 'DELOS SANTOS, J**** R.',
        position: 'Instructor',
        status: 'Full-time',
    },
];

export type Payment = {
    name: string;
    position: string;
    status: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Instructors',
        href: '/instructors',
    },
];

export default function Subject() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});
    const [scheduleDialogOpen, setScheduleDialogOpen] = useState(false);

    const handleViewSchedule = useCallback(() => {
        setScheduleDialogOpen(true);
    }, []);

    const handleCloseDialog = useCallback(() => {
        setScheduleDialogOpen(false);
        setTimeout(() => { }, 100);
    }, []);

    const columns: ColumnDef<Payment>[] = [
        {
            accessorKey: 'name',
            header: 'Instructor',
            cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
        },
        {
            accessorKey: 'position',
            header: 'Position',
            cell: ({ row }) => <div className="capitalize">{row.getValue('position')}</div>,
        },
        {
            accessorKey: 'status',
            header: 'Employment Status',
            cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
        },
        {
            id: 'actions',
            enableHiding: false,
            cell: ({ }) => {
                return (
                    <div className="flex justify-end">
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="cursor-pointer">
                                    Edit Instructor
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className="cursor-pointer"
                                    onSelect={() => handleViewSchedule()}
                                >
                                    View Schedule
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer text-red-500">
                                    Delete Instructor
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                );
            },
        },
    ];

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
                            <Button>Add Instructor</Button>
                        </DialogTrigger>
                        <DialogContent className="w-96">
                            <DialogTitle>Add Instructor</DialogTitle>
                            <DialogDescription>Add a new instructor.</DialogDescription>
                            <form className="flex flex-col gap-3" action="">
                                <Input type="text" placeholder="Name"></Input>
                                <Input type="text" placeholder="Position"></Input>
                                <Input type="text" placeholder="Employment Status"></Input>
                                <Button className="mt-2">Add</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                    <div className="flex items-center justify-end space-x-2">
                        <div className="space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
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

            {scheduleDialogOpen && (
                <Dialog open={scheduleDialogOpen} onOpenChange={setScheduleDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Schedule</DialogTitle>
                            <DialogDescription>View instructor's schedule.</DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="outline" onClick={handleCloseDialog}>
                                Cancel
                            </Button>
                            <Button onClick={handleCloseDialog}>
                                Revert
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </AppLayout>
    );
}
