import Navigation from "@/components/layout/aside/navigation";
import TopSkill from "@/components/layout/aside/topSkill";
import About from "@/components/layout/aside/about";

export default function Aside() {
    return (
      <aside className='aside'>
        <Navigation/>
        <TopSkill/>
        <About/>
      </aside>
    );
  }