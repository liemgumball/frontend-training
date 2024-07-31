type RemoveBoolean<T> = {
  [K in keyof T]: boolean extends T[K] ? never : K;
}[keyof T];

interface Inf1 {
  m1: string;
  m2: boolean;
  m3: number;
}

type NoBoolean1 = RemoveBoolean<Inf1>; // "m1" | "m3"

type RemoveBooleanWithMembers<P> = {
  [Key in RemoveBoolean<P>]: P[Key];
};

type NoBoolean2 = RemoveBooleanWithMembers<Inf1>; // {m1: string, m3: number}
