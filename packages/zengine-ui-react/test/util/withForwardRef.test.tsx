import React from 'react';
import { render } from '@testing-library/react';

import withForwardRef from '../../src/util/withForwardRef';

function TestComponent (props) {
  return <input type="text" name="reftext" ref={props.innerRef} />;
}

const RefTestComponent = withForwardRef(TestComponent);

test('it passes refs to the container component', () => {
  const ref = React.createRef();
  const { container } = render(<RefTestComponent ref={ref} />);
  expect(container.firstChild).toEqual(ref.current);
});

test('it sets displayName to indicate refs are being forwarded', () => {
  expect(RefTestComponent.render.displayName).toEqual('withForwardRef(TestComponent)');
});
