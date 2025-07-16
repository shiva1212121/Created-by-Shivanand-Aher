"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Briefcase,
  Settings,
  Brain,
  Play,
  Download,
  Users,
  Award,
  Calendar,
  FileText,
  Zap,
  Target,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Code,
  Upload,
  Cpu,
  Bot,
  Network,
  TrendingUp,
  LogIn,
  LogOut,
  User,
} from "lucide-react"
import { LoginModal } from "@/components/login-modal"
import { createClient } from "@/lib/supabase/client"
import { signOut } from "./auth/actions"
import Link from "next/link"

export default function HomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => {
      authListener?.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Learn VLSI Smarter
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#learning" className="text-gray-600 hover:text-blue-600 transition-colors">
                Learning
              </a>
              <a href="#careers" className="text-gray-600 hover:text-blue-600 transition-colors">
                Careers
              </a>
              <a href="#tools" className="text-gray-600 hover:text-blue-600 transition-colors">
                Tools
              </a>
              <a href="#ai" className="text-gray-600 hover:text-blue-600 transition-colors">
                AI in VLSI
              </a>
              {user ? (
                <>
                  <Link
                    href="/profile"
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                  >
                    <User className="w-5 h-5 mr-1" />
                    Profile
                  </Link>
                  <Button onClick={handleLogout}>
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsLoginModalOpen(true)}>
                  <LogIn className="w-5 h-5 mr-2" />
                  Login
                </Button>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with AI-Enhanced VLSI Showcase */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                🤖 AI-Powered VLSI Learning Platform
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Learn VLSI Smarter
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Master VLSI design with AI-powered simulations, intelligent tutoring, and automated design optimization.
                Experience the future of semiconductor education with cutting-edge AI tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Bot className="w-5 h-5 mr-2" />
                  Start AI-Powered Learning
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="w-5 h-5 mr-2" />
                  Download AI Study Guide
                </Button>
              </div>
            </div>

            {/* AI-Enhanced VLSI Technology Showcase */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {/* AI Chip Design */}
                  <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-full h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Brain className="w-8 h-8 mx-auto mb-1" />
                        <div className="text-xs font-bold">AI CHIP</div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">AI Accelerator Chip</h3>
                    <p className="text-xs text-gray-600">
                      Neural processing unit with 1000+ AI cores, optimized for machine learning workloads and deep
                      learning inference.
                    </p>
                  </div>

                  {/* AI-Optimized Circuit Layout */}
                  <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-full h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-3 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Network className="w-8 h-8 mx-auto mb-1" />
                        <div className="text-xs font-bold">AI LAYOUT</div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">AI-Optimized Layout</h3>
                    <p className="text-xs text-gray-600">
                      Machine learning algorithms optimize placement and routing, reducing design time by 70% while
                      improving performance.
                    </p>
                  </div>

                  {/* AI Design Verification */}
                  <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-full h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-3 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Target className="w-8 h-8 mx-auto mb-1" />
                        <div className="text-xs font-bold">AI VERIFY</div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">AI Design Verification</h3>
                    <p className="text-xs text-gray-600">
                      Intelligent verification systems detect design flaws automatically, ensuring 99.9% bug-free
                      silicon on first tape-out.
                    </p>
                  </div>

                  {/* AI Power Optimization */}
                  <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-full h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-3 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Zap className="w-8 h-8 mx-auto mb-1" />
                        <div className="text-xs font-bold">AI POWER</div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">AI Power Optimization</h3>
                    <p className="text-xs text-gray-600">
                      Dynamic power management using AI predictions, achieving 50% power reduction while maintaining
                      peak performance.
                    </p>
                  </div>
                </div>

                {/* AI Technology Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-600">70%</div>
                    <div className="text-xs text-gray-600">Design Time Saved</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-purple-600">99.9%</div>
                    <div className="text-xs text-gray-600">First-Pass Success</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-600">50%</div>
                    <div className="text-xs text-gray-600">Power Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI in VLSI Revolution Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">🤖 AI Revolution</Badge>
            <h2 className="text-3xl font-bold mb-4">How AI is Transforming VLSI Design</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Artificial Intelligence is revolutionizing every aspect of VLSI design, from automated layout generation
              to intelligent verification and optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AI-Powered Design Automation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Bot className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-sm font-bold">AUTOMATED DESIGN</div>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-700 mb-2">Design Automation</Badge>
                <CardTitle className="text-lg">AI-Powered Design Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Machine learning algorithms automatically generate optimal circuit layouts, reducing manual design
                  effort by up to 80%.
                </p>
                <div className="text-xs text-gray-500">
                  <div>• Automated RTL generation</div>
                  <div>• Intelligent floorplanning</div>
                  <div>• Smart routing algorithms</div>
                </div>
              </CardContent>
            </Card>

            {/* AI Verification and Testing */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Target className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-sm font-bold">SMART VERIFICATION</div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700 mb-2">Verification</Badge>
                <CardTitle className="text-lg">Intelligent Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  AI-driven verification systems predict potential failures and generate comprehensive test patterns
                  automatically.
                </p>
                <div className="text-xs text-gray-500">
                  <div>• Predictive fault analysis</div>
                  <div>• Automated test generation</div>
                  <div>• Coverage optimization</div>
                </div>
              </CardContent>
            </Card>

            {/* AI Performance Optimization */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-sm font-bold">OPTIMIZATION</div>
                  </div>
                </div>
                <Badge className="bg-purple-100 text-purple-700 mb-2">Optimization</Badge>
                <CardTitle className="text-lg">Performance Tuning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Deep learning models optimize timing, power, and area simultaneously, achieving better PPA than
                  traditional methods.
                </p>
                <div className="text-xs text-gray-500">
                  <div>• Multi-objective optimization</div>
                  <div>• Dynamic power management</div>
                  <div>• Timing closure acceleration</div>
                </div>
              </CardContent>
            </Card>

            {/* AI Manufacturing Support */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Settings className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-sm font-bold">MANUFACTURING</div>
                  </div>
                </div>
                <Badge className="bg-orange-100 text-orange-700 mb-2">Manufacturing</Badge>
                <CardTitle className="text-lg">Smart Fabrication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  AI monitors fabrication processes in real-time, predicting yield issues and optimizing manufacturing
                  parameters.
                </p>
                <div className="text-xs text-gray-500">
                  <div>• Yield prediction</div>
                  <div>• Process optimization</div>
                  <div>• Defect classification</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Tools and Technologies Showcase */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-100 text-cyan-700 hover:bg-cyan-200">🛠️ AI-Powered Tools</Badge>
            <h2 className="text-3xl font-bold mb-4">Next-Generation AI VLSI Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the cutting-edge AI tools that are reshaping VLSI design workflows and enabling unprecedented
              levels of automation and optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Design Assistant */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                  <div className="text-center text-white z-10">
                    <Brain className="w-16 h-16 mx-auto mb-2" />
                    <div className="text-lg font-bold">AI DESIGN ASSISTANT</div>
                    <div className="text-sm opacity-80">Intelligent Design Companion</div>
                  </div>
                  {/* Animated circuit patterns */}
                  <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/40 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 left-4 w-2 h-2 bg-white/50 rounded-full animate-pulse delay-700"></div>
                </div>
                <CardTitle className="flex items-center">
                  <Bot className="w-5 h-5 mr-2 text-blue-600" />
                  AI Design Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Intelligent assistant that guides designers through complex VLSI workflows, suggests optimizations,
                  and automates routine tasks.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Natural Language Interface</span>
                    <Badge variant="outline">GPT-4 Powered</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Design Recommendations</span>
                    <Badge variant="outline">ML-Based</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Code Generation</span>
                    <Badge variant="outline">Auto-Complete</Badge>
                  </div>
                </div>
                <Button className="w-full mt-4">
                  <Play className="w-4 h-4 mr-2" />
                  Try AI Assistant
                </Button>
              </CardContent>
            </Card>

            {/* Neural Network Optimizer */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-green-600 to-teal-700 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20"></div>
                  <div className="text-center text-white z-10">
                    <Network className="w-16 h-16 mx-auto mb-2" />
                    <div className="text-lg font-bold">NEURAL OPTIMIZER</div>
                    <div className="text-sm opacity-80">Deep Learning Optimization</div>
                  </div>
                  {/* Neural network visualization */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-white rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <CardTitle className="flex items-center">
                  <Network className="w-5 h-5 mr-2 text-green-600" />
                  Neural Network Optimizer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced neural networks that optimize circuit parameters for power, performance, and area
                  simultaneously using reinforcement learning.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Multi-Objective Optimization</span>
                    <Badge variant="outline">Deep RL</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Real-time Adaptation</span>
                    <Badge variant="outline">Online Learning</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>PPA Optimization</span>
                    <Badge variant="outline">Pareto Optimal</Badge>
                  </div>
                </div>
                <Button className="w-full mt-4">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Optimize Design
                </Button>
              </CardContent>
            </Card>

            {/* AI Verification Engine */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-full h-40 bg-gradient-to-br from-purple-600 to-pink-700 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
                  <div className="text-center text-white z-10">
                    <Target className="w-16 h-16 mx-auto mb-2" />
                    <div className="text-lg font-bold">AI VERIFICATION</div>
                    <div className="text-sm opacity-80">Intelligent Bug Detection</div>
                  </div>
                  {/* Verification patterns */}
                  <div className="absolute top-4 right-4 w-6 h-6 border-2 border-white/40 rounded-full animate-spin"></div>
                  <div className="absolute bottom-6 left-6 w-4 h-4 border-2 border-white/60 rounded-full animate-spin delay-500"></div>
                </div>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-purple-600" />
                  AI Verification Engine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Machine learning-powered verification that predicts potential bugs, generates comprehensive test
                  cases, and ensures design correctness.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Predictive Bug Detection</span>
                    <Badge variant="outline">CNN-Based</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Smart Test Generation</span>
                    <Badge variant="outline">GANs</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Coverage Analysis</span>
                    <Badge variant="outline">AI-Driven</Badge>
                  </div>
                </div>
                <Button className="w-full mt-4">
                  <Target className="w-4 h-4 mr-2" />
                  Start Verification
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Learning Path Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">🎓 AI Learning Path</Badge>
            <h2 className="text-3xl font-bold mb-4">Master AI-Driven VLSI Design</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow our comprehensive learning path to become proficient in AI-powered VLSI design tools and
              methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Foundation Level */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="w-full h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <BookOpen className="w-8 h-8 mx-auto mb-1" />
                    <div className="text-sm font-bold">FOUNDATION</div>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-700 mb-2">Level 1</Badge>
                <CardTitle className="text-lg">AI Fundamentals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Machine Learning Basics</li>
                  <li>• Neural Network Fundamentals</li>
                  <li>• Python for AI/ML</li>
                  <li>• Data Processing Techniques</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  <Play className="w-4 h-4 mr-2" />
                  Start Foundation
                </Button>
              </CardContent>
            </Card>

            {/* Intermediate Level */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader>
                <div className="w-full h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Brain className="w-8 h-8 mx-auto mb-1" />
                    <div className="text-sm font-bold">INTERMEDIATE</div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700 mb-2">Level 2</Badge>
                <CardTitle className="text-lg">AI in EDA Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• AI-Powered Synthesis</li>
                  <li>• Machine Learning for P&R</li>
                  <li>• Intelligent Verification</li>
                  <li>• Automated Test Generation</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  <Brain className="w-4 h-4 mr-2" />
                  Learn AI Tools
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Level */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="w-full h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Network className="w-8 h-8 mx-auto mb-1" />
                    <div className="text-sm font-bold">ADVANCED</div>
                  </div>
                </div>
                <Badge className="bg-purple-100 text-purple-700 mb-2">Level 3</Badge>
                <CardTitle className="text-lg">Deep Learning VLSI</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Custom AI Accelerators</li>
                  <li>• Neuromorphic Computing</li>
                  <li>• Quantum-AI Hybrid Systems</li>
                  <li>• Edge AI Chip Design</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  <Network className="w-4 h-4 mr-2" />
                  Master Advanced AI
                </Button>
              </CardContent>
            </Card>

            {/* Expert Level */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="w-full h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Award className="w-8 h-8 mx-auto mb-1" />
                    <div className="text-sm font-bold">EXPERT</div>
                  </div>
                </div>
                <Badge className="bg-orange-100 text-orange-700 mb-2">Level 4</Badge>
                <CardTitle className="text-lg">AI Research & Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Novel AI Architectures</li>
                  <li>• Research Publications</li>
                  <li>• Industry Collaboration</li>
                  <li>• Patent Development</li>
                </ul>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  <Award className="w-4 h-4 mr-2" />
                  Become Expert
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Sections with AI Enhancement */}
      <section id="learning" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Section 1: AI-Powered Interactive Learning Tools */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <Bot className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm font-bold">AI-POWERED LEARNING</div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl">AI-Enhanced Interactive Learning Tools</CardTitle>
                <CardDescription>
                  Experience VLSI design through AI-powered simulations, intelligent tutoring systems, and adaptive
                  learning paths that adjust to your progress.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• AI-guided circuit design modules</li>
                  <li>• Intelligent simulation feedback</li>
                  <li>• Adaptive learning workflows</li>
                  <li>• Smart CMOS optimization hints</li>
                </ul>
                <Button className="w-full group-hover:bg-blue-600 transition-colors">
                  <Bot className="w-4 h-4 mr-2" />
                  Explore AI Tools
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Section 2: AI Career Intelligence */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm font-bold">AI CAREER INSIGHTS</div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl">AI-Driven Career Intelligence</CardTitle>
                <CardDescription>
                  Get personalized career recommendations powered by AI analysis of industry trends, skill demands, and
                  your learning progress.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• AI job market analysis</li>
                  <li>• Personalized skill recommendations</li>
                  <li>• Smart career path optimization</li>
                  <li>• AI-predicted salary insights</li>
                </ul>
                <Button className="w-full group-hover:bg-green-600 transition-colors">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Get AI Career Insights
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Section 3: AI-Optimized VLSI Tools */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <Settings className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm font-bold">AI-OPTIMIZED TOOLS</div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Settings className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl">Next-Gen AI VLSI Tools</CardTitle>
                <CardDescription>
                  Master AI-enhanced EDA tools that automate design optimization, predict performance issues, and
                  accelerate time-to-market.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• AI-powered Cadence workflows</li>
                  <li>• Smart Synopsys optimization</li>
                  <li>• Automated RTL to GDSII flow</li>
                  <li>• ML-driven design validation</li>
                </ul>
                <Button className="w-full group-hover:bg-purple-600 transition-colors">
                  <Bot className="w-4 h-4 mr-2" />
                  Try AI-Enhanced Tools
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Section 4: Advanced AI in VLSI */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="relative mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Brain className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm font-bold">ADVANCED AI VLSI</div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl">Advanced AI VLSI Applications</CardTitle>
                <CardDescription>
                  Explore cutting-edge applications of AI in VLSI including neuromorphic computing, quantum-AI hybrids,
                  and autonomous chip design.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Neuromorphic chip architectures</li>
                  <li>• Quantum-AI Hybrid Systems</li>
                  <li>• Autonomous design generation</li>
                  <li>• Edge AI accelerator design</li>
                </ul>
                <Button className="w-full group-hover:bg-orange-600 transition-colors">
                  <Network className="w-4 h-4 mr-2" />
                  Explore Advanced AI
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Success Stories Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">🏆 Success Stories</Badge>
            <h2 className="text-3xl font-bold mb-4">AI-Powered VLSI Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how AI is revolutionizing VLSI design and enabling breakthrough innovations in the
              semiconductor industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Google's TPU */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Cpu className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-lg font-bold">GOOGLE TPU</div>
                    <div className="text-sm opacity-80">AI Accelerator Chip</div>
                  </div>
                </div>
                <CardTitle className="flex items-center">
                  <Bot className="w-5 h-5 mr-2 text-blue-600" />
                  Google's Tensor Processing Unit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Google's TPU revolutionized AI computing with custom silicon designed specifically for machine
                  learning workloads, achieving 15-30x better performance per watt.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Performance Gain</span>
                    <Badge className="bg-blue-100 text-blue-700">30x Faster</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Power Efficiency</span>
                    <Badge className="bg-green-100 text-green-700">15x Better</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Workloads</span>
                    <Badge className="bg-purple-100 text-purple-700">Optimized</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NVIDIA's AI Chip Design */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Network className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-lg font-bold">NVIDIA AI</div>
                    <div className="text-sm opacity-80">GPU Architecture</div>
                  </div>
                </div>
                <CardTitle className="flex items-center">
                  <Network className="w-5 h-5 mr-2 text-green-600" />
                  NVIDIA's AI-Designed GPUs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  NVIDIA uses AI to optimize GPU architectures, resulting in significant improvements in AI training
                  performance and energy efficiency for data centers.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>AI Training Speed</span>
                    <Badge className="bg-green-100 text-green-700">10x Faster</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy Efficiency</span>
                    <Badge className="bg-blue-100 text-blue-700">5x Better</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Design Time</span>
                    <Badge className="bg-orange-100 text-orange-700">50% Reduced</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intel's AI Optimization */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-full h-32 bg-gradient-to-br from-purple-600 to-pink-700 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-lg font-bold">INTEL AI</div>
                    <div className="text-sm opacity-80">Process Optimization</div>
                  </div>
                </div>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                  Intel's AI Process Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Intel leverages AI for manufacturing process optimization, achieving higher yields and better
                  performance in advanced node technologies.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Manufacturing Yield</span>
                    <Badge className="bg-purple-100 text-purple-700">25% Higher</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Defect Reduction</span>
                    <Badge className="bg-green-100 text-green-700">40% Less</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Time to Market</span>
                    <Badge className="bg-blue-100 text-blue-700">30% Faster</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete AI-Enhanced Learning Ecosystem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to master AI-powered VLSI design and launch your career in the next-generation
              semiconductor industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-lg">AI-Enhanced Topics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Core VLSI subjects enhanced with AI capabilities</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI-CMOS</Badge>
                  <Badge variant="secondary">Smart HDL</Badge>
                  <Badge variant="secondary">AI Layout</Badge>
                  <Badge variant="secondary">ML Timing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="w-8 h-8 text-green-600" />
                  <CardTitle className="text-lg">AI Project Gallery</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Showcase of AI-powered VLSI projects and intelligent design case studies
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Play className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-lg">AI Virtual Labs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Practice with AI-assisted RTL coding, smart simulations, and automated synthesis
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-orange-600" />
                  <CardTitle className="text-lg">AI Learning Paths</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Personalized tracks for AI Design Engineer, ML Verification Engineer, and more
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-8 h-8 text-red-600" />
                  <CardTitle className="text-lg">AI Events & Webinars</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI expert talks, machine learning workshops, and neural network hackathons
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-yellow-600" />
                  <CardTitle className="text-lg">AI Certification</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Earn AI-VLSI certificates and neural network design badges after completion
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Colleges & Essential Courses Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">🎓 Educational Pathways</Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Top Colleges & Essential Courses for VLSI
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the best institutions and online platforms to build your VLSI expertise. From premier Indian
              colleges to world-class online certifications.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button variant="outline" size="sm" className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
              All Programs
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-purple-50 bg-transparent">
              India Colleges
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-green-50 bg-transparent">
              Online Courses
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-orange-50 bg-transparent">
              Free Resources
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-red-50 bg-transparent">
              Paid Certifications
            </Button>
          </div>

          {/* Recommended Colleges in India */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              Recommended Colleges in India for VLSI
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-orange-100 text-orange-700">Premier Institute</Badge>
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">IIT</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">IIT Bombay</CardTitle>
                  <CardDescription className="font-medium text-blue-600">M.Tech in VLSI Design</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Leading institute offering comprehensive VLSI design programs with state-of-the-art labs and
                    industry partnerships for cutting-edge research.
                  </p>
                  <Button className="w-full group-hover:bg-orange-600 transition-colors">
                    <span>Visit Website</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-700">Top Ranked</Badge>
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">IIT</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">IIT Delhi</CardTitle>
                  <CardDescription className="font-medium text-blue-600">
                    Microelectronics & VLSI Specialization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Renowned for microelectronics research with specialized VLSI tracks, advanced fabrication
                    facilities, and strong industry connections.
                  </p>
                  <Button className="w-full group-hover:bg-blue-600 transition-colors">
                    <span>Visit Website</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-green-100 text-green-700">Research Excellence</Badge>
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">IISc</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">IISc Bangalore</CardTitle>
                  <CardDescription className="font-medium text-blue-600">M.Tech in Microelectronics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Premier research institute with world-class microelectronics program, focusing on advanced VLSI
                    design and semiconductor technology.
                  </p>
                  <Button className="w-full group-hover:bg-green-600 transition-colors">
                    <span>Visit Website</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-purple-100 text-purple-700">Innovation Hub</Badge>
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">IIIT</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">IIIT Hyderabad</CardTitle>
                  <CardDescription className="font-medium text-blue-600">Dual Degree in ECE with VLSI</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Innovative dual degree program combining electronics and VLSI specialization with strong industry
                    partnerships and practical exposure.
                  </p>
                  <Button className="w-full group-hover:bg-purple-600 transition-colors">
                    <span>Visit Website</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-indigo-100 text-indigo-700">Established Excellence</Badge>
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">NIT</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">NIT Trichy</CardTitle>
                  <CardDescription className="font-medium text-blue-600">M.Tech in VLSI System Design</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Well-established VLSI program with comprehensive curriculum covering system design, verification,
                    and advanced semiconductor technologies.
                  </p>
                  <Button className="w-full group-hover:bg-indigo-600 transition-colors">
                    <span>Visit Website</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Online Courses & Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <Brain className="w-5 h-5 text-white" />
              </div>
              Online Courses & Certifications for VLSI
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-orange-100 text-orange-700">Free</Badge>
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">NPTEL</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">NPTEL (IIT-based)</CardTitle>
                  <CardDescription className="font-medium text-blue-600">
                    VLSI Design & Digital IC Design
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Comprehensive free courses by IIT professors covering VLSI fundamentals, digital design, and
                    advanced topics with certificates.
                  </p>
                  <Button className="w-full group-hover:bg-orange-600 transition-colors">
                    <span>View Courses</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-700">University Level</Badge>
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">CRS</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">Coursera</CardTitle>
                  <CardDescription className="font-medium text-blue-600">VLSI CAD & CMOS Design</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    University-level courses from top institutions covering VLSI CAD tools, CMOS design principles, and
                    industry-standard methodologies.
                  </p>
                  <Button className="w-full group-hover:bg-blue-600 transition-colors">
                    <span>View Courses</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-purple-100 text-purple-700">Practical</Badge>
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">UDM</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">Udemy</CardTitle>
                  <CardDescription className="font-medium text-blue-600">Practical VLSI & ASIC Design</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Hands-on practical courses focusing on real VLSI projects, ASIC design flow, and industry tools with
                    lifetime access.
                  </p>
                  <Button className="w-full group-hover:bg-purple-600 transition-colors">
                    <span>View Courses</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-green-100 text-green-700">MIT/Harvard</Badge>
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">edX</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">edX</CardTitle>
                  <CardDescription className="font-medium text-blue-600">VLSI CAD: Logic to Layout</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Advanced courses from MIT and other top universities covering complete VLSI design flow from logic
                    design to physical layout.
                  </p>
                  <Button className="w-full group-hover:bg-green-600 transition-colors">
                    <span>View Courses</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Choose Your Learning Path?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you prefer traditional college programs or flexible online courses, we've curated the best options
              to help you master VLSI design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Find Your Course
              </Button>
              <Button size="lg" variant="outline">
                <Users className="w-5 h-5 mr-2" />
                Explore Top Institutes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Projects in VLSI & Technology Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">🔧 Hands-On Experience</Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Engineering Projects in VLSI & Technology
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore real-world VLSI projects that bridge theory and practice. From low-power design to AI integration,
              these projects showcase modern engineering solutions using industry-standard tools.
            </p>
          </div>

          {/* Project Filter Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant="outline"
              size="sm"
              className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
            >
              All Projects
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-blue-50 bg-transparent">
              Beginner
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-purple-50 bg-transparent">
              Intermediate
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-orange-50 bg-transparent">
              Advanced
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-red-50 bg-transparent">
              AI-Based
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-yellow-50 bg-transparent">
              Low-Power
            </Button>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                    <p className="text-xs text-gray-500">+ Waveform Simulation</p>
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
                  Implement a simple digital counter from Verilog RTL code to final layout using Synopsys Design
                  Compiler and Cadence Innovus. Experience the complete ASIC design methodology from concept to silicon.
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
                      ASIC design flow, constraint writing, netlist generation, physical design, and layout
                      verification.
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

          {/* Additional Projects Preview */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">More Exciting Projects Coming Soon</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">IoT Sensor Interface Design</h4>
                <p className="text-sm text-gray-600">Mixed-signal design for sensor data acquisition</p>
              </div>
              <div className="text-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">RISC-V Processor Core</h4>
                <p className="text-sm text-gray-600">Complete processor design from RTL to silicon</p>
              </div>
              <div className="text-center p-4 border-2 border-dashed border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Neuromorphic Computing Chip</h4>
                <p className="text-sm text-gray-600">Brain-inspired computing architecture design</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Own VLSI Project?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get inspired by these real-world projects and start building your own. Access project templates, detailed
              guides, and mentorship to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore All Projects
              </Button>
              <Button size="lg" variant="outline">
                <Upload className="w-5 h-5 mr-2" />
                Submit Your Own Project
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="w-5 h-5 mr-2" />
                Start Your Own VLSI Build
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your AI-Powered VLSI Journey?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already mastering AI-enhanced VLSI design with our cutting-edge platform
            powered by artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Bot className="w-5 h-5 mr-2" />
              Start AI Learning Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Download className="w-5 h-5 mr-2" />
              Get AI Study Guide
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Award className="w-5 h-5 mr-2" />
              Get AI Certified
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Learn VLSI Smarter</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering the next generation of AI-powered VLSI engineers with intelligent learning tools and
                cutting-edge industry insights.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">AI Learning Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    AI-Interactive Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Smart Virtual Labs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    AI Project Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    ML Study Guides
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">AI Career Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    AI Career Roadmap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Smart Industry Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    AI Certification
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    ML Job Portal
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>ai-support@learnvlsi.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) AI-VLSI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>AI Valley, Silicon Valley</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Learn VLSI Smarter - AI-Powered Platform. All rights reserved. | AI Privacy Policy | ML Terms
              of Service
            </p>
          </div>
        </div>
      </footer>
      <LoginModal isOpen={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
    </div>
  )
}
