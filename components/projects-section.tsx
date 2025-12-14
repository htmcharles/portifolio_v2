"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const [expandedFolder, setExpandedFolder] = useState<number | null>(null)

  const projectFolders = [
    {
      name: "Frontend",
      count: 4,
      color: "from-blue-400 to-blue-600",
      projects: [
        {
          title: "React Dashboard",
          description: "Modern admin dashboard with React and TypeScript",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
          technologies: ["React", "TypeScript", "Tailwind"],
          liveUrl: "#",
          githubUrl: "#"
        },
        {
          title: "E-Commerce UI",
          description: "Responsive shopping interface with modern design",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
          technologies: ["Next.js", "CSS3", "Framer Motion"],
          liveUrl: "#",
          githubUrl: "#"
        },
        {
          title: "Portfolio Website",
          description: "Personal portfolio with smooth animations",
          image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
          technologies: ["Vue.js", "SCSS", "Three.js"],
          liveUrl: "#",
          githubUrl: "#"
        },
        {
          title: "Landing Page",
          description: "High-converting landing page design",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
          technologies: ["HTML5", "CSS3", "JavaScript"],
          liveUrl: "#",
          githubUrl: "#"
        }
      ]
    },
    {
      name: "Backend",
      count: 3,
      color: "from-green-400 to-green-600",
      projects: [
        {
          title: "REST API Server",
          description: "Scalable Node.js API with authentication",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
          technologies: ["Node.js", "Express", "MongoDB"],
          liveUrl: "#",
          githubUrl: "#"
        },
        {
          title: "GraphQL Service",
          description: "Modern GraphQL API with real-time subscriptions",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
          technologies: ["GraphQL", "Apollo", "PostgreSQL"],
          liveUrl: "#",
          githubUrl: "#"
        },
        {
          title: "Microservices",
          description: "Distributed system with Docker containers",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
          technologies: ["Docker", "Kubernetes", "Redis"],
          liveUrl: "#",
          githubUrl: "#"
        }
      ]
    },
    {
      name: "Full-Stack",
      count: 5,
      color: "from-purple-400 to-purple-600",
      projects: [
        {
          title: "Social Media App",
          description: "Complete social platform with real-time features",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
          technologies: ["React", "Node.js", "Socket.io"],
          liveUrl: "#",
          githubUrl: "#"
        },
        {
          title: "E-Learning Platform",
          description: "Online education system with video streaming",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
          technologies: ["Next.js", "Prisma", "AWS"],
          liveUrl: "#",
          githubUrl: "#"
        },
        {
          title: "Task Manager",
          description: "Collaborative project management tool",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
          technologies: ["Vue.js", "Python", "FastAPI"],
          liveUrl: "#",
          githubUrl: "#"
        },
        {
          title: "Chat Application",
          description: "Real-time messaging with file sharing",
          image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
          technologies: ["React", "Firebase", "WebRTC"],
          liveUrl: "#",
          githubUrl: "#"
        },
        {
          title: "Booking System",
          description: "Hotel reservation platform with payments",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
          technologies: ["Angular", "NestJS", "Stripe"],
          liveUrl: "#",
          githubUrl: "#"
        }
      ]
    },
    {
      name: "Mobile",
      count: 3,
      color: "from-orange-400 to-orange-600",
      projects: [
        {
          title: "Fitne        
 .title}oject     {pr                         
  ate">runcray-700 t-gum textfont-medixs ="text-Namelassspan c      <                     
   iv>      </d                     
    />                        r"
       ect-covel h-full obj-fulssName="w  cla                             .title}
   projectalt={                                  e} 
ect.imag   src={proj                        
             <img                      
     n mr-2">ddeow-hied overfl-6 h-6 roundsName="wlas     <div c                    ">
     l px-2er h-fulx items-centfleassName="   <div cl                          >
                   
             }}            x
         dejectInroex: 10 - p   zInd                         
  }deg)`,ex * 2 - 2Indproject${e(2}px) rotat + 1) * 1rojectIndex(peY(-${lat: `transform trans                       
      ={{le     sty                    -105"
   ver:scalehotion-300 ral duition-al transnsformw-sm traed shadondwhite rou h-8 bg--fullssName="w  cla                   x}
       ndeey={projectI         k                  iv 
        <d               
    ex) => (jectIndro, projectp((p0, 3).maice(rojects.slfolder.p       {               -10">
  pace-y-1 zght-2 s-2 ri4 leftute -top-="absolssNameiv cla      <d              && (
  index === der xpandedFol      {e            ed) */}
  and(when expiew s PrevDocument   {/*           
                           "></div>
nded-t-lgwhite/20 rou h-8 bg-0 w-full left--0op"absolute tassName=   <div cl                ight */}
 ighl* Folder H{/                >
    ow-hidden`}ative overflow-lg relhadded-lg soun.color} rr ${folderdient-to-b-32 bg-gra`w-full hclassName={      <div          ody */}
   er Bin Fold* Ma   {/                         

        /div>"><ed-t-lg00 round-4 to-gray-300om-grayr frgradient-to-6 bg--16 h-4 wtop-2 left-olute -ame="abs<div classN             */}
     r Tab olde F {/*         >
        lative"ssName="rev cla       <di}
         e */lder BasFo       {/*     >
                  
 lder(index)}ggleFo> toick={() =Cl  on           "
   :scale-105eron-300 hovtiion-all duransitransform trapointer trsor-ame="cuclassN          
             <div }
       er */old   {/* F          tive">
 ame="rela classN={index}<div key        => (
     x)deolder, in.map((fojectFolders{pr        ">
  gap-8-4 ols lg:grid-c-cols-2rid1 md:gls-cogrid-ame="grid assN<div cl  
      
</div>       /p>
      <egory
     cts by cate projers to explorolde on f    Click
        auto"> mx-2xlmax-w--lg mt-4 ext0 txt-gray-60"teassName=   <p cl    /h2>
    <       
  ategoriesject Cro  P          nce">
t-balad texxeela leading-r-900text-gray-light 5xl font:text-t-3xl mdssName="tex   <h2 cla/p>
       rtfolio<Pose">ppercaB] mb-4 uxt-[#7A3B3-widest te trackingemiboldt-sm font-se="texamssN<p cla      
     mb-16">xt-center"tev className=  <di     ">
 x-autoax-w-6xl m pr-40 mpl-40w-full e="sNamiv clas  <d
    :py-24">-16 md100 pyay-o-gr trom-gray-50-br fgradient-to bg-"w-fullme=Nats" class"projection id= <secn (
   tur
  }

  re index)x ? null :er === indeFoldr(expandedFolde setExpanded
   r) => {dex: numbeer = (in toggleFold
  const
}
  ]    ]
    }
          Url: "#"
hubgit          ",
veUrl: "#      li   on"],
 ocati "Core LOS",t", "ies: ["Swifhnologi      tec",
    =800&q=crop&w=234fitmat&forauto=rb-4.0.3&b?ixlib=32b4f01-42fe650460852484.com/photo-1plashges.unsps://image: "httima       ,
   on"applicatirecast her foul weatifion: "Beautpt     descri   p",
  ather Ap "Wetitle:        {
     
             },"
Url: "#github       #",
   iveUrl: "       l
   "],gle Maps"Gooart", ", "D ["Flutterechnologies:      t",
    q=80op&w=2340&rmat&fit=cr0.3&auto=foixlib=rb-4.8f40a0ca4b?9624946-b256529to-1/phosh.comes.unsplaps://imagge: "htt       ima
   ",ery app delivordering andnt uraRestaription: "       descery",
   ood Delivtitle: "F
                 { },
 #"
       thubUrl: "     gi,
     Url: "#"    live],
      "Firebase"edux", "R Native", s: ["Reacthnologietec
          ,340&q=80"fit=crop&w=2at&=form-4.0.3&autod8b?ixlib=rb2f99b23454-1cb-157101961oto/phsh.com.unsplaps://imagesmage: "htt i        
 h app",ss and healtform fitnes-platCrosption: "escri         d
 acker", Trss