import React from 'react'
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet
  } from "@react-pdf/renderer";

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

function MiiTemplate(props) {
  return (
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
                  we hereby certify that we M/s {props.companyName} are local supplier
                  meeting the requirement of minimum local content i.e.,{" "}
                  {props.percentage}% as defined in above orders for the material
                  against GeM Bid No {props.bidNo}.
                </Text>
                <Text style={styles.paragraph}>
                  Details of location at which local value addition will be made
                  as follows:
                </Text>
                <Text style={styles.paragraph}>{props.address}</Text>
                <Text style={styles.paragraph}>
                  We also understand, false declarations will be in breach of
                  the code of integrity under rule 175(1)(i)(h) of the General
                  Financial Rules for which a bidder or its successors can be
                  debarred for up to two years as per Rule 151(iii) of the
                  General Financial Rules along with such other actions as may
                  be permissible under law.
                </Text>
                <Text style={styles.paragraph}>For {props.companyName}</Text>
              </View>
              <Text style={styles.footer}>
                This certificate is created by Edafter.
              </Text>
            </Page>
          </Document>
  )
}

export default MiiTemplate