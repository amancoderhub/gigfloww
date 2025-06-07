import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, Sparkles } from "lucide-react";

const Hiring = () => {
  const [formData, setFormData] = useState({
    role: "",
    skills: "",
    experience: "",
    employmentType: "",
    workplaceType: "",
    stipend: "",
    openings: "",
    description: "",
    links: "",
  });

  const jobPostings = [
    {
      id: 1,
      title: "UI Designer Intern (Remote)",
      status: "Active Roles",
      requirements: "Requirements - HTML",
      applications: "2",
    },
    {
      id: 2,
      title: "UI Designer Intern (Remote)",
      status: "Active Roles",
      requirements: "Requirements - HTML",
      applications: "4",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Job Posting</h1>
        <p className="text-gray-600">
          Post Job for free. Add details for your job post
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fill in Job Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Role */}
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <div className="relative">
                  <Input
                    id="role"
                    placeholder="e.g UX/UI Designer"
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>

              {/* Skills Required */}
              <div className="space-y-2">
                <Label htmlFor="skills">Skill(s) Required</Label>
                <div className="relative">
                  <Input
                    id="skills"
                    placeholder="Enter required skills"
                    value={formData.skills}
                    onChange={(e) =>
                      handleInputChange("skills", e.target.value)
                    }
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>

              {/* Years of Experience */}
              <div className="space-y-2">
                <Label htmlFor="experience">
                  Years of Experience/Experience Level
                </Label>
                <div className="relative">
                  <Input
                    id="experience"
                    placeholder="e.g 0-2 years"
                    value={formData.experience}
                    onChange={(e) =>
                      handleInputChange("experience", e.target.value)
                    }
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>

              {/* Employment Type */}
              <div className="space-y-2">
                <Label htmlFor="employmentType">Employment Type</Label>
                <div className="relative">
                  <Input
                    id="employmentType"
                    placeholder="e.g Full time"
                    value={formData.employmentType}
                    onChange={(e) =>
                      handleInputChange("employmentType", e.target.value)
                    }
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>

              {/* Workplace Type */}
              <div className="space-y-2">
                <Label htmlFor="workplaceType">Workplace Type</Label>
                <div className="relative">
                  <Input
                    id="workplaceType"
                    placeholder="e.g Hybrid"
                    value={formData.workplaceType}
                    onChange={(e) =>
                      handleInputChange("workplaceType", e.target.value)
                    }
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>

              {/* Stipend */}
              <div className="space-y-2">
                <Label htmlFor="stipend">Stipend</Label>
                <div className="relative">
                  <Input
                    id="stipend"
                    placeholder="Enter the stipend per month"
                    value={formData.stipend}
                    onChange={(e) =>
                      handleInputChange("stipend", e.target.value)
                    }
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>

              {/* No of Opening */}
              <div className="space-y-2">
                <Label htmlFor="openings">
                  No of Opening (Fill if it is more than 1 one)
                </Label>
                <div className="relative">
                  <Input
                    id="openings"
                    placeholder="e.g 2"
                    value={formData.openings}
                    onChange={(e) =>
                      handleInputChange("openings", e.target.value)
                    }
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>

              {/* Job Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter job description..."
                  className="min-h-[100px]"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
              </div>

              {/* Relevant Links */}
              <div className="space-y-2">
                <Label htmlFor="links">Relevant Link(s)</Label>
                <Input
                  id="links"
                  placeholder="Enter links"
                  value={formData.links}
                  onChange={(e) => handleInputChange("links", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Manage Posting */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Manage Posting</CardTitle>
                <Button
                  variant="ghost"
                  className="text-blue-600 p-0 h-auto font-normal"
                >
                  See all
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {jobPostings.map((job) => (
                <div key={job.id} className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8 bg-blue-600">
                      <AvatarFallback className="bg-blue-600 text-white text-xs">
                        N
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">{job.title}</h4>
                      <p className="text-xs text-gray-600">{job.status}</p>
                      <p className="text-xs text-gray-500">
                        {job.requirements}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Applications</span>
                    <span className="font-medium">{job.applications}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Writing Assistant */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Use AI to write</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Generate awesome content with AI if you need help with job
                    description, you click here and it will suggest to write job
                    description
                  </p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Write with AI
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
