const techIcons = [
  { name: "C", url: "/logo/c.svg" },
  { name: "Python", url: "/logo/python.svg" },
  { name: "Java", url: "/logo/java.svg" },
  { name: "JavaScript", url: "/logo/javascript.svg" },
  { name: "TypeScript", url: "/logo/typescript.png" },
  { name: "SQL", url: "/logo/sql.svg" },
  { name: "MongoDB", url: "/logo/mongodb.png" },
  { name: "React", url: "/logo/react.svg" },
  { name: "Express", url: "/logo/express.svg" },
  { name: "Node.js", url: "/logo/node-js.svg" },
  { name: "Socket.IO", url: "/logo/socket-io.svg" },
  { name: "Leaflet", url: "/logo/leaflet.svg" },
  { name: "Spring Boot", url: "/logo/spring-boot.svg" },
  { name: "Playwright", url: "/logo/playwright.svg" },
  { name: "Selenium", url: "/logo/selenium.svg" },
  { name: "TestNG", url: "/logo/testng.png" },
  { name: "Linux", url: "/logo/linux.svg" },
  { name: "AWS", url: "/logo/aws.png" },
  { name: "Azure", url: "/logo/azure.svg" },
  { name: "Docker", url: "/logo/docker.svg" },
  { name: "JFROG Artifactory", url: "/logo/jfrog-artifactory.png" },
  { name: "GitHub Actions", url: "/logo/github-actions.png" },
  { name: "Jira", url: "/logo/jira.svg" },
  { name: "Next.js", url: "/logo/next-js.svg" },
  { name: "Redux", url: "/logo/redux.svg" },
  { name: "Jupyter Notebook", url: "/logo/jupyter-notebook.svg" },
  {
    name: "Assembly 8086",
    url: "/logo/assembly-8086.png",
    tooltip: "Assembly 8086 (Intel 8086 Microprocessor)",
  },
  { name: "Tailwind CSS", url: "/logo/tailwindcss.png" },
  { name: "Heroku", url: "/logo/heroku.svg" },
  { name: "Onrender", url: "/logo/render.png" },
  { name: "Vercel", url: "/logo/vercel.svg" },
  { name: "FastAPI", url: "/logo/fastapi.png" },
  { name: "TensorFlow", url: "/logo/tensorflow.svg" },
  { name: "PyTorch", url: "/logo/pytorch.svg" },
  { name: "Scikit-learn", url: "/logo/scikit-learn.png" },
  { name: "Keras", url: "/logo/keras.svg" },
  { name: "Pandas", url: "/logo/pandas.svg" },
  { name: "NumPy", url: "/logo/numpy.svg" },
];

export function TechStackIcons() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-16">
      {techIcons.map((icon, idx) => (
        <img
          key={idx}
          src={icon.url}
          alt={icon.name}
          title={icon.tooltip || icon.name}
          className="h-10 w-10 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          loading="lazy"
        />
      ))}
    </div>
  );
}
