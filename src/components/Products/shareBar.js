import React from 'react';
import { FormattedMessage } from 'react-intl';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SVG from '../SVG';

// Copy to Clipboard: https://www.npmjs.com/package/react-copy-to-clipboard

const ProductImage = (props) => {
  return (
    <div className="story-actions">
      <nav className="nav nav-sharebar cf active">
        {/* <span className="is-accessible"><FormattedMessage id="shareBar" /></span> */}
        <ul>
          <li>
            <a id="share-facebook-new-skyr" href="https://thetaste.liberte.ca/new-skyr" className="share-facebook share-facebook-new-skyr">
              {/* <span className="is-accessible"><FormattedMessage id="shareFacebook" /></span> */}
              <i className="icon icon-facebook"><SVG icon='facebook' /></i>
            </a>
          </li>
          <li>
            <a id="share-twitter-new-skyr" href="http://twitter.com/share?url=https://thetaste.liberte.ca/new-skyr&amp;via=libertecan&amp;text=Firm Tart Velvety" target="_blank" className="share-twitter share-twitter-new-skyr" data-url="https://thetaste.liberte.ca/https://thetaste.liberte.ca/new-skyr">
              {/* <span className="is-accessible"><FormattedMessage id="shareTwitter" /></span> */}
              <i className="icon icon-twitter"><SVG icon='twitter' /></i>
            </a>
          </li>
          <li>
            <a id="share-pinterest-new-skyr" href="https://thetaste.liberte.ca/new-skyr" className="share-pinterest share-pinterest-new-skyr" data-url="https://thetaste.liberte.ca/new-skyr" data-media="https://thetaste.liberte.ca/data/share/img/pure-icelandic.jpg" data-description="Firm Tart Velvety">
              {/* <span className="is-accessible"><FormattedMessage id="sharePinterest" /></span> */}
              <i className="icon icon-pinterest"></i>
            </a>
          </li>
          <li>
            <button id="share-copy-new-skyr" className="share-copy" data-clipboard-text="https://thetaste.liberte.ca/new-skyr">
              {/* <span className="is-accessible"><FormattedMessage id="copyLink" /></span> */}
              <i className="icon icon-link"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default ProductImage
