import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Loader from "../../components/loader";
import OemAuthTemplate from "../../components/ToolsTemplate/oem-authorization";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import DownloadIcon from "/img/tools/download.svg"
import RepeatIcon from "/img/tools/arrow-repeat.svg"

function OEMAuth() {
  const [isLoading, setLoading] = useState(false);
  const [companyName, setcompanyName] = useState("XYZ Pvt. Ltd.");
  const [resellerName, setresellerName] = useState("Reseller Pvt. Ltd.");
  const [brand, setbrand] = useState("My Brand Name");
  const [bidNo, setbidNo] = useState("GEM/2023/B/XXXXXX");
  const [pdfGenerated, setpdfGenerated] = useState(false);

  const handleRegenerate = () => {
    setpdfGenerated(false);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    setcompanyName(data.get("name"));
    setresellerName(data.get("Rname"));
    setbrand(data.get("brand"));
    setbidNo(data.get("bid"));
    setpdfGenerated(true);
    setLoading(false);
  };

  return (
    <Layout
      title="OEM Authorization Certificate Generator for GeM (Government e-Marketplace)"
      description="Generate Reseller Authority Letter (OEM Authorization letter) to authorized your Resellers on GeM (Government e-Marketplace)."
    >
      <main className="container margin-vert--lg">
        <div className="center">
          <h1>OEM Authorization Certificate Generator</h1>
          <p>
            <strong>Generate Reseller Authorization letter (also known as OEM Authorization Letter)</strong> to authorize your reseller or distributor to quote in the GeM Bid.
          </p>
          <hr />
          {pdfGenerated ? (
            <>
              <h3 className="margin">
          OEM Authorization Certificate
        </h3>
        <p>Your OEM Authorization Certificate is generated. You can download it or click on re-generate button to Re-generate a new one.</p>
        <PDFDownloadLink document={<OemAuthTemplate  companyName={companyName} resellerName={resellerName} brand={brand} bidNo={bidNo}/>} fileName="OEM Authorization Letter.pdf">
      {({ blob, url, loading, error }) =>
        loading ? <Loader/> :  <button
        className="button button--primary button--lg">
          <DownloadIcon/> {" "}
        Download
      </button>
      }
    </PDFDownloadLink>
        <div className="margin">
          <button
            className="button button--secondary button--lg"
            onClick={handleRegenerate}
          >
            <RepeatIcon/> {" "}
            Re-generate
          </button>
        </div>
        <PDFViewer width={400} height={500} showToolbar={true} className="margin">
        <OemAuthTemplate  companyName={companyName} resellerName={resellerName} brand={brand} bidNo={bidNo}/>
        </PDFViewer>
            </>
          ) : (
            <form onSubmit={HandleSubmit}>
              <p className="center">
                Just enter the few details and click on Generate button to get
                your <strong>Reseller Authority Letter</strong>
              </p>
              <div className="form_div">
                <div className="form_field">
                  <label htmlFor="name">Your Company Name</label>
                  <input type="text" id="name" name="name" required/>
                </div>
                <div className="form_field">
                  <label htmlFor="Rname">Reseller Name</label>
                  <input type="text" id="Rname" name="Rname" required/>
                </div>
                <div className="form_field">
                  <label htmlFor="brand">Brand Name</label>
                  <input type="text" id="brand" name="brand" required/>
                </div>
                <div className="form_field">
                  <label htmlFor="bid">GeM Bid/RA Number</label>
                  <input type="text" id="bid" name="bid" required/>
                </div>
                <p>
                  By Clicking generate button you are agree to our{" "}
                  <Link href="/terms-and-conditions">terms and conditions</Link>
                </p>
                <div className="center">
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <button className="button button--primary button--lg">
                      GENERATE
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
        <h3 className="center">FAQ</h3>
        <details>
          <summary>What is Reseller Authority Letter?</summary>
          <p className="faq__content">
            A Reseller Authority Letter is a letter for authorizing a firm/person to represent your brand or product and perform sales and collect payment.
          </p>
        </details>
        <details>
          <summary>Why Reseller Authority Letter in GeM?</summary>
          <p className="faq__content">
            To determine the genuine quotation on GeM Platform, GeM requires OEM Authorization Certificate from a seller while quoting in a bid. 
          </p>
        </details>
        <details>
          <summary>What OEM Authorization Certificate?</summary>
          <p className="faq__content">
            An OEM (Original Equipment Manufacturer) Certificate is a letter issued by OEM to a reseller in which OEM authorize a reseller to quote and supply his products against the said institution.
          </p>
        </details>
      </main>
    </Layout>
  );
}

export default OEMAuth;
