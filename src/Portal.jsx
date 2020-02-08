import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

export default class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  // Creating Element
  componentDidMount = () => {
    portalRoot.appendChild(this.el)
  }
  
  // Deleting Element
  componentWillUnMount = () => {
    portalRoot.removeChild(this.el)
  }

  // Creating the portal with the children in the element
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}