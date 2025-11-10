export const HelloWorldPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-foreground">
          Hello World!
        </h1>
        <p className="text-lg text-muted-foreground">
          Welcome to your React + Vite application
        </p>
        <div className="text-sm text-muted-foreground">
          Built with React 19, TypeScript, Tailwind CSS, and Shadcn UI
        </div>
      </div>
    </div>
  );
};