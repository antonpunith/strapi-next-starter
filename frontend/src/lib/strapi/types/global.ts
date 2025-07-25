export interface SubNav {
  id: string;
  title: string;
  slug: string;
}

export interface Nav {
  id: string;
  title: string;
  slug: string;
  subNav?: SubNav[];
}

export interface GlobalData {
  global: {
    header: {
      headerNavigation: Nav[];
    };
    footer: {
      footerNavigation: Nav[];
    };
  };
}
