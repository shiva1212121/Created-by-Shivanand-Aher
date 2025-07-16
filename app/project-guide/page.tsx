import { CardDescription } from "@/components/ui/card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Download, Github, Play, Settings, Target, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Code, FileText, Brain } from "lucide-react"

export default function ProjectGuidePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Project Guide</h1>
      <p className="text-gray-700">This section will contain guides and resources for VLSI projects.</p>

      {/* Featured Projects Section */}
      <section className="mb-12 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1: Low Power ALU Design */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <Badge className="bg-blue-100 text-blue-700">Intermediate</Badge>
                  <Badge className="bg-green-100 text-green-700">Low-Power</Badge>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mb-4 h-48 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 mx-auto shadow-lg">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600">ALU Logic Diagram</p>
                  <p className="text-xs text-gray-500">{" + Waveform Simulation"}</p>
                </div>
              </div>
              <CardTitle className="text-xl mb-2">Low Power ALU Design using CMOS Technology</CardTitle>
              <CardDescription className="text-gray-600 mb-4">
                Design and simulate a low-power 4-bit Arithmetic Logic Unit (ALU) using CMOS logic gates in Cadence
                Virtuoso. Focus on minimizing switching power consumption while maintaining performance and
                functionality.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <Settings className="w-4 h-4 mr-2 text-blue-600" />
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Cadence Virtuoso
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      LTSpice
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      VHDL
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-green-600" />
                    Learning Outcomes
                  </h4>
                  <p className="text-sm text-gray-600">
                    CMOS logic design, power optimization techniques, RTL-level design, and simulation analysis.
                  </p>
                </div>
                <Button className="w-full group-hover:bg-blue-600 transition-colors">
                  <Play className="w-4 h-4 mr-2" />
                  View Project Details
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project 2: RTL to GDSII Flow */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <Badge className="bg-purple-100 text-purple-700">Advanced</Badge>
                  <Badge className="bg-orange-100 text-orange-700">ASIC Flow</Badge>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mb-4 h-48 bg-gradient-to-br from-purple-100 to-orange-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center shadow">
                      <span className="text-xs font-bold text-purple-600">RTL</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center shadow">
                      <span className="text-xs font-bold text-blue-600">SYN</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center shadow">
                      <span className="text-xs font-bold text-orange-600">P&R</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Complete ASIC Flow</p>
                </div>
              </div>
              <CardTitle className="text-xl mb-2">RTL to GDSII Flow: A Complete ASIC Mini Design</CardTitle>
              <CardDescription className="text-gray-600 mb-4">
                Implement a simple digital counter from Verilog RTL code to final layout using Synopsys Design Compiler
                and Cadence Innovus. Experience the complete ASIC design methodology from concept to silicon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <Settings className="w-4 h-4 mr-2 text-purple-600" />
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Verilog
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Synopsys DC
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Cadence Innovus
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      DRC/LVS Tools
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-orange-600" />
                    Learning Outcomes
                  </h4>
                  <p className="text-sm text-gray-600">
                    ASIC design flow, constraint writing, netlist generation, physical design, and layout verification.
                  </p>
                </div>
                <Button className="w-full group-hover:bg-purple-600 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Download Flow PDF
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project 3: AI-based Fault Detection */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <Badge className="bg-red-100 text-red-700">Advanced</Badge>
                  <Badge className="bg-pink-100 text-pink-700">AI-Based</Badge>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mb-4 h-48 bg-gradient-to-br from-red-100 to-pink-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 mx-auto shadow-lg">
                      <Brain className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">!</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Neural Network</p>
                  <p className="text-xs text-gray-500">Fault Detection</p>
                </div>
              </div>
              <CardTitle className="text-xl mb-2">AI-based Fault Detection in Digital Circuits</CardTitle>
              <CardDescription className="text-gray-600 mb-4">
                Use machine learning to identify stuck-at faults in logic circuits. Train a neural network model using
                labeled test data to predict faulty outputs and improve circuit reliability testing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <Settings className="w-4 h-4 mr-2 text-red-600" />
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Python
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      TensorFlow
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Netlist Parser
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Scikit-learn
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-pink-600" />
                    Learning Outcomes
                  </h4>
                  <p className="text-sm text-gray-600">
                    AI integration in hardware testing, fault simulation, machine learning model training, and data
                    analysis.
                  </p>
                </div>
                <Button className="w-full group-hover:bg-red-600 transition-colors">
                  <Github className="w-4 h-4 mr-2" />
                  Explore Codebase
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project 4: SRAM Cell Design */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <Badge className="bg-indigo-100 text-indigo-700">Intermediate</Badge>
                  <Badge className="bg-teal-100 text-teal-700">Memory Design</Badge>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mb-4 h-48 bg-gradient-to-br from-indigo-100 to-teal-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="grid grid-cols-3 gap-1 mb-2">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 bg-white rounded border-2 border-indigo-300 flex items-center justify-center"
                      >
                        <div className="w-1 h-1 bg-indigo-600 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">6T SRAM Cell</p>
                  <p className="text-xs text-gray-500">Schematic & Waveforms</p>
                </div>
              </div>
              <CardTitle className="text-xl mb-2">SRAM Cell Design and Simulation</CardTitle>
              <CardDescription className="text-gray-600 mb-4">
                Model and simulate a 6-transistor SRAM cell and analyze read/write performance. Evaluate delay, noise
                margin, and area optimization using advanced SPICE simulation tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <Settings className="w-4 h-4 mr-2 text-indigo-600" />
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      LTSpice
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Microwind
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Cadence
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-teal-600" />
                    Learning Outcomes
                  </h4>
                  <p className="text-sm text-gray-600">
                    Memory cell operation, transistor sizing, timing analysis, and noise margin evaluation.
                  </p>
                </div>
                <Button className="w-full group-hover:bg-indigo-600 transition-colors">
                  <FileText className="w-4 h-4 mr-2" />
                  View Schematic
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Categories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Project Categories</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Digital Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Projects focusing on logic design, FPGAs, and microcontrollers.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <Settings className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Analog & Mixed-Signal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Explore projects in op-amps, filters, and data converters.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-xl">AI in VLSI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Projects integrating machine learning for design and verification.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <Code className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-xl">ASIC Design Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Full-chip design projects from RTL to GDSII.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Own VLSI Project?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Access our extensive library of project templates, detailed guides, and expert mentorship to bring your
          innovative VLSI ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Play className="w-5 h-5 mr-2" />
            Explore All Projects
          </Button>
          <Button size="lg" variant="outline">
            <Download className="w-5 h-5 mr-2" />
            Download Project Templates
          </Button>
        </div>
      </section>
    </div>
  )
}
