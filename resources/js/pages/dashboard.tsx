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
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent
} from "@/components/ui/tabs"

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
            <div className="flex h-full flex-1 flex-col gap-1 rounded-xl p-4 overflow-x-auto">
                <Tabs defaultValue="room" >
                    {/* Tab Buttons */}
                    <TabsList className='w-full'>
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
                                <div className="h-200 py-6 flex flex-col">
                                    <div className="flex px-6 items-center gap-2 mb-6">
                                        {/* <CalendarViewTrigger className="aria-[current=true]:bg-accent" view="day">
                                    Day
                                </CalendarViewTrigger> */}
                                        {/* <CalendarViewTrigger
                                    view="week"
                                    className="aria-[current=true]:bg-accent"
                                >
                                    Week
                                </CalendarViewTrigger> */}
                                        <Dialog>
                                            {/* What opens the dialog */}
                                            <DialogTrigger asChild>
                                                <Button >Add Class</Button>
                                            </DialogTrigger>

                                            {/* Dialog body */}
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Add Class</DialogTitle>
                                                    <DialogDescription>
                                                        Add class for the [Room] current schedule.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <form className='flex flex-col gap-3' action="" method="post">
                                                    <Label>Course Code</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="INTE 123" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="INTE 123">INTE 123</SelectItem>
                                                            <SelectItem value="INTE 456">INTE 456</SelectItem>
                                                            <SelectItem value="INTE 789">INTE 789</SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                    <Label htmlFor="time-picker">
                                                        Time
                                                    </Label>
                                                    <Input
                                                        type="time"
                                                        step="1"
                                                        defaultValue="10:30"
                                                        className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                                    />

                                                    <Label>Section</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Section" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="INTE 123">INTE 123</SelectItem>
                                                            <SelectItem value="INTE 456">INTE 456</SelectItem>
                                                            <SelectItem value="INTE 789">INTE 789</SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                    <Label>Instructor</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Instructor" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="INTE 123">INTE 123</SelectItem>
                                                            <SelectItem value="INTE 456">INTE 456</SelectItem>
                                                            <SelectItem value="INTE 789">INTE 789</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </form>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant="secondary">Cancel</Button>
                                                    </DialogClose>
                                                    <Button variant="destructive">Submit</Button>
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

                                    <div className="flex-1 overflow-auto px-6 relative">
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
                                <div className="h-200 py-6 flex flex-col">
                                    <div className="flex px-6 items-center gap-2 mb-6">
                                        {/* <CalendarViewTrigger className="aria-[current=true]:bg-accent" view="day">
                                    Day
                                </CalendarViewTrigger> */}
                                        {/* <CalendarViewTrigger
                                    view="week"
                                    className="aria-[current=true]:bg-accent"
                                >
                                    Week
                                </CalendarViewTrigger> */}
                                        <Dialog>
                                            {/* What opens the dialog */}
                                            <DialogTrigger asChild>
                                                <Button >Add Class</Button>
                                            </DialogTrigger>

                                            {/* Dialog body */}
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Add Class</DialogTitle>
                                                    <DialogDescription>
                                                        Add class for the [Room] current schedule.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <form className='flex flex-col gap-3' action="" method="post">
                                                    <Label>Course Code</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="INTE 123" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="INTE 123">INTE 123</SelectItem>
                                                            <SelectItem value="INTE 456">INTE 456</SelectItem>
                                                            <SelectItem value="INTE 789">INTE 789</SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                    <Label htmlFor="time-picker">
                                                        Time
                                                    </Label>
                                                    <Input
                                                        type="time"
                                                        step="1"
                                                        defaultValue="10:30"
                                                        className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                                    />

                                                    <Label>Section</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Section" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="INTE 123">INTE 123</SelectItem>
                                                            <SelectItem value="INTE 456">INTE 456</SelectItem>
                                                            <SelectItem value="INTE 789">INTE 789</SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                    <Label>Instructor</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Instructor" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="INTE 123">INTE 123</SelectItem>
                                                            <SelectItem value="INTE 456">INTE 456</SelectItem>
                                                            <SelectItem value="INTE 789">INTE 789</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </form>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant="secondary">Cancel</Button>
                                                    </DialogClose>
                                                    <Button variant="destructive">Submit</Button>
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

                                    <div className="flex-1 overflow-auto px-6 relative">
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
                                <div className="h-200 py-6 flex flex-col">
                                    <div className="flex px-6 items-center gap-2 mb-6">
                                        {/* <CalendarViewTrigger className="aria-[current=true]:bg-accent" view="day">
                                    Day
                                </CalendarViewTrigger> */}
                                        {/* <CalendarViewTrigger
                                    view="week"
                                    className="aria-[current=true]:bg-accent"
                                >
                                    Week
                                </CalendarViewTrigger> */}
                                        <Dialog>
                                            {/* What opens the dialog */}
                                            <DialogTrigger asChild>
                                                <Button >Add Class</Button>
                                            </DialogTrigger>

                                            {/* Dialog body */}
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Add Class</DialogTitle>
                                                    <DialogDescription>
                                                        Add class for the [Room] current schedule.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <form className='flex flex-col gap-3' action="" method="post">
                                                    <Label>Course Code</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="INTE 123" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="INTE 123">INTE 123</SelectItem>
                                                            <SelectItem value="INTE 456">INTE 456</SelectItem>
                                                            <SelectItem value="INTE 789">INTE 789</SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                    <Label htmlFor="time-picker">
                                                        Time
                                                    </Label>
                                                    <Input
                                                        type="time"
                                                        step="1"
                                                        defaultValue="10:30"
                                                        className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                                    />

                                                    <Label>Section</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Section" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="INTE 123">INTE 123</SelectItem>
                                                            <SelectItem value="INTE 456">INTE 456</SelectItem>
                                                            <SelectItem value="INTE 789">INTE 789</SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                    <Label>Instructor</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Instructor" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="INTE 123">INTE 123</SelectItem>
                                                            <SelectItem value="INTE 456">INTE 456</SelectItem>
                                                            <SelectItem value="INTE 789">INTE 789</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </form>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant="secondary">Cancel</Button>
                                                    </DialogClose>
                                                    <Button variant="destructive">Submit</Button>
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

                                    <div className="flex-1 overflow-auto px-6 relative">
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
