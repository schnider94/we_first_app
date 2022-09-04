import "styles/style.scss";

import navbar, { Page } from "components/navbar";

const navbarElem = navbar({ page: Page.about });

document.body.append(navbarElem);
