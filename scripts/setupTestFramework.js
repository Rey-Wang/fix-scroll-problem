import 'whatwg-fetch'
import '@testing-library/jest-dom/extend-expect'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

global.APP_ID = ''
global.BASE_NAME = ''
global.VERSION_STRING = 'TESTING'

//
// Stub out animations to simulate immediate completion
//
jest.mock('react-transition-group', () => {
  const FakeTransition = props => props.children
  const FakeCSSTransition = props =>
    props.in && props.children

  return {
    CSSTransition: FakeCSSTransition,
    Transition: FakeTransition,
  }
})
// rc-dialog is used by the antd Modal. Wrapping it with a version that
// disables transitions when the modal is opened or closed.
jest.mock('rc-dialog', () => {
  const React = require('react')
  const Dialog = jest.requireActual('rc-dialog')
  const WrappedDialog = props => (
    <Dialog
      {...props}
      transitionName={null}
      maskTransitionName={null}
    />
  )
  return WrappedDialog
})

// jsdom doesn't implement the ResizeObserver API, which is used by
// use-resize-observer, so we have to stub it out.
window.ResizeObserver = class ResizeObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
}

// Partially stub out the clipboard API so we can test the CopyToClipboard button.
let clipboardText = ''
window.navigator.clipboard = {
  writeText: txt => {
    clipboardText = txt
    return Promise.resolve()
  },
  readText: () => Promise.resolve(clipboardText),
}

// https://jestjs.io/docs/zh-Hans/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
