import {SKILLS} from "@/Constant"
import SkillItems from "./SkillItems"
import {motion} from "framer-motion"

const fadeUp = (delay:any) => ({

  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: delay,
    },
  },
});

function Skills() {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28
    lg:py-20 xl:flex-row">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">skills</div>
       <motion.ul 
        variants={fadeUp(0.6)}
        initial="initial"
        animate="animate"
       className="mt-10 grid gap-20 md:grid-cols-2 lg:grid-cols-3 md:gap-5 ">
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
       </motion.ul>
    </section>
    
  )
}

export default Skills
