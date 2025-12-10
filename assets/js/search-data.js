// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-miscellaneous",
          title: "Miscellaneous",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/miscellaneous/";
          },
        },{id: "nav-achievements",
          title: "Achievements",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Achievements/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "news-i-presented-my-paper-at-esweek-emsoft-2025-where-it-was-selected-as-a-best-paper-candidate",
          title: 'I presented my paper at ESWEEK (EMSOFT) 2025, where it was selected as...',
          description: "",
          section: "News",},{id: "news-our-paper-seeb-gpu-has-been-accepted-for-publication-at-sec-2025",
          title: 'Our paper “SEEB-GPU” has been accepted for publication at SEC 2025.',
          description: "",
          section: "News",},{id: "news-excited-to-announce-that-i-received-the-best-paper-runner-up-for-the-work-exploiting-ml-task-correlation-in-the-minimization-of-capital-expense-for-gpu-data-centers-at-ipccc-2025",
          title: 'Excited to announce that i received the Best-paper runner up for the work...',
          description: "",
          section: "News",},{id: "news-i-have-passed-my-candidacy-exam-and-am-officially-a-phd-candidate",
          title: 'I have passed my candidacy exam and am officially a PhD candidate.',
          description: "",
          section: "News",},{id: "projects-latency-controlled-and-cost-efficient-gpu-scheduling-for-ai-workloads",
          title: 'Latency-Controlled and Cost-Efficient GPU Scheduling for AI Workloads',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%62%72%61%6D%61%6E%69%79%61%6E.%34@%6F%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/srinivasans74", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/srinivasan-subramaniyan22", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-5848-5667", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=luGswuwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
