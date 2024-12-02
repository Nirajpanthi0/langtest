"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardPage() {
  const availableExams = [
    { id: 1, title: "Color Vision Test", type: "free_for_all", status: "Available" },
    { id: 2, title: "UBT - 01 [무료]", type: "free_for_all", status: "Available" },
    { id: 3, title: "UBT - 02 [무료]", type: "free_for_all", status: "Available" },
    { id: 4, title: "UBT - 03 [무료]", type: "free_for_all", status: "Available" },
  ]

  const examPackages = [
    { id: 1, title: "10 sets Packages", exams: 13, price: "RS. 10" },
    { id: 2, title: "Chapter-wise Package", exams: 25, price: "RS. 250" },
    { id: 3, title: "Full Sets Packages", exams: 136, price: "RS. 2500" },
    { id: 4, title: "30 set package", exams: 33, price: "RS. 500" },
  ]

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center space-x-4">
            <img 
              src="/placeholder.svg?height=40&width=40" 
              alt="EPS-TOPIK Logo" 
              className="h-10 w-10"
            />
            <h2 className="text-lg font-semibold">EPS-TOPIK UBT TRAIL EXAM</h2>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList className="grid w-full grid-cols-6 lg:max-w-[800px] mx-auto">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="classes">Live Classes</TabsTrigger>
            <TabsTrigger value="exams">Exams</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="freeClasses">Free Classes</TabsTrigger>
            <TabsTrigger value="subtractions">Subtractions</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  Manage your profile information here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="exams" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {availableExams.map((exam) => (
                <Card key={exam.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{exam.title}</CardTitle>
                    <CardDescription>
                      Type: {exam.type}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full">Start Exam</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Exam Packages</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {examPackages.map((pkg) => (
                <Card key={pkg.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{pkg.title}</CardTitle>
                    <CardDescription>
                      Includes {pkg.exams} exams
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">View</Button>
                    <Button>{pkg.price}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

