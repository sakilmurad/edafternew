import React, { useState } from "react";
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

// Create styles
const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth / 2, //the pdf viewer will take up all of the width and height
    height: window.innerHeight / 1.2,
  },
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
    fontWeight: "bold"
  },
  footer:{
    position: 'absolute',
    fontSize: 7,
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  }
});

function Mii() {
  const [isLoading, setLoading] = useState(false);
  const [companyName, setcompanyName] = useState("XYZ Pvt. Ltd.");
  const [percentage, setpercentage] = useState("100");
  const [bidNo, setbidNo] = useState("GEM/2023/B/XXXXXX");
  const [address, setaddress] = useState("My Road Name, New Delhi.");
  const [pdfGenerated, setpdfGenerated] = useState(false);

  const renderedPdf = () =>{
    return(
      <>
      <h3>Make In India Certificate for GeM Bid No: {bidNo}</h3>
      <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document title="Make In India Certificate" creator="Edafter" producer="Edafter">
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
              meeting the requirement of minimum local content i.e., {percentage}% as defined in above orders for the material
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
            <Text style={styles.footer}>This certificate is created by Edafter.</Text>
        </Page>
      </Document>
    </PDFViewer>
    </>
    )
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    setcompanyName(data.get("name"))
    setpercentage(data.get("percentage"))
    setbidNo(data.get("bid"))
    setaddress(data.get("address"))
    setpdfGenerated(true)
    setLoading(false);
  };

  return (
    <Layout
      title="Make In India (MII) Certificate Generator for GeM (Government e-Marketplace)"
      description="Generate Make In India (MII) Certificate to participate in class 1 and class 2 Local Supplier on GeM."
    >
      <main className="container margin-vert--lg center">
        <h1>Make In India (MII) Certificate Generator</h1>
        <p>
          <strong>Generate Make In India (MII) Certificate</strong> to
          participate as class 1 and class 2 local supplier in GeM Bids.
        </p>
        {pdfGenerated?renderedPdf():  <form onSubmit={HandleSubmit}>
          <p className="center">
            Just enter the few details and click on Generate button to get your{" "}
            <strong>Make In India (MII)</strong> Certificate
          </p>
          <div className="form_div">
            <div className="form_field">
              <label for="name">Company Name</label>
              <input type="text" id="name" name="name"/>
            </div>
            <div className="form_field">
              <label for="bid">GeM Bid/RA Number</label>
              <input type="text" id="bid" name="bid"/>
            </div>
            <div className="form_field">
              <label for="address">Address</label>
              <input type="text" id="address" name="address"/>
            </div>
            <div className="form_field">
              <label for="percentage">Local Content Percentage</label>
              <input type="number" id="percentage" name="percentage"/>
            </div>
            <p>
              By Clicking generate button you are agree to our{" "}
              <Link href="/terms-and-conditions">terms and conditions</Link>
            </p>
            <div className="center">
              {isLoading ? <Loader /> : <button>GENERATE</button>}
            </div>
          </div>
        </form>}
      </main>
    </Layout>
  );
}

export default Mii;
