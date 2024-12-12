import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const exams = [
  {
    id: 1,
    name: "Mathematics",
    subject: "Algebra",
    duration: "2 hours",
    date: "Dec 15, 2024",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Physics",
    subject: "Mechanics",
    duration: "3 hours",
    date: "Dec 18, 2024",
    status: "Upcoming",
  },
  // Add more exams
]

export default function ExamListPage() {
  return (
    (<div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Exam List</h1>
        <Button>Register for Exam</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exams.map((exam) => (
            <TableRow key={exam.id}>
              <TableCell>{exam.name}</TableCell>
              <TableCell>{exam.subject}</TableCell>
              <TableCell>{exam.duration}</TableCell>
              <TableCell>{exam.date}</TableCell>
              <TableCell>{exam.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>)
  );
}

