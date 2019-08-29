import React from 'react';
import {Col} from 'react-bootstrap';

const Trending = (props) => {
  const { trending, action } = props;
  return (
    <Col key={trending.id} xs={6} sm={4} lg={3}>
      <div className="trending">
        <a
          onClick={
             () => action.openModal(
               trending.images.downsized_large.url
             )
           }
        >
          <div className="mask-overlay"></div>
          <div className="trending-photo"
               style={{
                 backgroundImage: `url(${trending.images.downsized.url})`
               }}
          >
          </div>
        </a>
        {props.trending.user ?
          <div className="trending-user clearfix">
            <div
              className="trending-avatar"
              style={{
                backgroundImage: `url(${trending.user === undefined ?
                  '' : trending.user.avatar_url })`
              }}
            >
            </div>
            <h3>{trending.user.display_name}</h3>
          </div> :
          <div className="trending-user clearfix">
            <div className="trending-no-avatar"></div>
            <h3>Admin</h3>
          </div>
        }
      </div>
    </Col>
  )
}

export default Trending;