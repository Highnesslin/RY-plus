declare var window: Window & {
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
};

type IRouteProps = {
  path?: string;
  component?: React.ReactElement;
  exitUnDestory?: boolean;
  render?: (state) => React.ReactElement;
};

type IRouterProps = {
  initialPath: string;
};

type IRouterContext = {
  pageName: string;
  navigate: (pageName: string) => void;
};
