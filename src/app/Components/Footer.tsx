import { CONTACT, CONTACT_LINK, FOOTER_LINKS ,SOCIALS} from "@/Constant"
import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
   <section className="max-container padding-container bg-green-90 bg-pattern bg-cover
   px-6 pt-20 py-14 text-white">
    <div className="flex flexBetween flex-col gap-10 md:flex-row ">
     <ul className="pb-7">
      {
        CONTACT.map((contact)=>(
         <ContactItem
         key={contact.key}
         icon={contact.icon}
         info={contact.info}
         link={contact.href}
         />
        ))
      }
     </ul>
      <ul>
        {
          FOOTER_LINKS.map((link)=>(
            <Link href={link.href} key={link.key} className="p-4 text-[15px] font-[500]
            hover:text-blue-500">
              {link.label}
            </Link>
          ))
        }
      </ul>
      <ul className=" regular-14 flex gap-5 text-gray-30">
        {
          SOCIALS.map((social)=>(
            <Link href={social.href} key={social.key} className="h-10 w-10 border-[0.1rem] border-gray-20
            flexCenter rounded-full hover:bg-blue-500 hover:border-blue-500 transition-all">
              <Image src={social.imgURL} alt={social.key} width={20} height={20} className="invert-[100]"/>
            </Link>
          ))
        }
      </ul>
    </div>
    <hr className="border-none outline-none h-[0.01rem] bg-gray-20 my-6"/>
    <div className="text-center">This Portfolio is made by Samim</div>
   </section>
  )
}

interface ContactItemProps {
  icon: string;
  info: string;
  link:string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, info,link }) => {
  return (
    <li className="flex items-center gap-3 py-2">
      <div>
      <Link href={link}>
          <Image src={icon} alt="contact" height={20} width={20} />
      </Link>
      </div>
      <p>{info}</p>
    </li>
  );
};
export default Footer
