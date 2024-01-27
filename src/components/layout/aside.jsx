import Navigation from "@/components/layout/components/navigation";
import TopSkill from "@/components/layout/components/topSkill";
import About from "@/components/layout/components/about";

export default function LayoutAside() {
    return (
      <aside className='aside'>
        <Navigation/>
        <TopSkill/>
        <About/>
      </aside>
    );
  }