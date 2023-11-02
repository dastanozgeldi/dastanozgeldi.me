import { ProjectList } from "@/components/project-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Metadata } from "next";
import data from "./data.json";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of some serious projects I've worked on.",
};

export default function Projects() {
  const { orders, hackathons } = data;

  return (
    <section>
      <div className="flex items-center justify-center">
        <Tabs defaultValue="orders" className="w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">Projects</h1>
            <TabsList>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
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
