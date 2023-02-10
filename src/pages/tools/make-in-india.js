import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Loader from "../../components/loader";
// import jsPDF from 'jspdf';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

function Mii() {
  const [isLoading, setLoading] = useState(false);
  const [companyName, setcompanyName] = useState("XYZ Pvt. Ltd.");
  const [percentage, setpercentage] = useState("100");
  const [bidNo, setbidNo] = useState("GEM/2023/B/XXXXXX");
  const [address, setaddress] = useState("My Road Name, New Delhi.");
  const [pdfGenerated, setpdfGenerated] = useState(false);

  const styles = StyleSheet.create({
    section: {
      margin: 10,
      padding: 10,
    },
    // viewer: {
    //   width: window.innerWidth / 2, //the pdf viewer will take up all of the width and height
    //   height: window.innerHeight / 1.2,
    // },
    heading: {
      fontSize: 18,
      textAlign: "center",
      textDecoration: "underline",
      margin: 1.2,
    },
    smallText: {
      fontSize: 10,
      textAlign: "center",
    },
    paragraph: {
      fontSize: 13,
      padding: 5,
      lineHeight: 1.2,
      fontWeight: "bold",
    },
    footer: {
      position: "absolute",
      fontSize: 7,
      bottom: 10,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });

  const handleRegenerate = () => {
    setpdfGenerated(false);
  };

  const renderedPdf = () => {
    return (
      <>
        <h3 className="margin">
          Make In India Certificate for GeM Bid No: {bidNo}
        </h3>
        <PDFViewer style={{width: window.innerWidth / 2,
        height: window.innerHeight / 1.2}}>
          {/* Start of the document*/}
          <Document
            title="Make In India Certificate"
            creator="Edafter"
            producer="Edafter"
          >
            {/*render a single page*/}
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.heading}>
                  Self-Certification under preference to Make in India order
                </Text>
                <Text style={styles.smallText}>
                  (Refer Clause No. 2.8 & 3.4.4 of ITT)
                </Text>
                <Text style={styles.heading}>CERTIFICATE</Text>
                <Text style={styles.paragraph}>
                  In line with Government Public Procurement Order No.
                  P-45021/2/2017-PP (BE-II) dated 04.06.2020 and its amendments,
                  we hereby certify that we M/s {companyName} are local supplier
                  meeting the requirement of minimum local content i.e.,{" "}
                  {percentage}% as defined in above orders for the material
                  against GeM Bid No {bidNo}.
                </Text>
                <Text style={styles.paragraph}>
                  Details of location at which local value addition will be made
                  as follows:
                </Text>
                <Text style={styles.paragraph}>{address}</Text>
                <Text style={styles.paragraph}>
                  We also understand, false declarations will be in breach of
                  the code of integrity under rule 175(1)(i)(h) of the General
                  Financial Rules for which a bidder or its successors can be
                  debarred for up to two years as per Rule 151(iii) of the
                  General Financial Rules along with such other actions as may
                  be permissible under law.
                </Text>
                <Text style={styles.paragraph}>For {companyName}</Text>
              </View>
              <Text style={styles.footer}>
                This certificate is created by Edafter.
              </Text>
            </Page>
          </Document>
        </PDFViewer>
        <div className="margin">
          <button
            className="button button--primary button--lg"
            onClick={handleRegenerate}
          >
            Re-generate
          </button>
        </div>
      </>
    );
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    setcompanyName(data.get("name"));
    setpercentage(data.get("percentage"));
    setbidNo(data.get("bid"));
    setaddress(data.get("address"));
    setpdfGenerated(true);
    setLoading(false);
  };

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
          <hr />
          {pdfGenerated ? (
            renderedPdf()
          ) : (
            <form onSubmit={HandleSubmit}>
              <p className="center">
                Just enter the few details and click on Generate button to get
                your <strong>Make In India (MII)</strong> Certificate
              </p>
              <div className="form_div">
                <div className="form_field">
                  <label for="name">Company Name</label>
                  <input type="text" id="name" name="name" required/>
                </div>
                <div className="form_field">
                  <label for="bid">GeM Bid/RA Number</label>
                  <input type="text" id="bid" name="bid" required/>
                </div>
                <div className="form_field">
                  <label for="address">Address</label>
                  <input type="text" id="address" name="address" required/>
                </div>
                <div className="form_field">
                  <label for="percentage">Local Content Percentage</label>
                  <input type="number" id="percentage" name="percentage" />
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
          <summary>What is Make In India (MII) Certificate?</summary>
          <p className="faq__content">
            Make In India (MII) is a self declaration letter in which a
            manufacturer declare about the Local content used in the
            manufacturing process of the said product.
          </p>
        </details>
        <details>
          <summary>What is Public Procurement Order 2017?</summary>
          <p className="faq__content">
            Government has issued Public Procurement (Preference to Make in
            India) [PPP-MII] Order 2017 vide the Department for Promotion of
            Industry and Internal Trade (DPIIT) Order No.P-45021/2/2017-B.E.-II
            dated 15.06.2017 and subsequent revisions vide Order No.
            45021/2/2017-PP(BE-II) dated 28.05.2018, 29.05.2019, 04.06.2020 and
            16.09.2020 to encourage "Make in India" and to promote manufacturing
            and production of goods, services and works in India with a view to
            enhancing income and employment. This Order is issued pursuant to
            Rule 153 (iii) of the General Financial Rules 2017. <a href="https://www.meity.gov.in/esdm/ppo">Read more</a>
          </p>
        </details>
        <details>
          <summary>What is Class-I Local supplier?</summary>
          <p className="faq__content">
            A supplier or service provider, whose goods, services or works
            offered for procurement, has local content equal to or more than
            50%.
          </p>
        </details>
        <details>
          <summary>What is Class-II Local supplier?</summary>
          <p className="faq__content">
            A supplier or service provider, whose goods, services or works
            offered for procurement, has local content more than 20% but less
            than 50%.
          </p>
        </details>
        <details>
          <summary>What is Non-Local supplier?</summary>
          <p className="faq__content">
            A supplier or service provider, whose goods, services or works
            offered for procurement, has local content less than or equal to
            20%.
          </p>
        </details>
      </main>
    </Layout>
  );
}

export default Mii;
