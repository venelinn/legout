import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FaTwitter, FaInstagram, FaPinterest, FaFacebook } from 'react-icons/fa';

const FooterFr = () => (
  <>
  <div className="layout-wrapper section cf">
  <nav className="nav nav-footer cf">
				<ul>
					<li>
						<a href="http://www.liberte.ca/fr/" target="_blank" className="item-link footer footer-link">
							Accueil						</a>
					</li>
					<li>
						<a href="javascript:void(0);" className="item-link footer footer-link">
							À propos de nous						</a>
					</li>
					<li>
						<a href="http://www.liberte.ca/fr/nous-joindre" target="_blank" className="item-link footer footer-link">
							Nous joindre						</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="http://www.liberte.ca/fr/produits" className="item-link footer footer-link">
							Produits						</a>

						<ul>
							<li>
								<a href="http://www.liberte.ca/fr/produits/" className="item-link footer footer-link">
									Tous les produits								</a>
							</li>
							<li>
								<a target="_self" href="http://www.liberte.ca/fr/produits/yogourt" className="item-link footer footer-link">
									Yogourt								</a>
							</li>
							<li>
								<a target="_self" href="http://www.liberte.ca/fr/produits/kefir" className="item-link footer footer-link">
									Kéfir								</a>
							</li>
							<li>
								<a href="http://www.liberte.ca/fr/produits/fromage-beurre" className="item-link footer footer-link">
									Fromage et beurre								</a>
							</li>
							<li>
								<a href="http://www.liberte.ca/fr/produits/creme-sure-creme-fraiche" className="item-link footer footer-link">
									Crème sure - Crème fraîche								</a>
							</li>
							<li>
								<a href="http://www.liberte.ca/fr/produits/produits-de-chevre" className="item-link footer footer-link">
									Produits de chèvre								</a>
							</li>
							<li>
								<a href="http://www.liberte.ca/fr/produits/tofu" className="item-link footer footer-link">
									Tofu								</a>
							</li>
						</ul>
					</li>
				</ul>

				<ul>
					<li>
						<a href="http://www.liberte.ca/fr/recettes/" className="item-link footer footer-link">
							Recettes						</a>

						<ul>
							<li>
								<a href="http://www.liberte.ca/fr/recettes/toutes/" className="item-link footer footer-link">
									Toutes les recettes								</a>
							</li>
							<li>
								<a href="http://www.liberte.ca/fr/recettes/" className="item-link footer footer-link">
									Nouvelles recettes								</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="http://www.liberte.ca/fr/communaute" className="item-link footer footer-link">
							Communauté						</a>
					</li>
					<li>
						<a href="http://www.liberte.ca/fr/faq" className="item-link footer footer-link">
							FAQ						</a>
					</li>
				</ul>

				<ul>
					<li>
						<a href="http://tourneeliberte.ca/#!/fr" className="item-link footer footer-link">
							Tournée Artisan						</a>
					</li>
				</ul>
			</nav>
    <div className="footer-socials">
      <div className="logos-sociaux">
        <p>Suivez-nous</p>
        <div>
          <a className="slink footer footer-link-social" href="https://www.twitter.com/liberteqc" target="_blank">
            <FaTwitter />
          </a>
          <a className="slink footer footer-link-social" href="https://www.facebook.com/LiberteCan" target="_blank">
            <FaFacebook />
          </a>
          <a className="slink footer footer-link-social" href="http://www.pinterest.com/libertecanada/" target="_blank">
            <FaPinterest />
          </a>
          <a className="slink footer footer-link-social" href="http://www.instagram.com/libertecanada" target="_blank">
            <FaInstagram  />
          </a>
        </div>
      </div>
    </div>
  </div>
    <div className="subfooter">
			<div className="layout-wrapper section cf">
				<nav className="nav nav-subfooter pull-left">
					<ul>
						<li>
							<a href="http://www.liberte.ca/fr/conditions-dutilisation" className="item-link">
								Conditions d'utilisation							</a>
						</li>
						<li>
							<a href="http://www.liberte.ca/fr/confidentialite" className="item-link">
								Confidentialité							</a>
						</li>
					</ul>
				</nav>

				<p className="r-align">© 2016 Les produits de marque Liberté inc. Tous droits réservés</p>
			</div>
		</div>
  </>
)

FooterFr.propTypes = {
  langsMenu: PropTypes.array,
  locale: PropTypes.string
}

export default FooterFr;
