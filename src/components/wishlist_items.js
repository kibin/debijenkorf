import { WishlistControls, WishlistItem } from './';

import './wishlist_items.styl';

export class WishlistItems extends React.Component {
  render() {
    let { items, controls } = this.props;

    return (
      <div className="wishlist-items">
        <WishlistControls {...controls} />

        {items.map((props, key) => <WishlistItem key={key} {...{ ...props, ...controls }} />)}

        <WishlistControls {...controls} />
      </div>
    );
  }
}
