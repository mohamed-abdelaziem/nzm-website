import Link from "next/link";


export default function Footer() {
  return (
   <>
   <footer className="w-full rounded-t-[1.5rem] mt-20 bg-surface-container-low">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-screen-2xl mx-auto  text-sm leading-relaxed">
    <div className="md:col-span-1">
      <span className="text-xl font-black text-[#e5e2e1] mb-4 block">NZM</span>
      <p className="text-[#e5e2e1]/60 mb-6">
        Pioneering the intersection of technology and human narrative. We
        build digital legacies.
      </p>
      <div className="flex gap-4">
        <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-sm"><i className="fa-solid fa-share-nodes"></i></span>
        </div>
      </div>
    </div>
    <div>
      <h5 className="text-[#ffabee] font-bold mb-6 uppercase tracking-widest text-xs">
        Navigation
      </h5>
      <ul className="space-y-4">
        <li>
          <Link className="text-[#e5e2e1]/60 hover:text-[#e5e2e1] hover:translate-x-1 transition-all duration-200 block" href={'/home'}>Home</Link>
        </li>
        <li>
          <Link className="text-[#e5e2e1]/60 hover:text-[#e5e2e1] hover:translate-x-1 transition-all duration-200 block" href={'/services'}>Services</Link>
        </li>
        <li>
          <Link className="text-[#e5e2e1]/60 hover:text-[#e5e2e1] hover:translate-x-1 transition-all duration-200 block" href={'/about'}>About</Link>
        </li>
        <li>
          <Link className="text-[#e5e2e1]/60 hover:text-[#e5e2e1] hover:translate-x-1 transition-all duration-200 block" href={'/portfolio'}>Portfolio</Link>
        </li>
      </ul>
    </div>
    <div>
      <h5 className="text-[#ffabee] font-bold mb-6 uppercase tracking-widest text-xs">
        Socials
      </h5>
      <ul className="space-y-4">
        <li>
          <a className="text-[#e5e2e1]/60 hover:text-[#e5e2e1] hover:translate-x-1 transition-all duration-200 block" href="#">Instagram</a>
        </li>
        <li>
          <a className="text-[#e5e2e1]/60 hover:text-[#e5e2e1] hover:translate-x-1 transition-all duration-200 block" href="#">LinkedIn</a>
        </li>
        <li>
          <a className="text-[#e5e2e1]/60 hover:text-[#e5e2e1] hover:translate-x-1 transition-all duration-200 block" href="#">Twitter</a>
        </li>
      </ul>
    </div>
    <div>
      <h5 className="text-[#ffabee] font-bold mb-6 uppercase tracking-widest text-xs">
        Legal
      </h5>
      <ul className="space-y-4">
        <li>
          <a className="text-[#e5e2e1]/60 hover:text-[#e5e2e1] hover:translate-x-1 transition-all duration-200 block" href="#">Privacy Policy</a>
        </li>
        <li>
          <a className="text-[#e5e2e1]/60 hover:text-[#e5e2e1] hover:translate-x-1 transition-all duration-200 block" href="#">Terms of Service</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="border-t border-outline-variant/10 py-8 px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 text-[#e5e2e1]/40 text-xs">
    <span>© 2026 <span className="font-bold text-secondary-container">NZM</span> Digital Architects. All rights reserved.</span>
  </div>
</footer>

   
   </>
  )
}
