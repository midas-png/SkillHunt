type ArrayNumberOf3 = [number, number, number];
type ArrayNumberOf5 = [number, number, number, number, number];

export interface IProps {
  image: string;
  position: ArrayNumberOf3;
  rotation: ArrayNumberOf3;
  args: ArrayNumberOf5;
}
