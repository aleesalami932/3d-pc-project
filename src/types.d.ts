declare module "react-tilt";
declare module "react-vertical-timeline-component";
declare namespace React {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    options?: any;
  }
}
