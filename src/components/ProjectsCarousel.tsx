import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and modern UI design.",
  },
  {
    title: "Python Automation",
    description: "Scripts that automate tasks and improve workflow.",
  },
  {
    title: "React Projects",
    description: "Interactive web apps built using React.",
  },
  {
    title: "Learning Experiments",
    description: "Small projects made while learning new technologies.",
  },
];

export default function ProjectsCarousel() {
  return (
    <section className="py-24 text-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="max-w-4xl mx-auto px-4">

        <Carousel>

          <CarouselContent>

            {projects.map((project, index) => (
              <CarouselItem key={index}>

                <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">

                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-blue-200/80">
                    {project.description}
                  </p>

                </div>

              </CarouselItem>
            ))}

          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />

        </Carousel>

      </div>

    </section>
  );
}