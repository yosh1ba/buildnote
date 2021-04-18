import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import * as Styles from './tagsList.module.scss';

const Tag = ({ tag }) => (

    <li className={Styles.tag}>
      <Link className={Styles.link} to={`/tags/${kebabCase(tag)}/`}>
      {tag}
      </Link>
    </li>
);

const Tagslist = ({ tags }) => (
  <div>
  <ul className={Styles.tags}>
    {(tags || []).map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </ul>
  </div>

);

export default Tagslist