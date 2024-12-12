import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function LiveExamPage() {
  return (
    (<div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Live Exam</h1>
        <div className="flex items-center gap-4">
          <div className="text-sm">Time Remaining: 01:45:30</div>
          <Button variant="destructive">Submit Exam</Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <Card>
          <CardHeader>
            <CardTitle>Question 1 of 50</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              What is the derivative of f(x) = x² with respect to x?
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                A) 2x
              </Button>
              <Button variant="outline" className="w-full justify-start">
                B) x
              </Button>
              <Button variant="outline" className="w-full justify-start">
                C) 2
              </Button>
              <Button variant="outline" className="w-full justify-start">
                D) x²
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={30} />
            <div className="text-sm text-muted-foreground">
              15 of 50 questions answered
            </div>
            <Separator />
            <div className="grid grid-cols-10 gap-2">
              {Array.from({ length: 50 }).map((_, i) => (
                <Button key={i} variant="outline" size="icon" className="h-8 w-8">
                  {i + 1}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>)
  );
}

