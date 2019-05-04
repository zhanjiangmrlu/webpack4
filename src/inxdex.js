import _ from 'lodash';

function component() {
  let dom = document.createElement('div');
  dom.innerHTML = _.join(['aicoder', '.com', 'wow'], '');
  return dom;
}

document.body.appendChild(component());