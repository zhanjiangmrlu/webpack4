import _ from 'lodash';

function createDomElement() {
  let dom = domcument.createDomElement('div');
  dom.innerHTML = _.join(['aicoder', '.com', 'wow'], '');
  return dom;
}

document.body.appendChild(createDomElement());