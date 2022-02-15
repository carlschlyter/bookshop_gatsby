import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby'
import { navLinks, navLinkItem, navLinkText } from './navigation.module.css'

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
    <div>
    
      <nav>
        <ul className={navLinks} key={1}>
          {data.wpMenu.menuItems.nodes.map(node => (          
            <li className={navLinkItem}>
                <Link to={node.url} className={navLinkText}>
                    {node.label}
                </Link>
            </li>))}
        </ul>
      </nav>
  
    </div>

  );
};

export default Navigation;
