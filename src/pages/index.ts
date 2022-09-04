import "styles/style.scss";

import navbar, { Page } from "components/navbar";

const navbarElem = navbar({ page: Page.home });

document.body.append(navbarElem);
