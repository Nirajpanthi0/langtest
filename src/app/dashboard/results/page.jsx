import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const results = [
  {
    id: 1,
    exam: "Mathematics",
    score: 85,
    totalQuestions: 50,
    correctAnswers: 42,
    date: "Dec 10, 2024",
  },
  {
    id: 2,
    exam: "Physics",
    score: 78,
    totalQuestions: 45,
    correctAnswers: 35,
    date: "Dec 5, 2024",
  },
  // Add more results
]

export default function ResultsPage() {
  return (
    (<div className="space-y-6">
      <h1 className="text-3xl font-bold">Results</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">82%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Exams Taken</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Best Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">95%</div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Exam</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Questions</TableHead>
                <TableHead>Correct Answers</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell>{result.exam}</TableCell>
                  <TableCell>{result.score}%</TableCell>
                  <TableCell>{result.totalQuestions}</TableCell>
                  <TableCell>{result.correctAnswers}</TableCell>
                  <TableCell>{result.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>)
  );
}

