const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");
// test for deploy on github
const ProjectsData = [
  {
    name: "Harbour Landing Business Park",
    slug: slugify("Harbour Landing Business Park"),
    imgs: [
      "/projectss/Harbour Landing Business Park/1.webp",
      "/projectss/Harbour Landing Business Park/2.webp",
    ],
    industry: "Administrative",
    status: "Completed",
    description:"",
    awards:[]
  },
  {
    name: "Latitude 51 Airdrie",
    slug: slugify("Latitude 51 Airdrie"),
    imgs: [
      "/projectss/Latitude 51 Airdrie/1.webp",
      "/projectss/Latitude 51 Airdrie/2.webp",
    ],
    industry: "Residential - Multi Family",
    status: "Completed",
    description:"This Four-storey Hotel and Conference Centre was completed in 2019 with approximately 50 000 ft of modular floor space. These Modular Units were designed for function and to withstand the anticipated transport to the final location in Canada’s Arctic.",
    awards:[]
  },
  {
    name: "Mount Pleasant 8",
    slug: slugify("Mount Pleasant 8"),
    imgs: [
      "/projectss/Mount Pleasant 8/1.webp",
      "/projectss/Mount Pleasant 8/2.webp",
      "/projectss/Mount Pleasant 8/3.webp",
      "/projectss/Mount Pleasant 8/4.webp",
      "/projectss/Mount Pleasant 8/5.webp",
    ],
    industry: "Residential - Single Family",
    status: "Completed",
    description:"This Four-storey Hotel and Conference Centre was completed in 2019 with approximately 50 000 ft of modular floor space. These Modular Units were designed for function and to withstand the anticipated transport to the final location in Canada’s Arctic.",
    awards:[]
  },
{
    name: "Haysboro Community Centre",
    slug: slugify("Haysboro Community Centre"),
    imgs: ["/projectss/Haysboro Community Centre/1.webp"],
    industry: "Public and Municipality buildings",
    status: "Completed",
    description:"",
    awards:[]
  },
];

export default ProjectsData;
