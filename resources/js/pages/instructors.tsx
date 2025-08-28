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
                            <DropdownMenuContent
                                align="end"
                                className="flex flex-col space-y-1 p-2"
                            >
                                {/* Edit Instructor Dialog */}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="ghost" className="flex-start w-full">
                                            Edit Instructor
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Edit Instructor</DialogTitle>
                                            <DialogDescription>
                                                Update the instructor’s details below.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <form className="grid gap-4 mt-4">
                                            <input
                                                type="text"
                                                placeholder="Instructor Name"
                                                className="border rounded-md p-2 w-full"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="border rounded-md p-2 w-full"
                                            />
                                        </form>
                                        <DialogFooter>
                                            <Button type="button" variant="outline">Cancel</Button>
                                            <Button type="submit">Save changes</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                                {/* View Schedule Dialog */}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="ghost" className="flex-start w-full">
                                            View Schedule
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Instructor Schedule</DialogTitle>
                                            <DialogDescription>
                                                Here’s the instructor’s current schedule.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="mt-4 space-y-2">
                                            <p><strong>Monday:</strong> 9:00 AM – 11:00 AM</p>
                                            <p><strong>Wednesday:</strong> 1:00 PM – 3:00 PM</p>
                                            <p><strong>Friday:</strong> 10:00 AM – 12:00 PM</p>
                                        </div>
                                        <DialogFooter>
                                            <Button type="button" variant="outline">Close</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                                <DropdownMenuSeparator />

                                {/* Delete Instructor Dialog */}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className="flex-start w-full justify-start text-red-500"
                                        >
                                            Delete Instructor
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Delete Instructor</DialogTitle>
                                            <DialogDescription>
                                                Are you sure you want to delete this instructor? This action cannot be undone.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <Button type="button" variant="outline">Cancel</Button>
                                            <Button type="button" variant="destructive">Delete</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
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
