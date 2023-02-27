import React, {useEffect} from 'react';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/theme-common/internal';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
import TawkTo from 'tawkto-react'
export default function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
  const MDXComponent = props.content;
  const propertyId = "63f7891931ebfa0fe7eeef97";
  const tawkId = "1gpvev3c6";

  useEffect(() => {
    
    var tawk = new TawkTo(propertyId, tawkId)

    tawk.onStatusChange((status) => 
    {
    })

}, [])

  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
