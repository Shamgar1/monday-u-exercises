import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getItemsView } from "../../../selectors/items-view-selectors";
import { searchSucsess } from "../../../actions/search-items-action";
import { ListSearch } from "./ListSearch";

const mapStateToProps = (state, ownProps) => {
	const searchedItems = getItemsView(state);
	return {
		searchedItems,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ searchSucsess }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(ListSearch);
