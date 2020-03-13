// declare module "*";
import {compose} from "redux";

declare global {
    interface Window {
        devToolsExtension?: typeof compose;
    }
}

declare module '*.less' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}
