import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import action from '../../services/trending/action';
import Modal from '../../components/Modal/index'
import {Container, Row} from 'react-bootstrap';
import Trending from './ListTrending';
import ListButton from './ListButton';
import Img from 'react-image';
import Loader from '../../components/Loader';

class Home extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.action.getTrending();
  }

  render() {
    const { trendings, pending, offset } = this.props.trending;
    const loading = <div className="loading"></div>;
    return (
      <div className="trending-container">
        <Container>
          <Row>
            {pending ?
              <Loader
                type="ThreeDots"
                width="40"
                height="40"
                color="#000000"
              /> :
              trendings.map((trending, index) =>
              <Trending
                key={index}
                trending={trending}
                action={this.props.action}
              />
            )}
            <ListButton
              action={this.props.action.getTrending}
              offset={offset}
            />
          </Row>
          <Modal
            isOpen={this.props.modal.isOpen}
            handleClose={() => this.props.action.closeModal()}
          >
            <Img
              src={this.props.modal.data}
              loader={loading}
            />
          </Modal>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(action, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);