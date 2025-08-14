type None = {
  _tag: "none";
};

type Some<T> = {
  _tag: "some";
  value: T;
};

export type Option<T> = None | Some<T>;

export const none = <T = never>(): Option<T> => ({
  _tag: "none",
});

export const some = <T>(value: T): Option<T> => ({
  _tag: "some",
  value,
});

export const match =
  <T, N, S = N>(option: Option<T>) =>
  (onNone: () => N) =>
  (onSome: (value: T) => S): N | S => {
    switch (option._tag) {
      case "none":
        return onNone();
      case "some":
        return onSome(option.value);
    }
  };
