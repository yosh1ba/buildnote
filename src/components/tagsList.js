import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import * as Styles from './tagsList.module.scss';
import { divide } from 'lodash-es';

const Tag = ({ tag }) => (
  <Link className={Styles.link} to={`/tags/${kebabCase(tag)}/`}>
    <li className={Styles.tag}>{tag}</li>
  </Link>
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