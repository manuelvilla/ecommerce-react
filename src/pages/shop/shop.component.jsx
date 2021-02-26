import React from 'react';
import './shop.styles.scss';

import ShopData from './shop.data.js'; //JSON data

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor (){
    super();
    this.state = {
      collections: ShopData
    }
  }

  render() {
    const {collections} = this.state;
    return(
      <div className="shop-page">
        {collections.map(({id, ...otherProps})=> (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }

}

export default ShopPage;
