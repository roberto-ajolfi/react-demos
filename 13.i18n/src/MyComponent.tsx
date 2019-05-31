import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class MyComponent extends Component<any, any> {
    render() {
        const { t } = this.props;

        return (
            <div className="mycomponent">
                <h2>{t('mycomponentlabel')}</h2>
                <h3>Questa parte non è stata localizzata ...</h3>
            </div>
        );
    }
}

export default withTranslation()(MyComponent);