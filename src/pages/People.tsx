import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Plus, MoreHorizontal, Download } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const People = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterRole, setFilterRole] = useState("all");

  const employees = [
    {
      id: 1,
      name: "Akua Sharkar",
      email: "akua.sharkar@email.com",
      role: "Software Engineer",
      department: "Engineering",
      salary: "$3,500",
      joiningDate: "Nov 16, 2022",
      status: "Active",
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "James Oyinkan",
      email: "james.oyinkan@email.com",
      role: "Visual Designer",
      department: "Design",
      salary: "$2,500",
      joiningDate: "Jan 16, 2023",
      status: "Active",
      avatar: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Emmanuel Sharkar",
      email: "emmanuel.sharkar@email.com",
      role: "Visual Designer",
      department: "Design",
      salary: "$3,500",
      joiningDate: "Dec 18, 2022",
      status: "Temporary",
      avatar: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Jackson Shankur",
      email: "jackson.shankur@email.com",
      role: "UI/UX Designer",
      department: "Design",
      salary: "$3,500",
      joiningDate: "Nov 16, 2022",
      status: "Temporary",
      avatar: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Kila Ashuth",
      email: "kila.ashuth@email.com",
      role: "Content Writer",
      department: "Content",
      salary: "$7,500",
      joiningDate: "Jan 09, 2023",
      status: "Active",
      avatar: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Chris Berik",
      email: "chris.berik@email.com",
      role: "Sales Manager",
      department: "Operations",
      salary: "$4,500",
      joiningDate: "Feb 13, 2023",
      status: "Active",
      avatar: "/placeholder.svg",
    },
    {
      id: 7,
      name: "Samuel Burton",
      email: "samuel.burton@email.com",
      role: "HR Manager",
      department: "HR",
      salary: "$5,500",
      joiningDate: "Aug 22, 2022",
      status: "Temporary",
      avatar: "/placeholder.svg",
    },
    {
      id: 8,
      name: "Ashley Pinkels",
      email: "ashley.pinkels@email.com",
      role: "Product Manager",
      department: "Product",
      salary: "$6,500",
      joiningDate: "Apr 16, 2023",
      status: "Active",
      avatar: "/placeholder.svg",
    },
  ];

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      filterType === "all" || employee.status.toLowerCase() === filterType;
    const matchesRole =
      filterRole === "all" || employee.department.toLowerCase() === filterRole;

    return matchesSearch && matchesType && matchesRole;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "temporary":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">List of people</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add new person
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="temporary">Temporary</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterRole} onValueChange={setFilterRole}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="content">Content</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="hr">HR</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filter
              </Button>
            </div>

            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Employee Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Job Title</TableHead>
                <TableHead className="font-semibold">Department</TableHead>
                <TableHead className="font-semibold">Net Salary</TableHead>
                <TableHead className="font-semibold">Joining Date</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={employee.avatar} />
                        <AvatarFallback>
                          {employee.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{employee.name}</div>
                        <div className="text-sm text-gray-500">
                          {employee.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-900">
                    {employee.role}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {employee.department}
                  </TableCell>
                  <TableCell className="font-medium">
                    {employee.salary}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {employee.joiningDate}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(employee.status)}>
                      {employee.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2">
        <Button variant="outline" size="sm" disabled>
          1
        </Button>
        <Button variant="ghost" size="sm">
          2
        </Button>
        <Button variant="ghost" size="sm">
          3
        </Button>
        <Button variant="ghost" size="sm">
          4
        </Button>
        <Button variant="outline" size="sm">
          →
        </Button>
      </div>
    </div>
  );
};

export default People;
