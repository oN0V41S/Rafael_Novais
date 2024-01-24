import Navigation from "@/components/layout/navigation";
import TopSkill from "@/components/layout/topSkill";
import About from "@/components/layout/about";

export default function Aside() {
    return (
      <aside className='aside'>
        <Navigation/>
        <TopSkill/>
        <About/>
      </aside>
    );
  }