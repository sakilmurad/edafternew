import React from 'react'
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const HandleSubmit = (e) =>{
  e.preventDefault();
}

function Mii() {
  return (
    <Layout
    title="Make In India (MII) Certificate Generator for GeM (Government e-Marketplace)"
    description="Generate Make In India (MII) Certificate to participate in class 1 and class 2 Local Supplier on GeM.">
    <main className='container margin-vert--lg center'>
      <h1>Make In India (MII) Certificate Generator</h1>
      <p><strong>Generate Make In India (MII) Certificate</strong> to participate as class 1 and class 2 local supplier in GeM Bids.</p>
      
      <form onSubmit={HandleSubmit}>
        <p className='center'>Just enter the few details and click on Generate button to get your <strong>Make In India (MII)</strong> Certificate</p>
  <div className="form_div">
    <div className="form_field">
      <label for="name">Company Name</label>
      <input type="text" id="name" required />
    </div>
    <div className="form_field">
      <label for="bid">GeM Bid/RA Number</label>
      <input type="text" id="bid" required />
    </div>
    <div className="form_field">
      <label for="address">Address</label>
      <input type="text" id="address" required/>
    </div>
    <div className="form_field">
      <label for="percentage">Local Content Percentage</label>
      <input type="number" id="percentage" />
    </div>
    <div className="form_field">
      <label for="itemName">Item Name</label>
      <input type="text" id="itemName" />
    </div>
    <p>By Clicking generate button you are agree to our <Link href="/terms-and-conditions">terms and conditions</Link></p>
    <button>GENERATE</button>
  </div>
</form>
    </main>
  </Layout>
  )
}

export default Mii