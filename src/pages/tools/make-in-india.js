import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Loader from "../../components/loader";
import MiiTemplate from "../../components/ToolsTemplate/mii";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import DownloadIcon from "/img/tools/download.svg";
import RepeatIcon from "/img/tools/arrow-repeat.svg";
import Share from "../../components/Share";
import Feedback from "../../components/Feedback";
import Ads from "../../components/Ads";

function Mii() {
  const [isLoading, setLoading] = useState(false);
  const [companyName, setcompanyName] = useState("XYZ Pvt. Ltd.");
  const [percentage, setpercentage] = useState("100");
  const [bidNo, setbidNo] = useState("GEM/2023/B/XXXXXX");
  const [address, setaddress] = useState("My Road Name, New Delhi.");
  const [pdfGenerated, setpdfGenerated] = useState(false);

  const handleRegenerate = () => {
    setpdfGenerated(false);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    setcompanyName(data.get("name"));
    setbidNo(data.get("bid"));
    setaddress(data.get("address"));
    data.get("percentage") == ""
      ? "100"
      : setpercentage(data.get("percentage"));
    setpdfGenerated(true);
    setLoading(false);
  };

  useEffect(() => {
    try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    catch (e) {
      console.log(e)
    }
}, [])

  return (
    <Layout
      title="Make In India (MII) Certificate Generator for GeM (Government e-Marketplace)"
      description="Generate Make In India (MII) Certificate to participate in class 1 and class 2 Local Supplier on GeM."
    >
      <main className="container margin-vert--lg">
        <div className="center">
          <h1>Make In India (MII) Certificate Generator</h1>
          <p>
            <strong>Generate Make In India (MII) Certificate</strong> to
            participate as class 1 and class 2 local supplier in GeM Bids.
          </p>
          <Share
            url="https://www.edafter.com/tools/make-in-india"
            title="Make In India (MII) Certificate Generator"
            description="Generate Make In India (MII) Certificate to participate in class 1 and class 2 Local Supplier on GeM"
          />
          <hr />
          <Ads/>
          {pdfGenerated ? (
            <>
              <h3 className="margin">
                Make In India Certificate for GeM Bid No: {bidNo}
              </h3>
              <p>
                Your Make In India Certificate is generated. You can download it
                or click on re-generate button to Re-generate new one.
              </p>
              <PDFDownloadLink
                document={
                  <MiiTemplate
                    companyName={companyName}
                    percentage={percentage}
                    address={address}
                    bidNo={bidNo}
                  />
                }
                fileName="make in india certificate.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? (
                    <Loader />
                  ) : (
                    <button className="button button--primary button--lg">
                      <DownloadIcon /> Download
                    </button>
                  )
                }
              </PDFDownloadLink>
              <div className="margin">
                <button
                  className="button button--secondary button--lg"
                  onClick={handleRegenerate}
                >
                  <RepeatIcon /> Re-generate
                </button>
              </div>
              <PDFViewer
                width={400}
                height={500}
                showToolbar={true}
                className="margin"
              >
                <MiiTemplate
                  companyName={companyName}
                  percentage={percentage}
                  address={address}
                  bidNo={bidNo}
                />
              </PDFViewer>
              <Ads/>
            </>
          ) : (
            <form onSubmit={HandleSubmit}>
              <p className="center">
                Just enter the few details and click on Generate button to get
                your <strong>Make In India (MII)</strong> Certificate
              </p>
              <div className="form_div">
                <div className="form_field">
                  <label htmlFor="name">Company Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form_field">
                  <label htmlFor="bid">GeM Bid/RA Number</label>
                  <input type="text" id="bid" name="bid" required />
                </div>
                <div className="form_field">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" name="address" required />
                </div>
                <div className="form_field">
                  <label htmlFor="percentage">Local Content Percentage</label>
                  <input type="number" id="percentage" name="percentage" />
                  <small>It should be greater than 50% for class I and 20% for class II Local Suppliers</small>
                </div>
                <p>
                  By Clicking generate button, you are agreed to our{" "}
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
              <Ads/>
            </form>
          )}
        </div>
        <hr />
        <Ads/>
        <Feedback />
        <h3 className="center margin-vert--sm">FAQ</h3>
        <hr />
        <h2>What is Make In India (MII) Certificate?</h2>
        <p>
          Make In India (MII) is a self declaration letter in which a
          manufacturer declare about the Local content used in the manufacturing
          process of the said product.
        </p>
        <hr />
        <h2>What is Public Procurement Order 2017?</h2>
        <p>
          Government has issued Public Procurement (Preference to Make in India)
          [PPP-MII] Order 2017 vide the Department for Promotion of Industry and
          Internal Trade (DPIIT) Order No.P-45021/2/2017-B.E.-II dated
          15.06.2017 and subsequent revisions vide Order No.
          45021/2/2017-PP(BE-II) dated 28.05.2018, 29.05.2019, 04.06.2020 and
          16.09.2020 to encourage "Make in India" and to promote manufacturing
          and production of goods, services and works in India with a view to
          enhancing income and employment. This Order is issued pursuant to Rule
          153 (iii) of the General Financial Rules 2017.{" "}
          <a href="https://www.meity.gov.in/esdm/ppo">Read more</a>
        </p>
        <hr />
        <Ads/>
        <h2>What is Class-I Local supplier?</h2>
        <p>
          A supplier or service provider, whose goods, services or works offered
          for procurement, has local content equal to or more than 50%.
        </p>
        <hr />
        <h2>What is Class-II Local supplier?</h2>
        <p>
          A supplier or service provider, whose goods, services or works offered
          for procurement, has local content more than 20% but less than 50%.
        </p>
        <hr />
        <h2>What is Non-Local supplier?</h2>
        <p>
          A supplier or service provider, whose goods, services or works offered
          for procurement, has local content less than or equal to 20%.
        </p>
        <Ads/>
      </main>
    </Layout>
  );
}

export default Mii;
