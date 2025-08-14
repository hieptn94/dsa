import { match, none, Option, some } from "@hieptn94/common/option";

export type SinglyLinkedList<T> = {
  value: T;
  next: Option<SinglyLinkedList<T>>;
};

export const map =
  <T, Out>(fn: (value: T) => Out) =>
  (list: Option<SinglyLinkedList<T>>): Option<SinglyLinkedList<Out>> =>
    match<SinglyLinkedList<T>, Option<SinglyLinkedList<Out>>>(list)(() =>
      none(),
    )((s) =>
      some({
        value: fn(s.value),
        next: map(fn)(s.next),
      }),
    );
