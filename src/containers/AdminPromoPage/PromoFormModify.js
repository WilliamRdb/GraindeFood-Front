import { connect } from 'react-redux';
import PromoFormModify from 'src/pages/AdminPromoPage/PromoFormModify.js';
import {
    setNewPromoCode,
    setNewPromoPourcent,
    setNewPromoStartDate,
    setNewPromoEndDate,
} from 'src/actions/admin';

const mapStateToProps = (state) => ({
    promoCode: state.promoCode,
    promoPourcent: state.promoPourcent,
    promoStartDate: state.promoStartDate, 
    promoEndDate: state.promoEndDate,
});

const mapDispatchToProps = (dispatch) => ({
  setNewPromoCode: (element) => dispatch(setNewPromoCode(element)),
  setNewPromoPourcent: (element) => dispatch(setNewPromoPourcent(element)),
  setNewPromoStartDate: (element) => dispatch(setNewPromoStartDate(element)),
  setNewPromoEndDate: (element) => dispatch(setNewPromoEndDate(element))
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoFormModify);
