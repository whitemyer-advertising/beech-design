import React from "react";
import { MobileSpecTableStyles } from "./styles";
import PlusIcon from '../../../../../img/large-plus-icon.png';
import MinusIcon from '../../../../../img/large-minus-icon.png';

export class MobileSpecTables extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false }

        this.toggleSpecExpansion = this.toggleSpecExpansion.bind(this);
    }

    toggleSpecExpansion = (el) => {
        const singleSpec = el.currentTarget.parentElement;
        const expandText = el.currentTarget.querySelector('.expand-text');
        const expandImage = el.currentTarget.querySelector('.expand-img');
        singleSpec.classList.toggle('expanded');
        if (singleSpec.classList.contains('expanded')) {
            this.setState({ expanded: true });
            expandText.innerHTML = 'Collapse';
            expandImage.src = MinusIcon;
        } else {
            this.setState({ expanded: false });
            expandText.innerHTML = 'Expand';
            expandImage.src = PlusIcon;
        }
    }

    render() {
        return (
            <MobileSpecTableStyles>
                {this.props.specs.map(spec =>
                    <div className="single-spec">
                        <div className="header" onClick={this.toggleSpecExpansion}>
                            <h4>{spec.model_no}</h4>
                            <span className="expand-icon">
                                <p className="expand-text">Expand</p>
                                <img className="expand-img" src={PlusIcon} alt="Expanded Specs" />
                            </span>
                        </div>
                        <table>
                            <tbody>
                            {this.props.columns.slice(1).map(col =>
                                <tr>
                                    <td>{col.Header}</td>
                                    <td>{spec[col.accessor]}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                )}
            </MobileSpecTableStyles>
        )
    }
}