import { ProjectList } from "@/components/project-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import data from "./data.json";

export default function Projects() {
  const { orders, hackathons } = data;

  return (
    <section>
      <div className="flex items-center justify-center">
        <Tabs defaultValue="orders" className="w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-lg tracking-tighter font-mono">projects</h1>
            <TabsList>
              <TabsTrigger className="font-mono tracking-tighter" value="orders">orders</TabsTrigger>
              <TabsTrigger className="font-mono tracking-tighter" value="hackathons">hackathons</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="orders">
            <ProjectList projects={orders} />
          </TabsContent>
          <TabsContent value="hackathons">
            <ProjectList projects={hackathons} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
