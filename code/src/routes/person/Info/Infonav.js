import React from 'react';
import { connect } from 'react-redux';

import NavTopCart from '../../../component/NavTopCart';

class Infonav extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return <NavTopCart />
    }
}
export default connect()(Infonav);
// export default withRouter(connect(null, { ...action.person })(Form.create()(Infonav)));