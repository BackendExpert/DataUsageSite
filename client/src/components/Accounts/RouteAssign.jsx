// src/components/Accounts/RouteAssign.jsx

import React, { useState, useEffect } from "react";
import { routesConfig, roles } from "../../routesConfig";

const RouteAssign = () => {
  // Initialize permissions state
  const [permissions, setPermissions] = useState({});

  // Load existing permissions from backend or local storage
  useEffect(() => {
    // Fetch existing permissions here
    const existingPermissions = {}; // Replace with actual fetch
    setPermissions(existingPermissions);
  }, []);

  // Handle checkbox changes
  const handleCheckboxChange = (routePath, role) => {
    setPermissions((prev) => {
      const currentRoles = prev[routePath] || [];
      const updatedRoles = currentRoles.includes(role)
        ? currentRoles.filter((r) => r !== role)
        : [...currentRoles, role];
      return { ...prev, [routePath]: updatedRoles };
    });
  };

  // Handle saving permissions
  const handleSavePermissions = () => {
    // Save permissions to backend or local storage
    console.log("Permissions saved:", permissions);
    // Implement actual save logic here
  };

  // Helper function to flatten routes for display
  const getAllRoutes = () => {
    const allRoutes = [];

    routesConfig.forEach((route) => {
      if (route.protected) {
        allRoutes.push({
          path: route.path,
          name: route.name || route.path,
        });
      }
      if (route.children) {
        route.children.forEach((child) => {
          allRoutes.push({
            path: `${route.path}/${child.path}`,
            name: child.name || child.path,
          });
        });
      }
    });

    return allRoutes;
  };

  const allRoutes = getAllRoutes();

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Assign Routes to Roles</h2>
      <div className="overflow-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Route Name</th>
              <th className="px-4 py-2 text-left">Route Path</th>
              {roles.map((role) => (
                <th key={role} className="px-4 py-2 text-center">
                  {role}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allRoutes.map((route) => (
              <tr key={route.path} className="border-t">
<td className="px-4 py-2">{route.name}</td>
                <td className="px-4 py-2">{route.path}</td>
                {roles.map((role) => (
                  <td key={role} className="px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={permissions[route.path]?.includes(role) || false}
                      onChange={() => handleCheckboxChange(route.path, role)}
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button
          onClick={handleSavePermissions}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Permissions
        </button>
      </div>
    </div>
  );
};

export default RouteAssign;
