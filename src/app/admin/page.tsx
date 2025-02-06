// components/BookingsTable.tsx
"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, Loader } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Booking {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalRequests?: string;
  flyFrequency: string;
  flyingSolution: string;
  heardAbout: string;
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string;
  passenger: number;
  departureTime: string;
  returnDepartureTime?: string;
  status: "pending" | "complete";
  createdAt: string;
  updatedAt: string;
}

export default function BookingsTable() {
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState<"" | "pending" | "complete">(
    ""
  );

  const {
    data: bookings,
    isLoading,
    isError,
  } = useQuery<Booking[]>({
    queryKey: ["bookings", statusFilter],
    queryFn: async () => {
      const res = await fetch(`/api/users/booking?status=${statusFilter}`);
      return res.json();
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({
      id,
      status,
    }: {
      id: string;
      status: "pending" | "complete";
    }) => {
      const res = await fetch(`/api/users/booking/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="w-6 h-6 text-gray-500 animate-spin" />
      </div>
    );
  if (isError)
    return (
      <div className="flex h-screen items-center justify-center">
        <Alert variant="destructive" className="max-w-sm">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <AlertTitle>Error</AlertTitle>
          </div>
          <AlertDescription className="mt-2">
            Failed to fetch bookings. Please try again.
          </AlertDescription>
          <Button
            onClick={() =>
              queryClient.invalidateQueries({ queryKey: ["bookings"] })
            }
            className="mt-3"
          >
            Retry
          </Button>
        </Alert>
      </div>
    );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Bookings</h1>
        <Select
          value={statusFilter}
          onValueChange={(value: "" | "pending" | "complete") =>
            setStatusFilter(value)
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="complete">Complete</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Additional Requests</TableHead>
            <TableHead>Fly Frequency</TableHead>
            <TableHead>Flying Solution</TableHead>
            <TableHead>Heard About</TableHead>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Departure Date</TableHead>
            <TableHead>Return Date</TableHead>
            <TableHead>Passenger</TableHead>
            <TableHead>Departure Time</TableHead>
            <TableHead>Return Departure Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings?.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.title}</TableCell>
              <TableCell>{booking.firstName}</TableCell>
              <TableCell>{booking.lastName}</TableCell>
              <TableCell>{booking.email}</TableCell>
              <TableCell>{booking.phone}</TableCell>
              <TableCell>
                {booking.additionalRequests ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        View Request
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                      <DialogHeader>
                        <DialogTitle>Additional Requests</DialogTitle>
                        <DialogDescription>
                          Special requirements or notes from the customer
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="rounded-md bg-muted/50 p-4">
                          <pre className="whitespace-pre-wrap font-sans">
                            {booking.additionalRequests}
                          </pre>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell>{booking.flyFrequency}</TableCell>
              <TableCell>{booking.flyingSolution}</TableCell>
              <TableCell>{booking.heardAbout}</TableCell>
              <TableCell>{booking.from}</TableCell>
              <TableCell>{booking.to}</TableCell>
              <TableCell>{booking.departureDate}</TableCell>
              <TableCell>{booking.returnDate || "-"}</TableCell>
              <TableCell>{booking.passenger}</TableCell>
              <TableCell>{booking.departureTime}</TableCell>
              <TableCell>{booking.returnDepartureTime || "-"}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    booking.status === "complete" ? "default" : "secondary"
                  }
                >
                  {booking.status}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(booking.createdAt).toLocaleString()}
              </TableCell>
              <TableCell>
                {new Date(booking.updatedAt).toLocaleString()}
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Change Status</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <div className="flex flex-col gap-4 p-4">
                      <DialogTitle>Update Booking Status</DialogTitle>
                      <div className="flex gap-2">
                        <Button
                          variant={
                            booking.status === "pending" ? "default" : "outline"
                          }
                          onClick={() =>
                            updateStatusMutation.mutate({
                              id: booking.id,
                              status: "pending",
                            })
                          }
                        >
                          Pending
                        </Button>
                        <Button
                          variant={
                            booking.status === "complete"
                              ? "default"
                              : "outline"
                          }
                          onClick={() =>
                            updateStatusMutation.mutate({
                              id: booking.id,
                              status: "complete",
                            })
                          }
                        >
                          Complete
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
