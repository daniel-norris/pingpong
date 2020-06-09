import { connect } from 'react-redux'; 

import Button from './Button'; 

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish
    };
};

export default connect(mapStateToProps)(Button); 