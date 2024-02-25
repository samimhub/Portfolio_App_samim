import {SKILLS} from "@/Constant"
import SkillItems from "./SkillItems"
function Skills() {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28
    lg:py-20 xl:flex-row">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">skills</div>
       <ul className="mt-10 grid gap-20 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
        {
        SKILLS.map((skill)=>(
          <SkillItems
          key={skill.title}
          icon={skill.icon}
          title={skill.title}
          description={skill.description}
          />
        ))
        }
       </ul>
    </section>
    
  )
}

export default Skills
