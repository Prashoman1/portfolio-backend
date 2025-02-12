import { ObjectId } from "mongoose"


export type TProject = {
    user: ObjectId,
    title: string,
    description: string,
    techStack: ObjectId[
    ],
    live_url?: string,
    frontend_repo_url?: string,
    backend_repo_url?: string,
    images: string[], 
    serial: number 
}


// "user_id": ObjectId, 
//   "title": "Portfolio Website",
//   "description": "A personal portfolio built using Next.js and Tailwind CSS.",
//   "tech_stack": ["React", "Next.js", "Node.js", "MongoDB"],
//   "live_url": "https://portfolio.example.com",
//   "repo_url": "https://github.com/johndoe/portfolio",
//   "images": ["image1_url", "image2_url"],
//   "createdAt": ISODate,
//   "updatedAt": ISODate