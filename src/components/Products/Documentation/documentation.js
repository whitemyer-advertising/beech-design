import React from "react";
import { DocumentationStyles } from "./styles";
import { PDFLink } from '../../../components/PDFLink/pdf-link';
import { Theme } from "../../../components/Styles/theme";

export const Documentation = ({docs, product}) => (
    <DocumentationStyles>
        <h2 id="documentation">Documentation</h2>
        <Theme.Rule />
        <div className="links-col">
            {docs.filter(f => f.product === product).map(data =>
                (data.info.length > 3 ? data.info.slice(0, -2) : data.info).map(info =>
                    <PDFLink key={info.id} url={info.url} text={info.name} />
                )
            )}
        </div>
        <div className="links-col second">
            {docs.filter(f => f.product === product).map(data =>
                (data.info.length > 3 ? data.info.slice(-2).map(info =>
                    <PDFLink key={info.id} url={info.url} text={info.name} />
                )
                : null)
            )}
        </div>
    </DocumentationStyles>
)