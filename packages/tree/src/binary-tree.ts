import { match, none, Option } from "@hieptn94/common/option";

export type BinaryTree<T> = {
  readonly value: T;
  readonly left: Option<BinaryTree<T>>;
  readonly right: Option<BinaryTree<T>>;
};

export const search =
  (tree: Option<BinaryTree<number>>) =>
  (value: number): Option<BinaryTree<number>> =>
    match<
      BinaryTree<number>,
      Option<BinaryTree<number>>,
      Option<BinaryTree<number>>
    >(tree)(() => none<BinaryTree<number>>())((s) => {
      if (s.value === value) {
        return tree;
      }
      if (value > s.value) {
        return search(s.right)(value);
      }
      return search(s.left)(value);
    });
