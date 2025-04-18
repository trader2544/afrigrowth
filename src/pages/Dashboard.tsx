
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  LineChart, 
  BarChart, 
  Wallet, 
  LogOut, 
  PiggyBank,
  ArrowUpRight,
  ArrowDownRight,
  Clock
} from "lucide-react";
import { toast } from "sonner";

interface UserData {
  name: string;
  email: string;
}

interface FinancialData {
  portfolioValue: number;
  monthlyGrowth: number;
  savings: number;
  lastDeposit: number;
  lastWithdrawal: number;
  riskScore: number;
}

const Dashboard = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [financialData, setFinancialData] = useState<FinancialData>({
    portfolioValue: 0,
    monthlyGrowth: 0,
    savings: 0,
    lastDeposit: 0,
    lastWithdrawal: 0,
    riskScore: 5
  });
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

  const handleDeposit = () => {
    setFinancialData(prev => ({
      ...prev,
      portfolioValue: prev.portfolioValue + 100,
      lastDeposit: 100
    }));
    toast.success("Deposited $100 successfully");
  };

  const handleWithdraw = () => {
    if (financialData.portfolioValue >= 50) {
      setFinancialData(prev => ({
        ...prev,
        portfolioValue: prev.portfolioValue - 50,
        lastWithdrawal: 50
      }));
      toast.success("Withdrew $50 successfully");
    } else {
      toast.error("Insufficient funds");
    }
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
          <div className="flex gap-4">
            <Button variant="secondary" onClick={handleDeposit}>
              <ArrowUpRight className="h-4 w-4 mr-2" /> Deposit $100
            </Button>
            <Button variant="secondary" onClick={handleWithdraw}>
              <ArrowDownRight className="h-4 w-4 mr-2" /> Withdraw $50
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </Button>
          </div>
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
              <p className="text-3xl font-bold">${financialData.portfolioValue.toFixed(2)}</p>
              <p className="text-gray-600 text-sm">Total Balance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <PiggyBank className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {financialData.lastDeposit > 0 && (
                  <p className="text-green-600">+${financialData.lastDeposit} Deposited</p>
                )}
                {financialData.lastWithdrawal > 0 && (
                  <p className="text-red-600">-${financialData.lastWithdrawal} Withdrawn</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart className="h-5 w-5 text-primary" />
                Risk Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{financialData.riskScore}/10</p>
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
                { text: "Account created successfully", time: "Just now", icon: User },
                { text: "Risk assessment completed", time: "2 minutes ago", icon: BarChart },
                { text: "Portfolio tracking activated", time: "5 minutes ago", icon: LineChart },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-accent/30 rounded-lg">
                  <activity.icon className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p>{activity.text}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {activity.time}
                    </p>
                  </div>
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
