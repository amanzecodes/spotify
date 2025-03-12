import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const isMobile = false;
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* left Sidebar */}
      <ResizablePanelGroup direction="horizontal" className="flex-1 overflow-hidden p-2">
        <ResizablePanel
          defaultSize={20}
          minSize={isMobile ? 0 : 10}
          maxSize={30}
        >
          Left Sidebar
        </ResizablePanel>
    <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />
        {/* main content */}
        <ResizablePanel
          defaultSize={isMobile ? 80 : 60}
          minSize={50}
          maxSize={90}
        >
          <Outlet />
        </ResizablePanel>

        <ResizableHandle className="w-2 bg-black rounded-lg transition-colors" />

        {/* right side bar */}
        <ResizablePanel
          defaultSize={20}
          minSize={0}
          maxSize={25}
          collapsedSize={0}
        >
          friends activity
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default MainLayout;
