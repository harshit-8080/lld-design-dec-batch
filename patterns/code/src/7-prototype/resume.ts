interface ITemplate<T> {
    clone(): T
}


export class ResumeTemplate implements ITemplate<ResumeTemplate>{
  constructor(
    private templateName: string,
    private skills: string[],
    private experience: string[],
    private education: string[]
  ) {}

  public addSkill(skill: string): void {
    this.skills.push(skill);
  }

  public addExperience(experience: string): void {
    this.experience.push(experience);
  }

  public addEducation(education: string): void {
    this.education.push(education);
  }
  // add methods to remove skills, experience, education
 public  clone(): ResumeTemplate {

 }
}



