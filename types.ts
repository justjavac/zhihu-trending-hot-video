export type Item = {
  target: {
    titleArea: {
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
