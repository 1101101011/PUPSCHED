import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Calendar, CalendarViewTrigger, CalendarCurrentDate, CalendarPrevTrigger, CalendarDayView, CalendarMonthView, CalendarWeekView, CalendarYearView, CalendarTodayTrigger, CalendarNextTrigger } from '@/components/ui/full-calendar';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div> */}
                <div>
                    <Calendar
                        events={[
                            {
                                id: '1',
                                start: new Date('2025-08-26T09:30:00Z'),
                                end: new Date('2025-08-26T14:30:00Z'),
                                title: 'event A',
                                color: 'pink',
                            },
                            {
                                id: '2',
                                start: new Date('2025-08-26T10:00:00Z'),
                                end: new Date('2025-08-26T10:30:00Z'),
                                title: 'event B',
                                color: 'blue',
                            },
                        ]}
                    >
                        <div className="h-dvh py-6 flex flex-col">
                            <div className="flex px-6 items-center gap-2 mb-6">
                                <CalendarViewTrigger className="aria-[current=true]:bg-accent" view="day">
                                    Day
                                </CalendarViewTrigger>
                                <CalendarViewTrigger
                                    view="week"
                                    className="aria-[current=true]:bg-accent"
                                >
                                    Week
                                </CalendarViewTrigger>
                                <Dialog>
                                    {/* What opens the dialog */}
                                    <DialogTrigger asChild>
                                        <Button >Add Class</Button>
                                    </DialogTrigger>

                                    {/* Dialog body */}
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                                            <DialogDescription>
                                                This action cannot be undone. It will permanently delete your account.
                                            </DialogDescription>
                                        </DialogHeader>

                                        {/* Footer with action buttons */}
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button variant="secondary">Cancel</Button>
                                            </DialogClose>
                                            <Button variant="destructive">Delete</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                                {/* <CalendarViewTrigger
                                    view="month"
                                    className="aria-[current=true]:bg-accent"
                                >
                                    Month
                                </CalendarViewTrigger> */}
                                {/* <CalendarViewTrigger
                                    view="year"
                                    className="aria-[current=true]:bg-accent"
                                >
                                    Year
                                </CalendarViewTrigger> */}

                                <span className="flex-1" />

                                <CalendarCurrentDate />

                                <CalendarPrevTrigger>
                                    <ChevronLeft size={20} />
                                    <span className="sr-only">Previous</span>
                                </CalendarPrevTrigger>

                                <CalendarTodayTrigger>Today</CalendarTodayTrigger>

                                <CalendarNextTrigger>
                                    <ChevronRight size={20} />
                                    <span className="sr-only">Next</span>
                                </CalendarNextTrigger>

                                {/* <ModeToggle /> */}
                            </div>

                            <div className="flex-1 overflow-auto px-6 relative">
                                <CalendarDayView />
                                <CalendarWeekView />
                                {/* <CalendarMonthView /> */}
                                {/* <CalendarYearView /> */}
                            </div>
                        </div>
                    </Calendar>
                </div>
            </div>
        </AppLayout>
    );
}
