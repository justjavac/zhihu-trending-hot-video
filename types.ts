export type Item = {
  target: {
    title_area: {
      text: string;
    };
    link: {
      url: string;
    };
  };
};

export type Question = {
  title: string;
  url: string;
};

export type HotList = {
  data: Item[];
};
