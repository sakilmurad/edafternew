import React, {useState} from 'react'
import Link from '@docusaurus/Link'

function Feedback() {
    const [open, setOpen] = useState(false)
    const handleClick = () =>{
        setOpen(!open)
    }
  return (
    <div className='center margin-vert--md'>
        <h4>Was this helpful?</h4>
        <div>
            <button className='button button--success button--sm margin-horiz--sm' onClick={handleClick}>👍 Yes</button>
            <button className='button button--danger button--sm' onClick={handleClick}>👎 No</button>
        </div>
        {open?<p>Share your feed back on <a href="mailto:edafter2022@gmail.com">edafter2022@gmail.com</a> or <Link href='/contact'>contact us</Link></p>:null}
    </div>
  )
}

export default Feedback