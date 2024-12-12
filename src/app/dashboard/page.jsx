import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function DashboardPage() {
  return (
    (<div className="space-y-6">
      <h1 className="text-3xl font-bold">Available Exams</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Mathematics</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Details</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Duration</TableCell>
                  <TableCell>2 hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Questions</TableCell>
                  <TableCell>50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Start Date</TableCell>
                  <TableCell>Dec 15, 2024</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {/* Add more exam cards here */}
      </div>
    </div>)
  );
}

