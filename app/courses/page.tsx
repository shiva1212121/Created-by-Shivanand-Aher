import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Brain, Award, Users, Calendar, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <p className="text-gray-700">Explore our comprehensive VLSI courses here.</p>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-8 mt-12">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">VLSI Courses & Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a wide range of VLSI courses, from foundational concepts to advanced AI applications, and earn
            certifications to boost your career.
          </p>
        </header>

        {/* Course Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Course Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">VLSI Fundamentals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Master the basics of semiconductor devices and digital logic.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow text-center">
              <Brain className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl">AI in VLSI</CardTitle>
              <CardContent>
                <p className="text-gray-600">Learn how AI is transforming chip design and verification.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-xl">ASIC & FPGA Design</CardTitle>
              <CardContent>
                <p className="text-gray-600">Dive deep into Application-Specific Integrated Circuit and FPGA design.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Analog & Mixed-Signal</CardTitle>
              <CardContent>
                <p className="text-gray-600">Explore the world of analog circuits and mixed-signal integration.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-700">Beginner</Badge>
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Introduction to VLSI Design</CardTitle>
                <CardDescription className="text-gray-600">
                  Learn the fundamental concepts of VLSI design, including CMOS technology, logic gates, and basic
                  circuit theory.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• CMOS Inverter Design</li>
                  <li>• Combinational Logic</li>
                  <li>• Sequential Logic</li>
                  <li>• Basic Layout Principles</li>
                </ul>
                <Button className="w-full group-hover:bg-blue-600 transition-colors">
                  Enroll Now
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Course 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-700">Intermediate</Badge>
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">AI for VLSI Design Automation</CardTitle>
                <CardDescription className="text-gray-600">
                  Explore how artificial intelligence and machine learning algorithms are used to automate and optimize
                  VLSI design flows.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• ML in Placement & Routing</li>
                  <li>• AI-Powered Verification</li>
                  <li>• Predictive Design Analysis</li>
                  <li>• Reinforcement Learning for PPA</li>
                </ul>
                <Button className="w-full group-hover:bg-green-600 transition-colors">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Course 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-purple-100 text-purple-700">Advanced</Badge>
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Advanced ASIC Design & Verification</CardTitle>
                <CardDescription className="text-gray-600">
                  A deep dive into advanced ASIC design methodologies, including complex verification techniques and
                  industry-standard tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• UVM Verification Methodology</li>
                  <li>• Formal Verification</li>
                  <li>• Low Power Design Techniques</li>
                  <li>• Physical Design Closure</li>
                </ul>
                <Button className="w-full group-hover:bg-purple-600 transition-colors">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-yellow-100 text-yellow-700">Industry Recognized</Badge>
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Certified VLSI Design Professional</CardTitle>
                <CardDescription className="text-gray-600">
                  Validate your expertise in core VLSI design principles and methodologies with this professional
                  certification.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Digital IC Design</li>
                  <li>• Analog Circuit Analysis</li>
                  <li>• Semiconductor Physics</li>
                  <li>• EDA Tool Proficiency</li>
                </ul>
                <Button className="w-full group-hover:bg-yellow-600 transition-colors">
                  Get Certified
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-pink-100 text-pink-700">AI Specialization</Badge>
                  <Brain className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl">AI in VLSI Specialist Certification</CardTitle>
                <CardDescription className="text-gray-600">
                  Specialize in the application of AI and machine learning techniques to VLSI design, verification, and
                  optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Neural Networks for EDA</li>
                  <li>• Reinforcement Learning in P&R</li>
                  <li>• AI-Driven Verification</li>
                  <li>• Data Science for Chip Design</li>
                </ul>
                <Button className="w-full group-hover:bg-pink-600 transition-colors">
                  Become an AI Specialist
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Upcoming Webinars & Events */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Webinars & Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-red-100 text-red-700">Webinar</Badge>
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Future of VLSI: AI & Quantum Computing</CardTitle>
                <CardDescription className="text-gray-600">
                  Join industry experts to discuss the convergence of AI, quantum computing, and VLSI design.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">Date: July 25, 2024 | Time: 10:00 AM PST</p>
                <Button variant="outline">
                  Register Now
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-indigo-100 text-indigo-700">Workshop</Badge>
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Hands-on with Cadence Virtuoso</CardTitle>
                <CardDescription className="text-gray-600">
                  A practical workshop on using Cadence Virtuoso for analog circuit design and layout.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">Date: August 10-11, 2024 | Location: Online</p>
                <Button variant="outline">
                  Sign Up
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your VLSI Career?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Enroll in our courses and earn industry-recognized certifications to become a leader in the semiconductor
            industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore All Courses
            </Button>
            <Button size="lg" variant="outline">
              <Award className="w-5 h-5 mr-2" />
              View Certifications
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
