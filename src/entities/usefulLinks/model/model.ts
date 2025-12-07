export interface UsefulLinkModel {
  key: string;
  label: string;
  link: string;
}

export interface UsefulLinkBlockModel {
  useful_links: {
    title: string;
    key: string;
    data: UsefulLinkModel[];
  }[];
}
