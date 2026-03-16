import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function AccordionSection() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto text-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        More About Me
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-4">

        <AccordionItem value="item-1" className="border-white/20">
          <AccordionTrigger className="text-lg">
            What technologies do I use?
          </AccordionTrigger>

          <AccordionContent className="text-blue-200/80">
            I mainly work with React, Python, Git, and modern web development tools.
            I'm constantly learning new technologies to improve my development skills.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-white/20">
          <AccordionTrigger className="text-lg">
            What am I currently learning?
          </AccordionTrigger>

          <AccordionContent className="text-blue-200/80">
            I'm currently learning React, advanced Python, software development practices,
            and improving my problem-solving abilities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-white/20">
          <AccordionTrigger className="text-lg">
            What are my future goals?
          </AccordionTrigger>

          <AccordionContent className="text-blue-200/80">
            My goal is to become a skilled software developer and build meaningful
            projects that solve real-world problems.
          </AccordionContent>
        </AccordionItem>

      </Accordion>

    </section>
  );
}