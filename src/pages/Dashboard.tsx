import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Users,
  Briefcase,
  FolderOpen,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const Dashboard = () => {
  const upcomingActions = [
    {
      time: "03:30 pm",
      type: "Internal Meeting",
      title: "Internal Meeting with Jade Sorghea - UI designer",
      priority: "high",
    },
    {
      time: "05:00 pm",
      type: "Internal Meeting",
      title: "Internal Meeting with Content team",
      priority: "medium",
    },
    {
      time: "07:00 pm",
      type: "Interview",
      title: "Interview with Acharyut - UI intern",
      priority: "high",
    },
  ];

  const applications = [
    {
      name: "Elizabeth Filade",
      experience: "1 year in Software Development",
      role: "Latest Experience",
      bgColor: "bg-purple-500",
    },
    {
      name: "Andre Suares",
      experience: "3 years in Software Development",
      role: "Latest Experience",
      bgColor: "bg-orange-500",
    },
    {
      name: "Ishita Ashuth",
      experience: "3 years in Software Development",
      role: "Latest Experience",
      bgColor: "bg-purple-500",
    },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6 bg-gray-50 min-h-screen overflow-x-hidden max-w-[1440px] mx-auto">
      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="bg-blue-500 rounded-full p-2 w-max">
          <TrendingUp className="h-4 w-4 text-white" />
        </div>
        <span className="text-blue-700 text-sm">
          Optimize your experience on Gigfloww - track your job post, manage
          teams and streamline HR operations effortlessly today!
        </span>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 truncate">
          Welcome Back, Nuraj group
        </h1>
        <div className="flex items-center gap-2 text-gray-500 text-sm whitespace-nowrap">
          <CalendarDays className="h-4 w-4" />
          <span>Wed 24, May 2025</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            title: "Employees",
            value: "24",
            icon: <Users className="h-4 w-4 text-purple-500" />,
          },
          {
            title: "Hiring",
            value: "5",
            icon: <Briefcase className="h-4 w-4 text-blue-500" />,
          },
          {
            title: "Projects",
            value: "1",
            icon: <FolderOpen className="h-4 w-4 text-green-500" />,
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {item.title}
              </CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <Button
                variant="ghost"
                className="text-blue-600 p-0 h-auto font-normal mt-2 hover:bg-transparent"
              >
                View Details <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Report + Upcoming Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-col sm:flex-row justify-between gap-3">
            <CardTitle>Performance Report</CardTitle>
            <select className="text-sm border rounded px-2 py-1 w-full sm:w-auto">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </CardHeader>
          <CardContent>
            <div className="h-64 relative">
              <svg viewBox="0 0 600 200" className="w-full h-full">
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <path
                  d="M 50 150 Q 100 120 150 140 T 250 100 T 350 80 T 450 70 T 550 60"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M 50 150 Q 100 120 150 140 T 250 100 T 350 80 T 450 70 T 550 60 L 550 180 L 50 180 Z"
                  fill="url(#gradient)"
                />
              </svg>
              <div className="absolute bottom-2 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
                {"Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(
                  " "
                ).map((day, i) => (
                  <span key={i}>{day}</span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Upcoming Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingActions.map((action, index) => (
              <div key={index} className="flex items-start space-x-3 text-sm">
                <div className="text-gray-500 min-w-[60px]">{action.time}</div>
                <div className="flex-1">
                  <div className="text-gray-600 text-xs">{action.type}</div>
                  <div className="text-gray-900 font-medium">{action.title}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Incoming Applications */}
      <Card>
        <CardHeader className="flex flex-col sm:flex-row justify-between gap-3">
          <div>
            <CardTitle>Incoming Application</CardTitle>
            <p className="text-sm text-gray-600">
              Manage applicants for your job posting
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              Filter
            </Button>
            <Button size="sm" className="w-full sm:w-auto">
              See all
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {applications.map((app, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full ${app.bgColor} flex items-center justify-center`}
                  >
                    <span className="text-white font-semibold">
                      {app.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{app.name}</h4>
                    <p className="text-xs text-gray-600 truncate">{app.experience}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mb-2">{app.role}</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Applied for:</span>
                  <Badge variant="secondary" className="text-xs">
                    Testing Etc
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  className="w-full mt-3 text-blue-600 p-0 h-auto font-normal hover:bg-transparent"
                >
                  View Resume <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
