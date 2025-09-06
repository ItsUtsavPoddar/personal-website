// download-logos.js
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const techIcons = [
  {
    name: "C",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "SQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Express",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Socket.IO",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  {
    name: "Leaflet",
    url: "https://raw.githubusercontent.com/Leaflet/Leaflet/6848d9911b1e7afdc75ed2532fd92c1b114620ed/src/images/logo.svg",
  },
  {
    name: "Spring Boot",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  { name: "Playwright", url: "https://playwright.dev/img/playwright-logo.svg" },
  {
    name: "Selenium",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  },
  {
    name: "TestNG",
    url: "https://avatars.githubusercontent.com/u/12528662?s=200&v=4",
  },
  {
    name: "Linux",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "AWS",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/330px-Amazon_Web_Services_Logo.svg.png",
  },
  {
    name: "Azure",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "Docker",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "JFROG Artifactory",
    url: "https://speedmedia2.jfrog.com/08612fe1-9391-4cf3-ac1a-6dd49c36b276/media.jfrog.com/wp-content/uploads/2017/12/20132914/Jfrog.png",
  },
  {
    name: "GitHub Actions",
    url: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  { name: "Jira", url: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
  {
    name: "Next.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Redux",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Jupyter Notebook",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  },
  {
    name: "Assembly 8086",
    url: "https://img.apponic.com/28/3/ca609bab1385855220fd15dff809b2f0.png",
  },
  {
    name: "Tailwind CSS",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "Heroku",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
  },
  {
    name: "Vercel",
    url: "https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-black.svg",
  },
  {
    name: "FastAPI",
    url: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
  },
  {
    name: "TensorFlow",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "PyTorch",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    name: "Scikit-learn",
    url: "https://avatars.githubusercontent.com/u/17349883?s=280&v=4",
  },
  {
    name: "Keras",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
  },
  {
    name: "Pandas",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "NumPy",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
];

const logoDir = path.join(__dirname, "public", "logo");
if (!fs.existsSync(logoDir)) fs.mkdirSync(logoDir, { recursive: true });

function getFileName(name, url) {
  const ext = path.extname(url.split("?")[0]) || ".svg";
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+$/, "") + ext
  );
}

function download(url, dest, cb) {
  const mod = url.startsWith("https") ? https : http;
  mod
    .get(url, (res) => {
      if (res.statusCode !== 200) {
        cb(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => file.close(cb));
    })
    .on("error", cb);
}

(async () => {
  for (const icon of techIcons) {
    const filename = getFileName(icon.name, icon.url);
    const dest = path.join(logoDir, filename);
    console.log(`Downloading ${icon.name} to ${dest}`);
    await new Promise((resolve, reject) => {
      download(icon.url, dest, (err) => {
        if (err) {
          console.error(`Error downloading ${icon.name}:`, err.message);
        }
        resolve();
      });
    });
  }
  console.log("All logos downloaded!");
})();
