import { Icons } from "@/components/layout/icons";
import React from "react";

const GamesPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4">
        <Icons.alertTriangle className="h-8 w-8 text-muted-foreground" />
        <h2 className="text-muted-foreground">Coming Soon</h2>
      </div>
    </div>
  );
};

export default GamesPage;
