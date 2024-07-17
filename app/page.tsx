import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { OrganizationSwitcher } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open</Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-gray-100 px-0">
          <nav className="flex flex-col pt-6">
            <div className="flex h-12 items-center border-b px-4">
              <OrganizationSwitcher afterSelectOrganizationUrl="/" />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </main>
  );
}
