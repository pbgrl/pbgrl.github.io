// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-team",
          title: "team",
          description: "lab members and collaborators",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "research articles and datasets",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "current and past research projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses taught and to be taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "cv-surya-l-shrestha",
          title: 'Surya L Shrestha',
          description: "Expertise includes conventional and molecular plant breeding, stress physiology, disease identification and screening, and microbial analyses.",
          section: "Cv",handler: () => {
              window.location.href = "/cv/slshrestha/";
            },},{id: "news-dr-surya-l-shrestha-joins-tennessee-tech-university",
          title: 'Dr. Surya L Shrestha joins Tennessee Tech University',
          description: "",
          section: "News",},{id: "news-our-new-publication-in-gcb-bioenergy-qtl-identification-for-bioenergy-traits-in-switchgrass",
          title: 'Our new publication in GCB Bioenergy: QTL identification for bioenergy traits in switchgrass...',
          description: "",
          section: "News",},{id: "projects-plant-breeding-and-genetics",
          title: 'Plant breeding and genetics',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-carrot-breeding-for-anthocyanin-content",
          title: 'Carrot breeding for anthocyanin content',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-switchgrass-breeding-for-biofuel-production-and-forage-quality",
          title: 'Switchgrass breeding for biofuel production and forage quality',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-soybean-breeding-for-yield-and-disease-resistance",
          title: 'Soybean breeding for yield and disease resistance',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-wheat-breeding-for-drought-tolerance",
          title: 'Wheat breeding for drought tolerance',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-blemish-diseases-of-potato-tubers",
          title: 'Blemish diseases of potato tubers',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%73%68%72%65%73%74%68%61@%74%6E%74%65%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/suryashrestha# your LinkedIn user name", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3044-2286", "_blank");
        },
      },{
        id: 'social-publons',
        title: 'Publons',
        section: 'Socials',
        handler: () => {
          window.open("https://publons.com/a/NXC-2034-2025/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qVoeAloAAAAJ", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zotero.org/suryashrestha", "_blank");
        },
      },];
