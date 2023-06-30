import Link from "next/link";
import './about.css'
export default function Layout({ children }){
  return (
    <div>
        <ul className="about-menu">
            <li>
                <h4>About Navbar</h4>
            </li>
        <li>
            <Link href="/about">About Main</Link>
        </li>
        <li>
            <Link href="/about/aboutstudent">Student About </Link>
        </li>
        <li>
            <Link href="/about/aboutteacher">Teacher About </Link>
        </li>
        </ul>
        {children}
    </div>
)
}
