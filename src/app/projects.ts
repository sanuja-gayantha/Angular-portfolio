import { TechStacks } from "./tech-stacks";

export interface Projects {
    projectID:number,
    projectName:string,
    imageUrl?:string,
    githubUrl:string,
    demoUrl?:string,
    desc1?:string,
    desc2?:string,
    techStack:Array<TechStacks>

}
