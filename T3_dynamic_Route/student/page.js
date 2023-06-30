import Link from "next/link";
function Student () {
    return (
      <div>
        
         <h1>Student List</h1>
            <ul>
                <li> 
                    <Link href="/student/anil" >Anil</Link>
                </li>
                <li> 
                <Link href="/student/sam" >Sam</Link>
                </li>
                <li> 
                <Link href="/student/peter" >Peter</Link>
                </li>
                <li> 
                <Link href="/student/bruce" >Burce</Link>
                </li>
            </ul>
          </div>
    )
  }
  
  export default Student