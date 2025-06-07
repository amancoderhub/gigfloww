import React, { useState } from "react";

type Employee = {
  id: number;
  name: string;
  email: string;
  jobTitle: string;
  department: string;
  netSalary: string;
  status: string;
  avatar: string;
};

const Salary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const employees: Employee[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      jobTitle: "Software Engineer",
      department: "Engineering",
      netSalary: "₹50,000",
      status: "Active",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      jobTitle: "Product Manager",
      department: "Product",
      netSalary: "₹60,000",
      status: "Inactive",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    // add more employee objects here
  ];

  // Filter employees based on search term (case-insensitive)
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Employee Salaries</h1>

      <input
        type="text"
        placeholder="Search employees..."
        className="w-full p-2 border border-gray-300 rounded mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Employee list */}
        <div>
          {filteredEmployees.length === 0 ? (
            <p>No employees found.</p>
          ) : (
            <ul>
              {filteredEmployees.map((employee) => (
                <li
                  key={employee.id}
                  onClick={() => setSelectedEmployee(employee)}
                  className={`flex items-center gap-4 p-3 rounded cursor-pointer border ${
                    selectedEmployee?.id === employee.id
                      ? "border-blue-500 bg-blue-100"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <img
                    src={employee.avatar}
                    alt={employee.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{employee.name}</p>
                    <p className="text-sm text-gray-600">{employee.jobTitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Selected employee details */}
        <div>
          {selectedEmployee ? (
            <div className="p-4 border rounded shadow-sm bg-white">
              <h2 className="text-2xl font-bold mb-4">{selectedEmployee.name}</h2>
              <img
                src={selectedEmployee.avatar}
                alt={selectedEmployee.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <p>
                <strong>Email:</strong> {selectedEmployee.email}
              </p>
              <p>
                <strong>Job Title:</strong> {selectedEmployee.jobTitle}
              </p>
              <p>
                <strong>Department:</strong> {selectedEmployee.department}
              </p>
              <p>
                <strong>Net Salary:</strong> {selectedEmployee.netSalary}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    selectedEmployee.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedEmployee.status}
                </span>
              </p>
            </div>
          ) : (
            <p className="text-gray-500">Select an employee to see details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Salary;
