import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Calendar, CalendarViewTrigger, CalendarCurrentDate, CalendarPrevTrigger, CalendarDayView, CalendarMonthView, CalendarWeekView, CalendarYearView, CalendarTodayTrigger, CalendarNextTrigger } from '@/components/ui/full-calendar';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, } from 'lucide-react';
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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add',
        href: '/add',
    },
];

export default function Add() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div>
                    <h1 className='font-black text-xl mb-5'>Add Instructor</h1>
                    <form className='flex flex-col gap-3' action="" >
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
                        <Button>Add</Button>
                    </form>
                </div>
                <div>
                    <h1 className='font-black text-xl mb-5'>Add Subject</h1>
                    <form className='flex flex-col gap-3' action="" >
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
                        <Button>Add</Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
