import React, {useState} from 'react'
import {
    Document,
    Page,
    Text,
    View,
    Link,
    StyleSheet
  } from "@react-pdf/renderer";

  const styles = StyleSheet.create({
    section: {
      margin: 10,
      padding: 10,
    },
    heading: {
      fontSize: 18,
      textAlign: "center",
      textDecoration: "underline",
      margin: 1.2,
    },
    headerTo:{
      marginLeft: 10,
      marginTop: 10,
      paddingLeft: 10,
    },
    subheading:{
      fontSize: 16,
      textAlign: "center",
      margin: 1.2,
    },
    headerPara:{
      fontSize: 13,
      fontWeight: "bold",
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

function OemAuthTemplate(props) {
  const [date, setDate] = useState(new Date().toDateString());
  return (
          <Document
            title="OEM Authorization Certificate"
            creator="Edafter"
            producer="Edafter"
          >
            {/*render a single page*/}
            <Page size="A4" style={styles.page}>
              <View style={styles.headerTo}>
                <Text style={styles.headerPara}>Date: {date}</Text>
                <Text style={styles.headerPara}> </Text>
              <Text style={styles.headerPara}>To,</Text>
                <Text style={styles.headerPara}>The CEO,</Text>
                <Text style={styles.headerPara}>GeM (Government e-Marketplace)</Text>
                <Text style={styles.headerPara}>Delhi.</Text>
              </View>
              <View style={styles.section}>
                <Text style={styles.heading}>
                Sub: Manufacturer's Authority Letter
                </Text>
                <Text style={styles.subheading}>
                GeM Bid No.: {props.bidNo}
                </Text>
                <Text style={styles.paragraph}>
                  Dear Sir/Ma'am,
                </Text>
                <Text style={styles.paragraph}>
                {"         "}                 We would like to inform you that {props.resellerName} is our authorized distributor for our {props.brand} range of products for the above mentioned tender.
                </Text>
                <Text style={styles.paragraph}>
                They are authorized to quote rates, collect supply orders, make supplies, raise their own invoices and collect payments on our behalf for the above mentioned GeM Bid.
                </Text>
                <Text style={styles.paragraph}>{props.address}</Text>
                <Text style={styles.paragraph}>
                The Authorization is Valid till the validity of the above bid.
                </Text>
                <Text style={styles.paragraph}>For {props.companyName}</Text>
              </View>
              <Text style={styles.footer}>
                This certificate is created by <Link src="https://www.edafter.com/tools/oem-authorization-certificate">Edafter</Link>.
              </Text>
            </Page>
          </Document>
  )
}

export default OemAuthTemplate