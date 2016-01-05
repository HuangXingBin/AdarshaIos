import _ from 'lodash';
import React, {Text} from 'react-native';
import {values} from '../styles/global.style';
import {getHighlightStyle} from '.';

export default function highlight(text, hits = [], fn = () => {}) {

  if (_.isEmpty(hits)) {
    return [<Text key={0}>{text}</Text>];
  }

  return hits.reduce((data, hit, index, arr) => {

    let {tags, pos} = data;
    let [start, length, nWord] = hit;

    if (start > pos) {
      tags.push(fn(pos, text.substring(pos, start)));
    }

    const highlightStyle = getHighlightStyle(nWord);

    tags.push(fn('h' + pos, text.substr(start, length), highlightStyle));
    data.pos = start += length;

    if (index === (arr.length - 1)) {
      tags.push(fn(data.pos, text.substr(data.pos)));
    }

    return data;
  }, {tags: [], pos: 0}).tags;
}
