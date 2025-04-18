
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { User, LineChart, BarChart, Wallet, LogOut } from "lucide-react";
import { toast } from "sonner";

interface UserData {
  name: string;
  email: string;
}

const Dashboard = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      navigate("/login");
      return;
    }
    setUserData(JSON.parse(currentUser));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  if (!userData) return null;

  return (
    <div className="min-h-screen bg-accent/50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <User className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Welcome, {userData.name}</h1>
              <p className="text-gray-600">{userData.email}</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Wallet className="h-5 w-5 text-primary" />
                Portfolio Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$50,000</p>
              <p className="text-green-600 text-sm">+5.2% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <LineChart className="h-5 w-5 text-primary" />
                Investment Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12.5%</p>
              <p className="text-green-600 text-sm">Above target</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart className="h-5 w-5 text-primary" />
                Risk Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">7/10</p>
              <p className="text-blue-600 text-sm">Moderate</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Portfolio rebalancing completed",
                "Dividend payment received",
                "Investment strategy updated",
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-accent/30 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <p>{activity}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
