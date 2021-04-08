import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import * as Styles from './tags.module.scss';

const Tag = ({ tag }) => (
  // <Link className={Styles.link} to={`/tags/${kebabCase(tag)}/`}>
    <li className={Styles.tag}>{tag}</li>
  // </Link>
);

const Tags = ({ tags }) => (
  <ul className={Styles.tags}>
    {(tags || []).map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </ul>
);

export default Tags