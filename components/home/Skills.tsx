import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/layout/icons";
import { frontEndTechnologies as frontEnd, backEndTechnologies as backEnd, cardFooter } from "@/lib/skills";

const Skills = ({}) => {
  return (
    <section className="flex items-center justify-center">
      <Tabs defaultValue="frontend" className="w-full sm:w-[60%]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
        </TabsList>
        <TabsContent value="frontend">
          <Card>
            <CardHeader>
              <CardTitle>Frontend</CardTitle>
              <CardDescription>
                {`List of frontend technologies & libraries I've used.`}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 sm:pt-0">
              {/* map frontend techonologies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {frontEnd.map((element, i) => {
                  return (
                    <div
                      key={i}
                      className="flex w-full items-center justify-between border rounded-lg p-2 text-sm sm:text-base"
                    >
                      <div className="flex items-center">
                        {element.icon}
                        <span className="text-primary mx-2">
                          {element.name}
                        </span>
                      </div>
                      {element.isUsed && (
                        <Icons.check className="h-5 w-5 text-accent-foreground mr-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
            <CardFooter>
              {cardFooter}
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="backend">
          <Card>
            <CardHeader>
              <CardTitle>Backend</CardTitle>
              <CardDescription>
                {`List of backend technologies & libraries I've used.`}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 sm:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {backEnd.map((element, i) => {
                  return (
                    <div
                      key={i}
                      className="flex w-full items-center justify-between border rounded-lg p-2 text-sm sm:text-base"
                    >
                      <div className="flex items-center">
                        {element.icon}
                        <span className="text-primary mx-2">
                          {element.name}
                        </span>
                      </div>
                      {element.isUsed && (
                        <Icons.check className="h-5 w-5 text-accent-foreground mr-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
            <CardFooter>
              {cardFooter}
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Skills;
