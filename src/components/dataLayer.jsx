import React from 'react';

/**
 * A component for pushing events into the GTM datalayer. Uses component did mount to ensure a window dom element is available.
 * Further work is needed on this component to make it more powerful
 */
export default class DataLayer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <></>;
    }
    componentDidMount() {
        const { event, action, label } = this.props;
        
        {
            window.dataLayer.push({
                event: event,
                action: action,
                label: label
            });
        }
    }
}