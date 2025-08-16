import { Button } from '@/components/ui/button';
import { Calendar, CalendarCurrentDate, CalendarWeekView } from '@/components/ui/full-calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Export',
        href: '/export',
    },
];

export default function Export() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Export" />
            <div className="flex h-full flex-1 flex-col gap-1 overflow-x-auto rounded-xl p-4">
                <Tabs defaultValue="room">
                    {/* Tab Buttons */}
                    <TabsList className="w-full">
                        <TabsTrigger value="room">Room</TabsTrigger>
                        <TabsTrigger value="subject">Subject</TabsTrigger>
                        <TabsTrigger value="instructor">Instructor</TabsTrigger>
                    </TabsList>

                    {/* Tab Panels */}
                    <TabsContent value="room">
                        <div>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Room" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="INTE 123">Computer Lab 1</SelectItem>
                                    <SelectItem value="INTE 456">MB - 201</SelectItem>
                                    <SelectItem value="INTE 789">JV - 305</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
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
                                <div className="flex h-200 flex-col py-6">
                                    <div className="mb-6 flex items-center gap-2 px-6">
                                        <Button>Export</Button>

                                        {/* <CalendarViewTrigger className="aria-[current=true]:bg-accent" view="day">
                                    Day
                                </CalendarViewTrigger> */}
                                        {/* <CalendarViewTrigger
                                    view="week"
                                    className="aria-[current=true]:bg-accent"
                                >
                                    Week
                                </CalendarViewTrigger> */}
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

                                        {/* <CalendarPrevTrigger>
                                    <ChevronLeft size={20} />
                                    <span className="sr-only">Previous</span>
                                </CalendarPrevTrigger>

                                <CalendarTodayTrigger>Today</CalendarTodayTrigger>

                                <CalendarNextTrigger>
                                    <ChevronRight size={20} />
                                    <span className="sr-only">Next</span>
                                </CalendarNextTrigger> */}

                                        {/* <ModeToggle /> */}
                                    </div>

                                    <div className="relative flex-1 overflow-auto px-6">
                                        {/* <CalendarDayView /> */}
                                        <CalendarWeekView />
                                        {/* <CalendarMonthView /> */}
                                        {/* <CalendarYearView /> */}
                                    </div>
                                </div>
                            </Calendar>
                        </div>
                    </TabsContent>

                    <TabsContent value="subject">
                        <div>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="INTE 123">Computer Lab 1</SelectItem>
                                    <SelectItem value="INTE 456">MB - 201</SelectItem>
                                    <SelectItem value="INTE 789">JV - 305</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
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
                                <div className="flex h-200 flex-col py-6">
                                    <div className="mb-6 flex items-center gap-2 px-6">
                                        {/* <CalendarViewTrigger className="aria-[current=true]:bg-accent" view="day">
                                    Day
                                </CalendarViewTrigger> */}
                                        {/* <CalendarViewTrigger
                                    view="week"
                                    className="aria-[current=true]:bg-accent"
                                >
                                    Week
                                </CalendarViewTrigger> */}{' '}
                                        <Button>Export</Button>
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
                                        {/* <CalendarPrevTrigger>
                                    <ChevronLeft size={20} />
                                    <span className="sr-only">Previous</span>
                                </CalendarPrevTrigger>

                                <CalendarTodayTrigger>Today</CalendarTodayTrigger>

                                <CalendarNextTrigger>
                                    <ChevronRight size={20} />
                                    <span className="sr-only">Next</span>
                                </CalendarNextTrigger> */}
                                        {/* <ModeToggle /> */}
                                    </div>

                                    <div className="relative flex-1 overflow-auto px-6">
                                        {/* <CalendarDayView /> */}
                                        <CalendarWeekView />
                                        {/* <CalendarMonthView /> */}
                                        {/* <CalendarYearView /> */}
                                    </div>
                                </div>
                            </Calendar>
                        </div>
                    </TabsContent>
                    <TabsContent value="instructor">
                        <div>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Instructor" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="INTE 123">Computer Lab 1</SelectItem>
                                    <SelectItem value="INTE 456">MB - 201</SelectItem>
                                    <SelectItem value="INTE 789">JV - 305</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
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
                                <div className="flex h-200 flex-col py-6">
                                    <div className="mb-6 flex items-center gap-2 px-6">
                                        {/* <CalendarViewTrigger className="aria-[current=true]:bg-accent" view="day">
                                    Day
                                </CalendarViewTrigger> */}
                                        {/* <CalendarViewTrigger
                                    view="week"
                                    className="aria-[current=true]:bg-accent"
                                >
                                    Week
                                </CalendarViewTrigger> */}
                                        <Button>Export</Button>
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

                                        {/* <CalendarPrevTrigger>
                                    <ChevronLeft size={20} />
                                    <span className="sr-only">Previous</span>
                                </CalendarPrevTrigger>

                                <CalendarTodayTrigger>Today</CalendarTodayTrigger>

                                <CalendarNextTrigger>
                                    <ChevronRight size={20} />
                                    <span className="sr-only">Next</span>
                                </CalendarNextTrigger> */}

                                        {/* <ModeToggle /> */}
                                    </div>

                                    <div className="relative flex-1 overflow-auto px-6">
                                        {/* <CalendarDayView /> */}
                                        <CalendarWeekView />
                                        {/* <CalendarMonthView /> */}
                                        {/* <CalendarYearView /> */}
                                    </div>
                                </div>
                            </Calendar>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
