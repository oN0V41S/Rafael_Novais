import Navigation from "@/components/layout/aside/navigation";
import TopSkill from "@/components/layout/aside/topSkill";
import Contact from "@/components/layout/aside/contact";

export default function LayoutAside() {
    return (
      <aside className='aside'>
        <Navigation/>
        <TopSkill/>
        <Contact/>
      </aside>
    );
  }