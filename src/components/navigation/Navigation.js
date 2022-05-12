import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'gatsby';
import { 
navLinks, 
navLinkItem, 
navLinkText,
navBar,
container,
navContainer,
checkBox,
hamburgerLines,
line,
line1,
line2,
line3,
logo,
menuItems
} from './navigation.module.css';


const Navigation = () => {

  const data = useStaticQuery(graphql`
    query {
      wpMenu(slug: {eq: "navigation"}) {
        id
        name
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  `)

  return (
    <nav>
        <div className={navBar}>
          <div className={`${container} ${navContainer}`} >
              <input className={checkBox} type="checkbox" name="" id="" />
              <div className={hamburgerLines}>
                <span className={`${line} ${line1}`}></span>
                <span className={`${line} ${line2}`}></span>
                <span className={`${line} ${line3}`}></span>
              </div>
                <ul className={menuItems} key={1}>
                {data.wpMenu.menuItems.nodes.map(node => (          
                  <li>
                      <Link to={node.url} className={navLinkText}>
                          {node.label}
                      </Link>
                  </li>))}
                </ul>
          </div>
        </div>
    </nav>

  );
};

export default Navigation;
