import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { authService } from '@/services/auth';
import { clearAuthData, getStoredUser } from '@/lib/api';

export const HelloWorldPage = () => {
  const navigate = useNavigate();
  const user = getStoredUser();

  const logoutMutation = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      clearAuthData();
      navigate('/login');
    },
    onError: (error) => {
      console.error('Logout error:', error);
      // Even if logout fails on server, clear local data
      clearAuthData();
      navigate('/login');
    }
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-foreground">
            Hello World!
          </CardTitle>
          <CardDescription className="text-lg">
            Welcome to your React + Vite application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {user && (
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Logged in as:
              </p>
              <p className="font-medium">{user.email}</p>
              {user.name && (
                <p className="text-sm text-muted-foreground">{user.name}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Role: {user.role}
              </p>
            </div>
          )}
          
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-4">
              Built with React 19, TypeScript, Tailwind CSS, and Shadcn UI
            </div>
            <Button 
              onClick={handleLogout}
              variant="outline"
              disabled={logoutMutation.isPending}
            >
              {logoutMutation.isPending ? 'Signing out...' : 'Sign out'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};